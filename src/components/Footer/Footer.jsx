import React from 'react'
import '../../index.css'

function Footer() {
    return (
        <>
           
            <section>
                <div className="main-footer">
                    <div className="footer-links">
                        <ul>
                            <li><a href="">Build Software</a></li>
                            <li><a href="">Design Different</a></li>
                            <li><a href="">Apply Your Knowledge</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                        
                    </div>
                    
                    <div className="footer-address">
                        <div>Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, 
                            Expressway, Centenary City, Enugu. Nigeria
                        </div>
                    </div>
                    <div className="">
                        <img src="../images/image 32.jpg" alt="genesys"/>
                    </div>
                    <div className="footer-slogan">
                    Learnable is proud to be a collaborative effort of all the arms of our product team
                    </div>
                </div>
                <footer>
                    <div className="social-icons">
                            <i className="">facebook</i>
                            <i className="">instagram</i>
                            <i className="">twitter</i>
                            <i className="">linkedin</i>
                            <i className="">vimeo</i>
                    </div>
                    <div className="endDiv">Genesys 2020</div><div className="endDiv">Privacy Statement</div>
                </footer>
            </section>
        </>

    )
}

export default Footer
