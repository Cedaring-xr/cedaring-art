import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../Footer'

describe('Footer component', () => {
    it('should render the component', () => {
        render(<Footer />) 
        const footerLinks = screen.getAllByRole('link')
        expect(footerLinks).toHaveLength(3)
    })
    it('should have the correct text values for each link', () => {
        render(<Footer />)
        const twitterText = screen.getByText('@CedaringXR')
        const instagramText = screen.getByText('@cedaring_xr')
        const githubText = screen.getByText('Cedaring-xr')
        expect(twitterText).toBeInTheDocument()
        expect(instagramText).toBeInTheDocument()
        expect(githubText).toBeInTheDocument()
    })
    it('should render the images associated with the social links', () => {
        render(<Footer />)
        const footerImages = screen.getAllByRole('img')
        expect(footerImages).toHaveLength(3)
        footerImages.forEach(image => {
            expect(image).toBeInTheDocument()
        });
    })
})
