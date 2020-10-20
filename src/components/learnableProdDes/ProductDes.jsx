import React from 'react'
import SecondaryNav from '../NavBar/SecondaryNav'

function ProductDes() {
    return (
        <>
          <SecondaryNav/>
            <section>
                <div className="section-column-2" style={{justifyItems: 'center'}}>
                    <header>
                        <h1 className="heading font-primary text-primary" style={{fontSize:'96px', maxWidth: '522px', fontWeight: '900' }}>The Learnable Product Designer</h1>
                    </header>
                    <figure className="profile-dev bg-orange">
                
                            <img src="../images/Cutout 1.png" alt="genesys"/>
                        
                    </figure>
                </div>
            </section>
            
            <section>
                <div className="section-column-2" style={{padding: '70px 80px'}}>
                    <article>
                    <p className="p font-primary text-primary" >At Genesys, you'll be exposed to every discipline in our creative process – UX, UI, interaction design, and copywriting. You’ll be part of a dynamic team that's made up of like-minded, talented people. You'll work hard with them to create things that will amaze everyone everywhere.
                    </p><br/><br/>               
                     <p className="p font-primary text-primary">
                        In addition to your team projects, you’ll be lending a hand to the creative team. Participating in brainstorm sessions, building winning pitches, preparing assets, and design scriptures for productions, you'll be in the thick of it all.
                    </p>
                    <p className="p font-primary text-primary">
                    Oh, and you’ll make amazing friends while you're at it!
                    </p>


                    </article>
                </div>
                <div></div>
            </section>
            <section>
                <div className="section-column-2" style={{padding: '70px 80px'}}>
                    <article>
                        <p className="heading font-primary text-orange"style={{fontSize: '60px'}}>“You are someone people can count on. Every day, you come in ready to make great things happen.”</p>
                    </article>
                </div>
                <div></div>
            </section>
            <section>
                <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                    <figure>
                        <img src="../images/Photo (12).jpg" alt="genesys"/>
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

                        <p className="p text-primary font-secondary">Be an actively engaged person. That means you are present, motivated, and social.</p>
                        <br/>
                        <p className="p text-primary font-secondary">
                        Understand how to use the Figma design software
                        </p>
                        <br/>

                        <p className="p text-primary font-secondary">Be able to create initial design layouts with confidence and know-how to effectively communicate concepts to everyone on your team.</p>
                        <br/>
                        <p className="p text-primary font-secondary">Have a basic understanding of design principles and theories
To have creative courage. This is a tough industry, only the brave and sturdy remain.
                        </p>
                        <br/>

                        <p className="p text-primary font-secondary">
                        To us, beauty without substance has no value. At Genesys, design thinking and execution are equally important, so we’re constantly on the lookout for not only the how but also the why.    
                        </p>

                    </article>
                </div>
                    
            </section>
        </>
    )
}

export default ProductDes
