import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LazyImage from '../LazyImage'

describe('LazyImage component', () => {
    it('should render the component', () => {
        render(<LazyImage />)
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
    })
    it.todo('should start with rendering the low res image')
    it.todo('should switch to the higher res image after fully loading')
})
