import React from 'react'
import Header from './Header';
import Footer from './Footer';
import SectionContainer from './SectionContainer';

function Layout({ children }) {
    return (
        <>
            <header>
                <Header />
            </header>

            <main className='min-vh-100'>
                {React.Children.map(children, child => <SectionContainer>
                    {child}
                </SectionContainer>)}
            </main>

            <footer className='footer'>
                <Footer />
            </footer>
        </>
    )
}

export default Layout