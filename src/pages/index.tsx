import { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Box = styled.div`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 1500px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
export default function Home() {
  const header = useRef<HTMLDivElement>(null)
  useEffect(() => {
    gsap.to('#thirdCircle', {
      x: 500,
      duration: 1,
      scrollTrigger: {
        trigger: '#thirdCircle',
        scrub: 1
      }
    })
  }, [])
  return (
    <>
      <div
        id="thirdCircle"
        ref={header}
        style={{
          backgroundColor: 'black',
          borderRadius: '50%',
          height: '100px',
          width: '100px',
          margin: '100px 0',
          border: ' 2px solid yellow',
          position: 'absolute',
          top: '1500px'
        }}
      />
      <div
        id="thirdCircle1"
        ref={header}
        style={{
          backgroundColor: 'red',
          borderRadius: '50%',
          height: '100px',
          width: '100px',
          margin: '400px 0',
          border: ' 2px solid yellow'
        }}
      />
      <div
        id="thirdCircle1"
        ref={header}
        style={{
          backgroundColor: 'red',
          borderRadius: '50%',
          height: '100px',
          width: '100px',
          margin: '200px 0',
          border: ' 2px solid yellow',
          position: 'absolute',
          top: '2500px'
        }}
      />
    </>
  )
}
