import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Writing from '../Writing'

describe('Writing page component', () => {
    it('should render the component', () => {
        render(<Writing />) 
        const writingHeader = screen.getByRole('heading', {level: 1})
        expect(writingHeader).toHaveTextContent('Exploritory writings about technology and the future')
    })
    it('should render each writing block', () => {
        render(<Writing />)
        const writingSubject = screen.getAllByRole('heading', {level: 3})
        expect(writingSubject).toHaveLength(4)
    })
    it('should be render the clickable view button for each writing block', () => {
        render(<Writing />)
        const viewButtons = screen.getAllByRole('button')
        expect(viewButtons).toHaveLength(4)
    })
})
