import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WritingModal from '../WritingModal'

describe('WritingModal component', () => {

    beforeAll(() => {
        ReactDOM.createPortal = jest.fn((element, node) => {
            return element
        })
    })

    afterEach(() => {
        ReactDOM.createPortal.mockClear()
    })

    it('should render the component', () => {
        render(<WritingModal />)
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
    })
    
})
