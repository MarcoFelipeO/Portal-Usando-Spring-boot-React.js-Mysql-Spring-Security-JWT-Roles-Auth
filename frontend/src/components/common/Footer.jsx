import React from 'react'

const FooterComponent = () => {
    return (
        <div>
            <footer className='footer'>
                <span>Marco Dev | Todos los derechos reservados &copy; {new Date().getFullYear()} </span>
            </footer>
        </div>
    )
}

export default FooterComponent