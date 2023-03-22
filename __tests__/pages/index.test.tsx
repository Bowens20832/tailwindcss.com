import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: "The CMS framework for React developers",
    })

    await waitFor(() => {
      expect(heading).toBeInTheDocument();
    });
  });

  it('renders homepage unchanged', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})