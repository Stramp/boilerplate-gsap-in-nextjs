import { renderWithTheme } from 'utils/tests/helpers'

import Stage from '.'

describe('<Stage />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Stage />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
