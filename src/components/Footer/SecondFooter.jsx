import React from 'react'

function SecondFooter() {
    return (
        <>
           <section>
                <div className="hero-section" id="sec-footer">
                    <div id="to-top">
                        <img src="../images/skipTop.svg"/>
                    </div>
                    <div className="section-column-4 bg-tertiary" style={{height: '100%', padding: '20px'}} id="sec-footer-main">
                            <div>
                                <h3 className="heading1 text-primary ">Stay up to date on what we are doing and new learning opportunities</h3>
                            </div>
                            <div className="section-flex-space-between">
                                <div><p className="font-secondary">Your Email</p></div>
                                <div> <input type="text" className="subscribe"/></div>
                                <div><p className="font-secondary ">View Privacy Policy</p></div>
                            </div>
                    
                            <div>
                                <a href="" className="btn-link text-primary btn-bordered">Subscribe</a>
                            </div>

                    </div>

            </div>
            </section>  
        </>
    )
}

export default SecondFooter
