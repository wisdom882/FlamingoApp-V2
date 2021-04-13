import React from 'react'

import './footer.styles.css'

const footer = () => {
    return(
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li>about us</li>
                        <li>our services</li>
                        <li>privacy policy</li>
                        <li>affiliate program</li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li>FAQ</li>
                        <li>shipping</li>
                        <li>returns</li>
                        <li>order status</li>
                        <li>payment options</li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li>watch</li>
                        <li>bag</li>
                        <li>shoes</li>
                        <li>dress</li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
        </div>
   </footer>
    )

}

export default footer