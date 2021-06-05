import React from 'react'

import './footer.styles.css'

const Footer = () => {
    return(
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li>about us</li>
                        <li>our services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Socials</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>SnapChat</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                
            </div>
        </div>
   </footer>
    )

}

export default Footer