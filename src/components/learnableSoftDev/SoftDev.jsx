import React from 'react'
import '../../index.css'

function SoftDev() {
    return (
        <>
            <section>
                <div className="section-column-2" style={{justifyItems: 'center'}}>
                    <header>
                        <h1 className="heading font-primary text-primary" style={{fontSize:'96px', maxWidth: '522px', fontWeight: '900' }}>The Learnable Product Designer</h1>
                    </header>
                    <figure className="profile-dev bg-tertiary">
                
                            <img src="../images/Cutout 1.png" alt="genesys"/>
                        
                    </figure>
                </div>
            </section>
            
            <section>
                <div className="section-column-2" style={{padding: '70px 80px'}}>
                    <article>
                        
                        <p className="p font-primary text-primary" >
                             Creativity means a lot to us. So we look for people who can think both logistically and artistically, and who know that limits are made to be pushed. We value skill and aptitude, but we honor those who care about working with their team to add the Genesys flavour to every project.
                        </p><br/><br/>
                        <p className="p font-primary text-primary">
                            As a developer, being part of the team exposes you to a range of diverse, like-minded talented people who are sure to make the experience fun for you. You’ll get a shot at building amazing things, developing yourself, learning on the job, while exchanging healthy jokes and having random hangouts once in a while.
                        </p>

                    </article>
                </div>
                <div></div>
            </section>
            <section>
                <div className="section-column-2" style={{padding: '70px 80px'}}>
                    <article>
                        <p className="heading font-primary text-tertiary" style={{fontSize: '60px'}}>“You are someone people can count on. Every day, you come in ready to make great things happen.”</p>
                    </article>
                </div>
                <div></div>
            </section>
            <section>
                <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                    <figure>
                        <img src="../images/Photo (5).jpg" alt="genesys"/>
                    </figure>
                   
                </div>

            </section>

            <section>
                <div style={{width:'534px', margin: '40px auto'}}>
                    <header>
                    <h1 className="heading font-primary text-primary">We expect you to…</h1>
                    </header>
                    <article>
                        <p className="p text-primary font-secondary"> Play nice with other people.</p> <br/>

                        <p className="p text-primary font-secondary">Be an actively engaging person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates.</p>
                        <br/>
                        <p className="p text-primary font-secondary">
                        Love to code. You understand the basics of programming and object-oriented design and development.  
                        </p>
                        <br/>

                        <p className="p text-primary font-secondary">Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.</p>
                        <br/>
                        <p className="p text-primary font-secondary">
                            Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to.
                        </p>
                        <br/>

                        <p className="p text-primary font-secondary">
                        Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.    
                        </p>

                    </article>
                </div>
                    
            </section>
        </>
    )
}

export default SoftDev
