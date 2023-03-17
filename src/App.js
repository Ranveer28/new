import "./styles/App.scss"
import './styles/intro.scss'
import './styles/Section.scss'
import './styles/Footer.scss'
import "./styles/mediaQuery.scss"



import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Misc from "./components/Misc.jsx"
import  freshTopicImg from "./assets/academy.png"
import  freshTopic2Img from "./assets/story.png"
import  tedTalkImg from "./assets/in-the-news.gif"
import  franchiseImg from "./assets/franchise.gif"

import  mapImg from "./assets/locations.png"
import  coursesImg from "./assets/image2.png"
import  albumImg from "./assets/mba-cares.gif"
import  baratImg from "./assets/image1.png"
import  chaiwalaImg from "./assets/image3.png"
import Footer from "./components/Footer.jsx"


import data from "./data/data.json"
// $yellow:#fff100;
// $pink:#ed1e79;
// $red:#d20120;
// $white:#fff;
// $brown:#6d3d0f;

const yellow = "#fff100",pink="#ed1e79" ,white="#fff",brown="#6d3d0f"




function App() {


  const {freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    courses,
    map,
    album,
    barat,
    chaiwala
  } =data;

  
  return (
   
      <>
      <IntroVideo />
        {/* FreshTopic */}
        <Section  h3={freshTopic.heading} 
                  text={freshTopic.text} 
                  btnTxt={freshTopic.btn} 
                  imgSrc={freshTopicImg}
                  btnBgcolor={yellow} 
                  btnColor={pink}
                  textColor={yellow}
                  backgroundColor={pink}
                  headingColor={yellow}
        />

            {/* FreshTopic 2 */}
          <Section  h3={freshTopic2.heading} 
                    text={freshTopic2.text} 
                    btnTxt={freshTopic2.btn} 
                    imgSrc={freshTopic2Img}
                    btnBgcolor={yellow} 
                    btnColor={pink}
                    textColor={yellow}
                    backgroundColor={pink}
                    headingColor={yellow}
          />    
                {/* ted Talks  */}
          <Section  h3={tedTalks.heading} 
                    text={tedTalks.text} 
                    btnTxt={tedTalks.btn} 
                    imgSrc={tedTalkImg}
                      
                    backgroundColor={yellow}
                    headingColor={pink}  
                    textColor={pink}
                    btnBgcolor={pink} 
                    btnColor={yellow}
                 
          />    
           {/* Franchise  */}
          <Section  h3={franchise.heading} 
                    text={franchise.text} 
                    btnTxt={franchise.btn} 

                    imgSrc={franchiseImg}
                      
                    backgroundColor={white}
                    headingColor={pink}  
                    textColor={brown}
                    btnBgcolor={brown} 
                    btnColor={yellow}
                 
          />    

           {/* Map  */}
           <Section  h3={map.heading} 
                    text={map.text} 

                    imgSrc={mapImg}
                      
                    backgroundColor={pink}
                    headingColor={yellow}  
                    textColor={yellow}
                    btnBgcolor={brown} 
                    btnColor={yellow}
                    hasBtn={false}
                 
          />    
                  
                      {/* Courses  */}
           <Section  
                    h3={courses.heading} 
                    text={courses.text} 
                    btnTxt={courses.btn}
                    imgSrc={coursesImg}

                        imgSize={"30'%"}
                    backgroundColor={yellow}
                    headingColor={pink}  
                    textColor={pink}
                    btnBgcolor={pink} 
                    btnColor={yellow}
                    // hasBtn={false}
                 
          />    

                    {/* Album  */}
                    <Section  
                    h3={album.heading} 
                    text={album.text} 
                    btnTxt={album.btn}
                    imgSrc={albumImg}

                        // imgSize={"30'%"}
                    backgroundColor={white}
                    headingColor={pink}  
                    textColor={brown}
                    btnBgcolor={brown} 
                    btnColor={yellow}
                    // hasBtn={false}
                 
          />
        
          
                    {/* Album  */}
                    <Section  
                    h3={album.heading} 
                    text={album.text} 
                    btnTxt={album.btn}
                    imgSrc={albumImg}

                        // imgSize={"30'%"}
                    backgroundColor={white}
                    headingColor={pink}  
                    textColor={brown}
                    btnBgcolor={brown} 
                    btnColor={yellow}
                    // hasBtn={false}
                 
          />
        
                
          
                    {/* Barat  */}
                    <Section  
                    h3={barat.heading} 
                    text={barat.text} 
                    btnTxt={barat.btn}
                    imgSrc={baratImg}

                        // imgSize={"30'%"}
                    backgroundColor={pink}
                    headingColor={yellow}  
                    textColor={yellow}
                    btnBgcolor={yellow} 
                    btnColor={pink}
                    // hasBtn={false}
                 
          />

                
                    {/* Chaiwala  */}
                    <Section  
                    h3={chaiwala.heading} 
                    text={chaiwala.text} 
                    btnTxt={chaiwala.btn}
                    imgSrc={chaiwalaImg}

                        // imgSize={"30'%"}
                    backgroundColor={white}
                    headingColor={pink}  
                    textColor={brown}
                    btnBgcolor={brown} 
                    btnColor={yellow}
                    // hasBtn={false}
                 
          />

              <Footer/><br />
              <Misc/> 
      </>       


  );
}

export default App;





