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
    marginLeft: '130px',
    top: '270px',
    display: 'flex',
    alignItems: 'center'
}
const tagDesc = {
    //styleName: Subtitle 1;
fontFamily: 'var(--primary-font)',
fontSize: '16px',
fontStyle: 'normal',
fontWeight: '400',
lineHeight: '26px',
letterSpacing: '0.15000000596046448px',
textAlign: 'left',
height: '74px',
width: '467px',
marginLeft: '130px',
marginTop: '20px',
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
    position: 'absolute',
    width: '1290px',
    height: '460px',
    marginLeft: '150px',
    marginTop: '50px',
}

const learnable = {
    height: '780px',
    width: '1440px',
    marginLeft: '0px',
    borderRadius: '0px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    position: 'relative'


}
const secImageHero ={
    position: 'absolute',
    width: '640px',
    height: '580px',
}
function LandingPage() {
    return (
        <div>
            <p style={tagline} className="tagline">Genesys provides opportunities for young Nigerian techies 
            and opportunities to grow and innovate.</p>
            <p style={tagDesc}>
                We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.
            </p>
            <div className="imageHero" style={imageHero}>
                <div className="skip" style={skipIcon}>
                    <img src="../images/skip.svg"/>
                </div>
                <div className="landingHero" style={landingHero}>
                    <img src="../images/Rectangle 36.jpg"/>
                </div>
            </div>
            <section style={learnable}>
                <div>
                    <img src="../images/photo.png" style={secImageHero}/>
                </div>
                <div>
                    learnable
                </div>
            </section>
        </div>

    )
}

export default LandingPage
