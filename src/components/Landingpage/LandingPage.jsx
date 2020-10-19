import React from 'react'
import '../../index.css'

function LandingPage() {
    return (
        <div>
            <section>
                <div className="section">
                    <h3 className ="heading text-primary primary-font" id="land-header">Genesys provides opportunities for young Nigerian techies
                        and opportunities to grow and innovate.
                    </h3>
                    <div></div>
                    
                </div>
                <div className="section"  id="land-desc">
                    <p className ="p text-primary primary-font">
                        We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.
                    </p> 
                    <div></div>
                </div>
                   
                
            </section>
            <section>
                <div className="hero-section" id="land-hero">
                    <div>
                        <img src="../images/skip.svg"/>
                    </div>
                    <div>
                        <img src="../images/Rectangle 36.jpg"/>
                    </div>

            </div>
            </section>

            {/* Landing page hero for small screen */}
            <section>
                <div id="land-hero-sm">
                    <div className="learnableHero">
                        <div className="tiny-circle bg-tertiary"><i className="fa fa-play text-light"></i></div>
                        <p className="text-light font-primary">#We are Genesys</p>
                    </div>

                </div>
            </section>

            {/* Description small screen */}

            <div className="section"  id="land-desc-sm">
                    <p className ="p text-primary primary-font">
                        We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.
                    </p> 
                    <div></div>
            </div>
            
            <section>
                <div className="section grid-gap-20">
                    <div>
                        <img src="../images/Photo.png"/>
                    </div>
                    <div className="section-flex-space-between" id="learnable-sec">
                        <h3 className="text-primary font-primary heading">Learnable</h3>
                            <p className="p text-primary font-secondary">
                                Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.
                            </p>
                    <div><a href="#" className="btn-link text-tertiary">Learn More</a></div>

                    </div>
                    <div className="section-flex-space-between" id="learnable-sec-sm">
                        <h3 className="text-primary font-primary heading">Learnable</h3>
                            <p className="p text-primary font-secondary">
                                Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.
                            </p>
                    <div><a href="#" className="btn-link text-tertiary">Learn More</a></div>

                    </div>
                </div>
                
                
                
            </section>

            <section>
                <div className="section grid-gap-20">
                    <div id="agora-img-sm">
                        <img src="../images/Photo (1).png"/>
                    </div>
                    <div className="section-column-3" id="agora-sec">
                        <h3 className="text-primary font-primary heading">Agora</h3>
                            <p className="p text-primary font-secondary">We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do.</p>
                        <div> <a href="#" className="btn-link text-tertiary">Learn More</a></div>

                    </div>
    
                    <div id="agora-img">
                        <img src="../images/Photo (1).png"/>
                    </div>
                </div>
                
            </section>
            <section>
                <div className="section grid-gap-20">
                    <div>
                        <img src="../images/Photo (2).png"/>
                    </div>
                    <div className="section-column-3" id="startzone-sec">
                        <h3 className="text-primary font-primary heading">StartZone</h3>
                            <p className="p text-primary">The business environment is harsh for early-stage businesses. We can help you rise above it all.</p>
                        <div> <a href="#" className="btn-link text-tertiary">Here’s How</a></div>

                    </div>
                </div>
                
                
            </section>
            <section>
                <div className="section grid-gap-20">
                    <div id="othings-sm">
                        <h3 className="heading-large">Other things We Do</h3>
                    </div>
                    <div className="section-column-2" id="gen-img-div">
                        <div> 
                            <img src="../images/Rectangle 42.jpg" alt="genesys"/>
                        </div>
                        <div>
                            <a href="#" className="h4"><h4 alt="genesys">Genesys Ignite</h4></a>
                        </div>
                        <div>
                            <img src="../images/Rectangle 38.png" alt="genesys"/>
                        </div>
                        <div id="codeville-sm">
                            <a href="#"  className="h5"><h5>CodeVille</h5> </a> 
                        </div>
                        <div>
                            <img src="../images/Rectangle 38.jpg" alt="genesys"/>
                        </div>
                        <div id="codeville">
                            <a href="#"  className="h5"><h5>CodeVille</h5> </a> 
                        </div>
                        <div>
                            <a href="#" className="h5"><h5>Pink Summer of Code</h5></a>
                        </div>
                    </div>
                    
                    <div id="othings">
                        <h3 className="heading-large">Other things We Do</h3>
                    </div>
                

                </div>
                
            </section>

            {/* Best Team in the World */}
            <section>
            
                <div className="bg-primary section grid-gap-20">
                    <div>
                        <img src="../images/Photo.jpg"/>
                    </div>
                        <div className="section-column-3" id="best-team">
                            <h3 className="text-light heading font-primary">The best team in the world</h3>
                                <p  className="p text-light">We work with the most amazing people our industry has to offer. They are really passionate about making a difference</p>
                            <div> <a href="#" className="btn-link text-tertiary">See team</a></div>
                    </div>
                </div>
                    
                
            </section>
           
            

        </div>

    )
}

export default LandingPage
