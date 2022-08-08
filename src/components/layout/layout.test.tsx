import { render, screen } from '@testing-library/react'

import { Layout } from './layout.component'

describe('Layout component', () => {
  it('should render with correct child', () => {
    render(
      <Layout>
        <h1>Hello world</h1>
      </Layout>
    )

    const component = screen.getAllByText('Hello world')
    expect(component).toHaveLength(1)
  })
})