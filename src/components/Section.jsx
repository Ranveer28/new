 import React from 'react'

const Section = ({h3,text,hasBtn="true",btnTxt,imgSrc,imgSize="70%"
,btnBgcolor,btnColor,textColor ,backgroundColor,headingColor,}) => {
  return (
    <section className='section'  style={{

        backgroundColor,
    }}>
        <div>
            
             <h3 
                style={{
                    color:headingColor,
                }}
             >
                {h3}</h3>


            <p 
                 style={{
                    color:textColor,
                }}
            >{text}</p>

            { hasBtn && <button 
                 style={{
                    color:btnColor,
                    backgroundColor:btnBgcolor,
                }} 
            
            >{btnTxt}</button> }
                <div>
                    <img src={imgSrc} alt='imr' style={{
                        width:imgSize,
                    }} />
                </div>
    
        </div>        
        
    </section>
  )
}

export default Section;