import React, { forwardRef } from 'react'
import * as S from './styles'
type IMyComponentProps = {
  ref?: React.RefObject<HTMLDivElement>
}

// type IMyComponentProps = {
//   text?: string
// }
const Header: React.ForwardRefRenderFunction<HTMLDivElement, IMyComponentProps> = (
  Props,
  ref
) => {
  return (
    <S.Box>
      <div id="c" ref={ref}>
        sdasdasda
      </div>
    </S.Box>
  )
}

export default forwardRef(Header)
