import React from 'react'
import '../index.css'


const tagline ={
    fontFamily: 'var(--primary-font)',
    fontWeight: '900',
    fontSize: '40px',
    lineHeight: '110.19%',
    textTransform: 'capitalize',
    color: 'var(--primary-color)',
    width: '654px',
    height: '157px',
    display: 'flex',
    alignItems: 'center',

}

const container={
    width: '100%',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    alignItems: 'center',
    position: 'relative',
    marginTop: '20px',
    padding: '5px 50px'
}
const tagDesc = {
    fontFamily: 'var(--primary-font)',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '26px',
    letterSpacing: '0.15000000596046448px',
    textAlign: 'left',
    height: '74px',
    width: '467px',
}

const skipIcon={
    height: '41.69537353515625px',
    width: '22px',
    marginLeft: '61px',
    marginTop: '758.5625px',
    position: 'absolute',
    marginLeft: '4.24%',
    marginRight: '94.24%',
    marginTop: '12.9%',
    marginBottom: '86.39'

}
const imageHero = {

}
const landingHero = {
    // position: 'absolute',
    width: '1290px',
    height: '460px',
    marginLeft: '150px',
    marginTop: '50px',
}

const learnable = {
    height: '780px',
    width: '100%',
    marginLeft: '0px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    position: 'relative',
    padding: '70px',
    justifyItems: 'center',
    alignItems: 'center',
    gridGap: '20px'

}
const secImageHero ={
    // position: 'absolute',
    width: '640px',
    height: '580px',

}

const heading3 = {
    fontFamily: 'var(--primary-font)',
    fontSize: '40px',
    fontWeight: '900',
    lineHeight: '44px',
    letterSpacing: '0em',
    textAlign: 'left',
    height: '44px',
    width: '550px',

}

const learnableContent ={
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    justifyItems: 'start',
    alignItems: 'center',
    gridGap: '40px'
}

const contDesc={
    fontFamily: 'var(--secondary-font)',
    fontSize: '15px',
    fontWeight: '400',
    lineWeight: '24px',
    letterSpacing: '0.25px',
    textAlign: 'left',
    }
const btnLink = {
 
    fontFamily: 'var(--secondary-font)',
    fontSize: '15px',
    fontWeight: '600',
    lineHeight: '17px',
    letterSpacing: '1.25px',
    textAlign: 'left',
    color: 'var(--tertiary-color)',
    textTransform: 'uppercase'

}
const imgGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    justifyItems: 'start',
    gridGap: '20px'
}

const bestTeam = {
    width: '1440px',
    height: '780px',
    marginLeft: '0px',
    backgroundColor: 'var(--primary-color)'


}


function LandingPage() {
    return (
        <div>
            <div style={container}>    
                <p style={tagline} className="tagline">Genesys provides opportunities for young Nigerian techies 
                    and opportunities to grow and innovate.</p>
                <p style={tagDesc}>
                    We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.
                </p>
            </div>

            <div className="imageHero" style={imageHero}>
                    <div className="skip" style={skipIcon}>
                        <img src="../images/skip.svg"/>
                    </div>
                    <div className="landingHero" style={landingHero}>
                        <img src="../images/Rectangle 36.jpg"/>
                   </div>

            </div>
            <section style={learnable} className="">
                <div>
                    <img src="../images/photo.png" style={secImageHero}/>
                </div>
                <div style={learnableContent}>
                    <h3 style={heading3} className="text-primary">Learnable</h3>
                        <p style={contDesc} className="text-primary">Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.</p>
                    <div> <a href="#" style={btnLink}>Learn More</a></div>

                </div>
                
            </section>

            <section style={learnable}>
                
                <div style={learnableContent}>
                    <h3 style={heading3} className="text-primary">Agora</h3>
                        <p style={contDesc} className="text-primary">We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do.</p>
                    <div> <a href="#" style={btnLink}>Learn More</a></div>

                </div>
                <div>
                    <img src="../images/Photo (1).png" style={secImageHero}/>
                </div>
            </section>
            <section style={learnable}>
                <div>
                    <img src="../images/Photo (2).png" style={secImageHero}/>
                </div>
                <div style={learnableContent}>
                    <h3 style={heading3} className="text-primary">StartZone</h3>
                        <p style={contDesc} className="text-primary">The business environment is harsh for early-stage businesses. We can help you rise above it all.</p>
                    <div> <a href="#" style={btnLink}>Here’s How</a></div>

                </div>
                
            </section>
            <section style={learnable}>
                <div style={imgGrid}>
                    <div> 
                        <img src="../images/Rectangle 42.jpg" alt="genesys"/>
                    </div>
                    <div>
                        <a href="#" className="h4"><h4 alt="genesys">Genesys Ignite</h4></a>
                    </div>
                    <div>
                        <img src="../images/Rectangle 38.png" alt="genesys"/>
                    </div>
                    <div>
                        <img src="../images/Rectangle 38.jpg" alt="genesys"/>
                    </div>
                    <div>
                        <a href="#"  className="h5"><h5>CodeVille</h5> </a> 
                    </div>
                    <div>
                        <a href="#" className="h5"><h5>Pink Summer of Code</h5></a>
                    </div>

                </div>
                <div style={learnableContent}>
                    <h3 className="heading-large">Other things We Do</h3>
                </div>
                
            </section>
            <section style={learnable} className="bg-primary">
            
                
                    <div>
                        <img src="../images/Photo.jpg" style={secImageHero}/>
                    </div>
                    <div style={learnableContent}>
                        <h3 style={heading3} className="text-light">The best team in the world</h3>
                            <p style={contDesc} className="text-light">We work with the most amazing people our industry has to offer. They are really passionate about making a difference</p>
                        <div> <a href="#" style={btnLink}>See team</a></div>
                    </div>
                
            </section>

        </div>

    )
}

export default LandingPage
