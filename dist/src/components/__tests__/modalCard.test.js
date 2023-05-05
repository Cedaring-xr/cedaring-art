import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ModalCard from '../ModalCard'

describe('ModalCard component', () => {
    it('should render the component', () => {
        render(<ModalCard />)
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
    })
    it.todo('should be able to render 3d Scenes inside the modal')
    it.todo('should be able to render video scenes inside the modal')
})
