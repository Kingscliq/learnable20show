import React from 'react'
import '../../index.css'

function Footer() {
    return (
        <>
           
            <section>
                <div className="main-footer font-secondary text-primary">
                    <div className="footer-links">
                        <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height:'200px'}}>
                            <li><p><a href="" className="btn-link text-primary">Build Software</a></p></li>
                            <li><p><a href=""  className="btn-link text-primary">Design Different</a></p></li>
                            <li><p><a href=""  className="btn-link text-primary">Apply Your Knowledge</a></p></li>
                            <li><p><a href=""  className="btn-link text-primary">FAQ</a></p></li>
                        </ul>
                        
                    </div>
                    
                    <div className="footer-address" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height:'150px'}}>
                        <div>
                            Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, 
                            Expressway, Centenary City, Enugu. Nigeria
                        </div>
                        <div><a href="" className="btn-link">Get in touch</a></div>
                    </div>
                    <div className="">
                        <img src="../images/image 32.jpg" alt="genesys"/>
                    </div>
                    <div className="footer-slogan" style={{alignSelf: 'center'}}>
                        <p className="p">Learnable is proud to be a collaborative effort of all the arms of our product team
                            </p>
                            <div><a href="" className="btn-link text-primary">Head to Devstudio</a></div>
                    </div>
                </div>
                <footer>
                    <div className="social-icons">
                            <div><i className="fa fa-facebook"></i></div>
                            <div><i className="fa fa-instagram"></i></div>
                            <div><i className="fa fa-twitter"></i></div>
                            <div><i className="fa fa-linkedin"></i></div>
                            <div><i className="fa fa-vimeo"></i></div>
                    </div>
                    <div className="copyrights">
                        <div className="endDiv">Genesys 2020</div><div className="endDiv">Privacy Statement</div>
                    </div>
                    
                </footer>
            </section>
        </>

    )
}

export default Footer
