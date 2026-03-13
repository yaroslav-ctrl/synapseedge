import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const hero = canvas.parentElement
    if (!hero) return

    const gl: WebGLRenderingContext | null =
      (canvas.getContext('webgl') as WebGLRenderingContext | null) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null)
    if (!gl) return

    function resize() {
      if (!canvas || !hero) return
      canvas.width = hero.offsetWidth
      canvas.height = hero.offsetHeight
      gl!.viewport(0, 0, canvas.width, canvas.height)
    }
    window.addEventListener('resize', resize)
    resize()

    const VS = 'attribute vec2 a_pos; void main(){ gl_Position=vec4(a_pos,0.,1.); }'
    const FS = [
      'precision mediump float;',
      'uniform vec2 u_res;',
      'uniform vec2 u_mouse;',
      'uniform float u_time;',
      'vec3 palette(float t){ vec3 a=vec3(0.05,0.20,0.37); vec3 b=vec3(0.03,0.14,0.28); vec3 c=vec3(0.50,0.72,0.90); vec3 d=vec3(0.08,0.30,0.52); return a+b*cos(6.2831*(c*t+d)); }',
      'float circle(vec2 uv,float r){ return 1.-smoothstep(r-0.008,r+0.008,length(uv)); }',
      'void main(){',
      '  vec2 uv=gl_FragCoord.xy/u_res; vec2 mouse=u_mouse/u_res; uv.y=1.-uv.y;',
      '  float leftMask=smoothstep(0.28,0.02,uv.x);',
      '  float rightMask=smoothstep(0.94,1.00,uv.x)*0.35;',
      '  float zoneMask=max(leftMask,rightMask);',
      '  float vFade=smoothstep(0.,0.04,uv.y)*smoothstep(1.,0.95,uv.y);',
      '  zoneMask*=vFade;',
      '  if(zoneMask<0.002){ gl_FragColor=vec4(0.); return; }',
      '  vec2 toMouse=uv-mouse; float mDist=length(toMouse);',
      '  float ripple=sin(mDist*22.-u_time*3.0)*0.010*exp(-mDist*4.0);',
      '  vec2 uvD=uv+normalize(toMouse+0.001)*ripple;',
      '  float wx=sin(uvD.y*5.0+u_time*0.35)*0.014+sin(uvD.x*3.0+u_time*0.22)*0.008;',
      '  float wy=sin(uvD.x*6.0+u_time*0.28)*0.012;',
      '  vec2 uvW=uvD+vec2(wx,wy); uvW.x+=sin(uvW.y*4.0+u_time*0.5)*0.010;',
      '  vec2 uvA=uvW*vec2(u_res.x/u_res.y,1.0);',
      '  float t=u_time*0.18; float spd1=sin(uvA.x*2.1+uvA.y*1.8+t)*0.5+0.5;',
      '  vec2 g1=fract(uvA*8.0)-0.5; float r1=0.10+sin(spd1*6.28+u_time*0.6)*0.028; float dot1=circle(g1,r1);',
      '  vec2 g2=fract(uvA*16.0+0.5)-0.5; float spd2=sin(uvA.x*3.5+uvA.y*2.7+t*1.3)*0.5+0.5;',
      '  float r2=0.07+sin(spd2*6.28+u_time*0.8)*0.018; float dot2=circle(g2,r2)*0.55;',
      '  float colorT=uvD.x*0.5+uvD.y*0.3+u_time*0.07+sin(uvA.x*4.+uvA.y*3.+u_time*0.4)*0.15;',
      '  vec3 col=palette(colorT);',
      '  float mGlow=exp(-mDist*6.0)*0.25; col+=mGlow*vec3(0.25,0.50,0.85);',
      '  float dots=clamp(dot1+dot2,0.,1.); float alpha=dots*zoneMask*0.65;',
      '  alpha+=mGlow*zoneMask*0.18; alpha=clamp(alpha,0.,1.);',
      '  gl_FragColor=vec4(clamp(col,0.,1.),alpha);',
      '}',
    ].join('\n')

    function createShader(type: number, src: string): WebGLShader | null {
      const s = gl!.createShader(type)
      if (!s) return null
      gl!.shaderSource(s, src)
      gl!.compileShader(s)
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.warn(gl!.getShaderInfoLog(s))
        return null
      }
      return s
    }

    const vs = createShader(gl.VERTEX_SHADER, VS)
    const fs = createShader(gl.FRAGMENT_SHADER, FS)
    if (!vs || !fs) return

    const prog = gl.createProgram()
    if (!prog) return
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn(gl.getProgramInfoLog(prog))
      return
    }
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, 'u_res')
    const uMouse = gl.getUniformLocation(prog, 'u_mouse')
    const uTime = gl.getUniformLocation(prog, 'u_time')

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    let mx = 200, my = 200, tmx = 200, tmy = 200
    const mouseMoveHandler = (e: MouseEvent) => { tmx = e.clientX; tmy = e.clientY }
    window.addEventListener('mousemove', mouseMoveHandler, { passive: true })

    let active = true
    const t0 = performance.now()
    let rafId: number

    function draw() {
      rafId = requestAnimationFrame(draw)
      if (!active || !canvas) return
      mx += (tmx - mx) * 0.07
      my += (tmy - my) * 0.07

      const W = canvas.width
      const H = canvas.height
      const t = (performance.now() - t0) / 1000

      gl!.clearColor(0, 0, 0, 0)
      gl!.clear(gl!.COLOR_BUFFER_BIT)

      gl!.uniform2f(uRes, W, H)
      gl!.uniform2f(uMouse, mx, H - my)
      gl!.uniform1f(uTime, t)
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4)
    }
    draw()

    const observer = new IntersectionObserver(
      (entries) => { active = entries[0].isIntersecting },
      { threshold: 0 }
    )
    observer.observe(hero)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', mouseMoveHandler)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} id="hero-canvas" aria-hidden="true" />
}
