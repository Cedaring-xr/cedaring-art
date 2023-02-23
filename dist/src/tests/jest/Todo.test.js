import { render, screen, cleanup } from '@testing-library/react'
import Todo from '../../components/Todo'

test('should render Todo component', () => {
    render(<Todo />)
    const idElement = screen.getByTestId('id-1')
    expect(idElement).toBeInTheDocument()
})

// test('should pass', () => {
//     expect(true).toBe(true)
// })
