import React from 'react'

const AboutUpavan = (props) => {

    return (
        <div style={{margin:'20px'}}>
            <div>
                <h2>Godrej Upavan</h2>
                <h5>At Thane Extension, Mumbai</h5>
                <p>Godrej Upavan Thane Extension a new pre launch by Godrej Properties at the Upper Side of Thane where your senses will experience lifes ultimate high. Upavan By Godrej Thane epitomises the execution of one’s deepest aspiration to finally live life on a luxury standard that complements your style and status.Thane Extension or also many knows as Uper Thane welcomes you to the spaces where you live like you always wanted to. Everything comes in excellent harmony, as this location in Thane where life becomes so much easier. Cherish a little more time with your loved ones in peace, comfort, privacy, and security.</p>
                <button onClick={props.openBrochure}>Download Brochure</button>
            </div>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                <div style={{width:'50%'}}>
                    <img src="/images/highlight.png" alt="img1" />
                </div>
                <div style={{width:'50%', marginTop:'5%'}}>
                    <img src="/images/highlight1.png" alt="img2" />
                </div>
            </div>
            <div style={{marginTop:'10px'}}>
                <div>
                    <h2>About Godrej Properties</h2>
                    <p>Godrej Properties brings the Godrej Group philosophy of innovation and excellence to the real estate industry. The company is currently developing landmark projects in 12 cities across India. Established in 1990, Godrej Properties Limited is the first real estate company to have ISO certification. With projects that span across the country, the company upcoming development covers over 8 million square meters</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUpavan;