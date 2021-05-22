import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

describe('<Header />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Header />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
