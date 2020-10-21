import React from 'react'
import SecondaryNav from '../NavBar/SecondaryNav'
import '../../index.css'



function Learnable() {
    return (
        <>
          <SecondaryNav/>
            <section>
                <div id="home-header" className="bg-warn section-column-2">
                    <div>
                        <h4 className="heading1 text-primary font-primary">Coming soon: Learnable ‘20</h4>
                        <p className="text-primary font-secondary">We've started taking in applications for the next batch of learnable interns. Applications are on till the 21st of Febuary</p>
                    </div>
                    <div>
                        <p className="text-primary font-secondary">Click link to download...</p>
                        <h4 className="heading1 text-primary font-primary" style={{textDecoration:'underline'}}>Learnable ‘20 Brochure</h4>
                    </div>
                </div>
            </section>
            <section id="home-header-section">
                <div className="section">
                    <h3 className ="heading text-primary primary-font" id="home-main-heading">Everything is Learnable
                    </h3> 
                    <div className="empty-div"></div>
                    
                </div>
                <div className="section-column-4" id="home-description">
                    <p id="home-desc-p" className ="p text-primary primary-font">
                             Learnable is the perfect product development internship program brought to you by Genesys.
                    </p> 
                    <div className=""></div>
                    <div id="home-disc">
                        <div className="circle bg-tertiary">
                            <div>
                                <h4 className="heading2 text-primary" style={{textDecoration:'underline'}}>Development <i className="fa fa-angle-right"></i></h4>
                            <p className="text-primary">What to expect</p>
                            </div>
                               
                            </div>
                            <div className="circle bg-primary">
                                <div>
                                    <h4 className="heading2 text-light" style= {{textDecoration:'underline'}}>Product Design <i className="fa fa-angle-right"></i></h4>
                                    <p className="text-light">What to expect</p>
                                </div>
                              
                            </div>
                        
                        </div>
                        
                </div>                   
                
            </section>
            <section id="hero-sec">
                <div className="hero-section" id="home-hero-sec">
                    <div id="hero-down-icon">
                        <img src="../images/skip.svg"/>
                    </div>
                <div className="learnableHero">
                    <div className="tiny-circle bg-tertiary"><i className="fa fa-play text-light"></i></div>
                    <p classNam="text-light font-primary">Discover the Learnable Experience</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="section-col-4" id="home-num-sec">
                    <div id="home-num-div">
                        <h1 className="heading text-tertiary font-primary" style={{fontSize: '40px', fontWeight: '900'}}>305</h1>
                        <p className="font-secondary p text-primary">
                            Young Software Developers Trained</p>
                            
                    </div>
                    <div>
                        <h1 className="heading text-tertiary font-primary" style={{fontSize: '40px', fontWeight: '900'}}>2100</h1>
                        <p className="font-secondary p text-primary">Tech Enthusiasts</p>
                    </div>
                    <div className="home-num-div">
                        <h1 className="heading text-tertiary font-primary" style={{fontSize: '40px', fontWeight: '900'}}>8</h1>
                        <p className="font-secondary p text-primary">StartUps Incubated</p>
                    </div>
                    <div className="home-num-div">
                        <h1 className="heading text-tertiary font-primary" style={{fontSize: '40px', fontWeight: '900'}}>250</h1>
                        <p className="font-secondary p text-primary">Small Businesses supported</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="section grid-gap-20">
                  <div id="home-profile-sm">
                        <div className="profile bg-tertiary">
                            <img src="../images/Cutout 1.png"/>
                        </div>
                        
                    </div>
                    <div className="section-flex-space-between">
                            <h3 className="text-primary font-primary heading">We Make People Great</h3>
                                <p className="text-primary p">As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry.</p> <p className="text-primary p">We primarily educate and groom software developers and designers, preparing them for the industry. </p>

                            

                    </div>
                    <div id="home-profile">
                        <div className="profile bg-tertiary">
                            <img src="../images/Cutout 1.png"/>
                        </div>
                        
                    </div>
                   
                </div>
                
                
            </section>
            <section>

                {/* Unusual Learning Experience */}
                <div className="section grid-gap-50" id="home-learn-exp">
                    
                    <div>
                        <img src="../images/Photo (8).jpg"/>
                    </div>
                    <div className="section-flex-space-between">
                        <h3 className="text-primary font-primary heading" >An Unusual Learning Experience</h3>
                            <p className="text-primary p">At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.
                            </p>

                            <p className="text-primary p">Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn.</p>                   

                    </div>
                </div>
                
                
            </section>
           
            <section>

                {/* card grid section 1 */}
                <div className="section grid-gap-50" id="home-learn-to">
                    <div className="section-flex-space-between">
                    <p className="font-secondary btn-link text-primary" style={{textTransform: 'uppercase'}}>For  Developers</p>
                        <h3 className="text-primary font-primary heading">Learn to Build Software the Right Way</h3>
                        <p className="text-primary p">We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way
                          </p>

                            <p className="text-primary p">We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive.</p>

                        <div> <a href="#" className="btn-link text-tertiary">Here’s How</a></div>

                    </div>
                    <div className="text-grid">
                        <div className="text-grid-card bg-primary">
                            <h1 className="heading text-light font-primary">Program with JavaScript</h1>
                        </div>
                        <div className="text-grid-card bg-tertiary">
                            <h1 className="heading text-light font-primary">Version Control with Git</h1>
                        </div>
                        <div className="text-grid-card bg-warn">
                            <h1 className="heading text-primary font-primary">Web Development with React</h1>
                        </div>
                        <div className="text-grid-card bg-brown">
                            <h1 className="heading text-light font-primary">Building APIs with NodeJS</h1>
                        </div>
                        <div className="text-grid-card bg-secondary">
                            <h1 className="heading text-light font-primary">Managing Data with MongoDB</h1>
                        </div>
                        <div className="text-grid-card bg-orange" >
                            <h1 className="heading text-light font-primary">Deploying with Heroku</h1>
                        </div>
                </div>
                    
                </div>
                
                
                
            </section>
            <section className="bg-default">

    {/* Card grid section two */}
    <div className="section grid-gap-50">
        <div className="text-grid" id="text-grid-md">
                <div className="text-grid-card bg-primary">
                    <h1 className="heading text-light font-primary">Design User Interfaces</h1>
                </div>
                <div className="text-grid-card bg-orange">
                    <h1 className="heading text-light font-primary">Craft User Experiences</h1>
                </div>
                <div className="text-grid-card bg-warn">
                    <h1 className="heading text-primary font-primary">Apply Design Thinking</h1>
                </div>
                <div className="text-grid-card bg-tertiary">
                    <h1 className="heading text-light font-primary">Build Information Architecture</h1>
                </div>
                <div className="text-grid-card bg-secondary">
                    <h1 className="heading text-light font-primary">Copy write for Projects</h1>
                </div>
                <div className="text-grid-card bg-orange" >
                    <h1 className="heading text-light font-primary">Brand Products</h1>
                </div>
        </div>
        <div className="section-flex-space-between" id="for-des-sm">
        <p className="font-secondary btn-link text-primary" style={{textTransform: 'uppercase'}}>For Designers</p>
            <h3 className="text-primary font-primary heading" style={{width:'550px'}}>Design Different</h3>
                <p className="text-primary p" id="p-sm">We love to make things work perfectly. That’s why our design learning path exposes you to the science of user-oriented design.
                </p>

                <p className="text-primary p">Design is at the heart of everything we do at Genesys. Right from the start of the program, you’ll get your hands dirty as you get practically involved in the world’s most modern design concepts. At Genesys, we’re building designers who put the users first.</p>

            <div> <a href="#" id="link" className="btn-link text-tertiary">Here’s How</a></div>

        </div>
         <div className="text-grid" id="text-grid-sm">
                <div className="text-grid-card bg-primary">
                <h1 className="heading text-light font-primary">Design User Interfaces</h1>
                </div>
                <div className="text-grid-card bg-orange">
                    <h1 className="heading text-light font-primary">Craft User Experiences</h1>
                </div>
                <div className="text-grid-card bg-warn">
                    <h1 className="heading text-primary font-primary">Apply Design Thinking</h1>
                </div>
                <div className="text-grid-card bg-tertiary">
                    <h1 className="heading text-light font-primary">Build Information Architecture</h1>
                </div>
                <div className="text-grid-card bg-secondary">
                    <h1 className="heading text-light font-primary">Copy write for Projects</h1>
                </div>
                <div className="text-grid-card bg-orange" >
                    <h1 className="heading text-light font-primary">Brand Products</h1>
                </div>
        </div>
        
        
    </div>



</section>

<section>

                {/* experinecing Section errors */}
                <div className="section grid-gap-50" id="eligibility">
                              
                    <div className="section-flex-space-between">
                        <h3 className="text-primary font-primary heading" style={{width:'550px'}}>Who is Eligible?</h3>
                            <p className="text-primary p">To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.
 
                            </p>

                            <p className="text-primary p">
                                To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency.</p>
    

                    </div>
                    <div>
                        <img src="../images/Photo (9).jpg"/>
                    </div>
                </div>
                
                
            </section>
            <section className="bg-orange">

                {/* experinecing Section errors */}
                <div className="section grid-gap-50" id="home-our-culture">
                    <div>
                        <img src="../images/Photo (10).jpg"/>
                    </div>
                    <div className="section-flex-space-between">
                        <h3 className="text-light font-primary heading" style={{width:'550px'}}>Our Culture</h3>
                            <p className="text-light p">Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust in the power of collaboration.
 
                            </p>
                    </div>
                   
                </div>
                
                
            </section>
            <section className="bg-light">

                {/* experinecing Section errors */}
                <div className="section grid-gap-50" id="fun-learn">
                    
                    <div className="section-flex-space-between">
                        <h3 className="text-primary font-primary heading" style={{width:'550px'}}>Learning can be fun…</h3>
                            <p className="text-primary p">We believe learning should be a fun experience. For this reason, we don’t do all the learning in the classroom.
                            </p>
                            <p className="text-primary p">

                                    The Learnable experience can not be complete without the bag of fun times which you’ll have. To us, every task is an opportunity to have some fun. But we do well to throw in a good number of activities to add to this. You will find yourself partaking in a lot of healthy activities such as cooking, sports, music, hangouts, and even random dates.

                            </p>
                            <p className="text-light p">Trust us when we say we know how to have fun.</p> 
                    </div>
                    <div className="image-grid">
                        <div><img src="../images/Rectangle 17 (1).jpg"/></div>
                        <div><img src="../images/Rectangle 18.jpg"/></div>
                        <div><img src="../images/Rectangle 19.jpg"/></div>
                        <div><img src="../images/Rectangle 20.jpg"/></div>
                        <div><img src="../images/Rectangle 21.jpg"/></div>
                        <div><img src="../images/Rectangle 22.jpg"/></div>
                        <div><img src="../images/Rectangle 23.jpg"/></div>
                        <div><img src="../images/Rectangle 24.jpg"/></div>
                        <div><img src="../images/Rectangle 25.jpg"/></div>
                        <div><img src="../images/Rectangle 26.jpg"/></div>
                        <div><img src="../images/Rectangle 27.jpg"/></div>
                        <div><img src="../images/Rectangle 28.jpg"/></div>
                        <div><img src="../images/Rectangle 29.jpg"/></div>
                        <div><img src="../images/Rectangle 30.jpg"/></div>
                        <div><img src="../images/Rectangle 31.jpg"/></div>
                        <div><img src="../images/Rectangle 32.jpg"/></div>
                        
                        
                    </div>
                    </div>
                </section>
                   
            <section className="bg-default">

                {/* Experts and Team Section*/}
                <div className="section grid-gap-50">
                    <div className="image-grid-3">
                        <div>
                            <figure><img src="../images/experts (1).jpg"/></figure>
                            <h4 className="text-primary">Nnamdi</h4>
                            <figcaption className="text-primary font-secondary">Managing Director</figcaption>
                            
                        </div>
                        <div>
                            <figure><img src="../images/experts (2).jpg"/></figure>
                            <h4 className="text-primary">Ositadimma</h4>
                            <figcaption className="text-primary font-secondary">Learnable Cordinator</figcaption>
                            
                        </div>
                        <div>
                            <figure><img src="../images/experts (3).jpg"/></figure>
                            <h4 className="text-primary">Idowu</h4>
                            <figcaption className="text-primary font-secondary">Scrum Professional</figcaption>
                            
                        </div>
                        <div>
                            <figure><img src="../images/experts (4).jpg"/></figure>
                            <h4 className="text-primary">Ezra</h4>
                            <figcaption className="text-primary font-secondary">Ass learnable cordinator</figcaption>
                            
                        </div>
                        <div>
                            <figure><img src="../images/experts (5).jpg"/></figure>
                            <h4 className="text-primary">David</h4>
                            <figcaption className="text-primary font-secondary">Design Lead</figcaption>
                            
                        </div>
                        <div>
                            <figure><img src="../images/experts (6).jpg"/></figure>
                            <h4 className="text-primary">Emmanuel</h4>
                            <figcaption className="text-primary font-secondary"> Software Lead</figcaption>
                            
                        </div>
                    </div>
                        
                    
                    <div className="section-flex-space-between"  id="expert-sec">
                        <h3 className="text-primary font-primary heading" style={{width:'550px', fontSize: '60px'}}>Learn from the Experts</h3>
                            <p className="text-primary p">As a learnable intern, you will be learning from the best software developers and product designers our industry has to offer. You will spend the first 3 months in the classroom with industry experts who have a wealth of experience from developing amazing products for various customers in our industry.
                            </p>
                            
                    </div>
                    
                   
                </div>
                
                
            </section>
            <section className="bg-light">

                {/* experinecing Section errors */}
                <div className="section grid-gap-50" id="class-learn">
                    
                    <div className="section-flex-space-between">
                        <h3 className="text-primary font-primary heading" style={{width:'550px'}}>Learning doesn’t always have to be in the classroom</h3>
                            <p className="text-primary p">

                                    We have designed other learning activities that aren’t classroom-based. You will learn how to be a better person, how to have good conversations, how to work better with people and most importantly, how to lead other people. Hey! We’ll even teach you how to run a business during the Learnable Business Sessions.

                            </p>
                           
                    </div>
                    <div className="image-grid">
                        <div><img src="../images/Rectangle 17 (1).jpg"/></div>
                        <div><img src="../images/Rectangle 18.jpg"/></div>
                        <div><img src="../images/Rectangle 19.jpg"/></div>
                        <div><img src="../images/Rectangle 20.jpg"/></div>
                        <div><img src="../images/Rectangle 21.jpg"/></div>
                        <div><img src="../images/Rectangle 22.jpg"/></div>
                        <div><img src="../images/Rectangle 23.jpg"/></div>
                        <div><img src="../images/Rectangle 24.jpg"/></div>
                        <div><img src="../images/Rectangle 25.jpg"/></div>
                        <div><img src="../images/Rectangle 26.jpg"/></div>
                        <div><img src="../images/Rectangle 27.jpg"/></div>
                        <div><img src="../images/Rectangle 28.jpg"/></div>
                        <div><img src="../images/Rectangle 29.jpg"/></div>
                        <div><img src="../images/Rectangle 30.jpg"/></div>
                        <div><img src="../images/Rectangle 31.jpg"/></div>
                        <div><img src="../images/Rectangle 32.jpg"/></div>
                        
                        
                    </div>
                    </div>
                </section>
                <section className="bg-primary">

                {/* Apply Your Knowledge*/}
                <div className="section grid-gap-50" id="apply">
                    <div>
                        <img src="../images/Photo (8).jpg"/>
                    </div>
                    <div className="section-flex-space-between">
                        <h3 className="text-light font-primary heading" style={{width:'550px'}}>Apply Your Knowledge</h3>
                            <p className="text-light p">Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.
 
                            </p>
                            <div style={{marginTop: '30px'}}><a href="#" className="btn-link text-tertiary font-secondary">Get Started</a></div>
                    </div>
                   
                </div>
                
                
            </section>

            <section>

                {/* FAQ section */}
                <div>
                    <h1 className="heading font-primary text-primary" style={{fontSize: '60px', padding: '60px'}}>FAQ</h1>
                </div>
                <div className="faq">
                    

                
                
                <ul>
                    <li><p><a href="" className="font-primary text-primary heading3" style={{fontWeight: '900'}}>How many people can attend a course? </a></p><p><i className="fa fa-angle-down"></i></p></li>
                    <li><p><a href="" className="font-primary text-primary heading3" style={{fontWeight: '900'}}>What’s the learning experience like? </a></p><p><i className="fa fa-angle-down"></i></p></li>
                    <li><p><a href="" className="font-primary text-primary heading3" style={{fontWeight: '900'}}>Who are the coaches?</a></p><p><i className="fa fa-angle-down"></i></p></li>
                    <li><p><a href="" className="font-primary text-primary heading3" style={{fontWeight: '900'}}>How far in advance should we book? </a></p><p><i className="fa fa-angle-down"></i></p></li>
                    <li><p><a href="" className="font-primary text-primary heading3" style={{fontWeight: '900'}}>Can you customize your courses?</a></p><p><i className="fa fa-angle-down"></i></p></li>
                    
                </ul>
                </div>
                

            </section>

            {/* Journal Section */}
            {/* <section>
                <div>
                
                    <h1 className="text-primary font-primary heading">Journal</h1>
                
                    <div><a href="" className="btn-link text-tertiary">View All</a></div>
                        
                    <div className="section-col-4">
                        <div className="section-flex-space-between" style={{height: '200px'}}>
                                    <figure>
                                        <img src="../images/image 23.jpg"/>
                                    </figure>
                            
                                <div>
                                    <a href="" className="btn-link">Inspiration</a>
                                </div>
                                <div>
                                    <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                <div>
                                    <small>David Mong, Apr 9, 2020</small>
                                </div>
                            </div>
                        <div className="section-flex-space-between">
                                    <figure>
                                        <img src="../images/image 24.jpg"/>
                                    </figure>
                            
                                <div>
                                    <a href="" className="btn-link">Inspiration</a>
                                </div>
                                <div>
                                    <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                <div>
                                    <small>David Mong, Apr 9, 2020</small>
                                </div>
                            </div>
                        <div className="section-flex-space-between">
                                    <figure>
                                        <img src="../images/image 25.jpg"/>
                                    </figure>
                            
                                <div>
                                    <a href="" className="btn-link">Inspiration</a>
                                </div>
                                <div>
                                    <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                <div>
                                    <small>David Mong, Apr 9, 2020</small>
                                </div>
                            </div>
                        <div className="section-flex-space-between">
                                    <figure>
                                        <img src="../images/image 26.jpg"/>
                                    </figure>
                            
                                <div>
                                    <a href="" className="btn-link">Inspiration</a>
                                </div>
                                <div>
                                    <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                <div>
                                    <small>David Mong, Apr 9, 2020</small>
                                </div>
                            </div>
                    
                            
                </div>                            
                </div>
            </section> */}


<section className="bg-default">
                <div style={{padding: '93px 50px'}}>
                
                    <header>
                        <h1 className="text-primary font-primary heading">Journal</h1>
                    </header>
                
                    <div style={{marginBottom: '50px'}}><a href="" className="btn-link text-tertiary">View All</a></div>
                        
                    <div className="section-col-4 grid-gap-20" style={{justifyItems: 'start'}} id="journal-md">
                        
                                    <figure>
                                        <img src="../images/image 23.jpg"/>
                                    </figure>
                                    <figure>
                                        <img src="../images/image 24.jpg"/>
                                    </figure>
                                    <figure>
                                        <img src="../images/image 25.jpg"/>
                                    </figure>
                                    <figure>
                                        <img src="../images/image 26.jpg"/>
                                    </figure>
                            
                                <div>
                                    <a href="" className="btn-link text-tertiary">Inspiration</a>
                                </div>
                                <div>
                                    <a href="" className="btn-link text-tertiary">Inspiration</a>
                                </div>
                                <div>
                                    <a href="" className="btn-link text-tertiary">Inspiration</a>
                                </div>
                                <div>
                                    <a href="" className="btn-link text-tertiary">Inspiration</a>
                                </div>
                                <div>
                                    <h4 className="heading text-primary font-primary">Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                <div>
                                    <h4 className="heading text-primary font-primary">Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                <div>
                                    <h4 className="heading text-primary font-primary">Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                <div>
                                    <h4 className="heading text-primary font-primary">Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                <div>
                                    <small className="font-secondary">David Mong, Apr 9, 2020</small>
                                </div>
                                <div>
                                    <small className="font-secondary">David Mong, Apr 9, 2020</small>
                                </div>
                                <div>
                                    <small className="font-secondary">David Mong, Apr 9, 2020</small>
                                </div>
                                <div>
                                    <small className="font-secondary">Theresa Brazen, Apr 9, 2020</small>
                                </div>
                            </div>
                    
                  {/*JOURNAL - SM */}
                                 <div className="section-col-4 grid-gap-20" style={{justifyItems: 'start'}} id="journal-sm">
                        
                                    <figure>
                                        <img src="../images/image 23.jpg"/>
                                    </figure>
                                    <div>
                                    <a href="" className="btn-link text-tertiary">Inspiration</a>
                                </div>
                                <div>
                                    <h4 className="heading text-primary font-primary">Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                {/* Scond section*/}
                                    <figure>
                                        <img src="../images/image 24.jpg"/>
                                    </figure>
                                    <div>
                                    <a href="" className="btn-link text-tertiary">Inspiration</a>

                                </div>
                                <div>
                                    <h4 className="heading text-primary font-primary">Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                <div>
                                    <small className="font-secondary">David Mong, Apr 9, 2020</small>
                                </div>
                                   {/*Third section*/}
                                    <figure>
                                        <img src="../images/image 25.jpg"/>
                                    </figure>
                                    <div>
                                    <a href="" className="btn-link text-tertiary">Inspiration</a>
                                </div>
                                  <div>
                                    <h4 className="heading text-primary font-primary">Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                <div>
                                    <small className="font-secondary">David Mong, Apr 9, 2020</small>
                                </div>
                                  {/* forth section*/}
                                    <figure>
                                        <img src="../images/image 26.jpg"/>
                                    </figure>
                                                       
                                                           
                                <div>
                                    <a href="" className="btn-link text-tertiary">Inspiration</a>
                                </div>
                                
                              
                                
                                <div>
                                    <h4 className="heading text-primary font-primary">Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                                </div>
                                
                                
                                
                                <div>
                                    <small className="font-secondary">Theresa Brazen, Apr 9, 2020</small>
                                </div>
                            </div>
                       
                            
                               
                                
                                
                            </div>
                       
                                    
                            
                                
    
                            
              
            </section>
            <section>
                <div id="brand">
                    <div><h1>Mentioned in</h1></div>
                    <div><img src="../images/brands (1).png"/></div>
                    <div><img src="../images/brands (2).png"/></div>
                    <div><img src="../images/brands (3).png"/></div>
                    <div><img src="../images/brands (4).png"/></div>
                    <div><img src="../images/brands (5).png"/></div>
                </div>
                
                
                
            </section>


            
        </>
    )
}

export default Learnable;
