import { useState, useEffect } from 'react'
import Introduction from "../components/Introduction"
import Header from '../layout/Header'
import AboutMe from '~/components/AboutMe'
import RecentWork from '../components/RecentWork'
import Services from '../components/Services'
import SocialLinks from '../components/SocialLinks'
import { personCollection } from '../firebase' 
import ScrollingText from '../components/ScrollingText'
import Footer from '../layout/Footer'
import Technologies from '../components/Technologies'
import LoadingScreen from '../components/LoadingScreen'



function App() {
  const [currentSection,setCurrentSection] = useState("")
  const [personData, setPersonData] = useState({})
  const[hasDataLoaded, setHasDataLoaded] = useState(false)

  const handleSectionChange = (id)=>{
    if(id !== currentSection){
      setCurrentSection(id)
    }
  }

  


  useEffect(()=>{
    const unsubscribe = onSnapshot(personCollection, (snapshot) =>{
      const docArray = snapshot.docs
      const snapshotData = docArray[0].data() //we only have one element
      setPersonData(snapshotData)
      setHasDataLoaded(() =>{
        console.log("data loaded")
        return true
      })
    } )

    return unsubscribe;
  }, [])

  
  return (
  <>
  { !hasDataLoaded?  
    <LoadingScreen /> :(
    
    <div className='appPage'>
      <div className='scrollablePart'>    
        <Introduction personName={personData.name} introContent={personData.introContent}/>
        <div id="infoSection">
          <Header currentSection={currentSection}/>
          <Technologies />
          <AboutMe  
          aboutMeList = {personData.aboutMeList}
          unsetCurrentSection={()=>(handleSectionChange("")) } 
          setCurrentSection={()=>(handleSectionChange("AboutMe"))} />
          
          <RecentWork 
          projects={personData.projects}
          unsetCurrentSection={()=>(handleSectionChange("")) }
          setCurrentSection={()=>(handleSectionChange("Work"))}
          />
          <Services 
          unsetCurrentSection={()=>(handleSectionChange("")) }
          setCurrentSection={()=>(handleSectionChange("Services"))}          
          />
          <ScrollingText text={" - Let's Connect"}/>
        </div>
      </div>
      {/*Transparents div id is used to scroll to fixed section,
      as fixed section is not a part of the scrollabel div*/}
      <div id="Profiles" className='transparentDiv'
       onMouseEnter={() => handleSectionChange("Profiles")} onMouseLeave={() => handleSectionChange("")}
      > 
        <div className="fixedPart">
          <SocialLinks />
          <Footer personName={personData.name} />
        </div> 
      </div>
    </div>
    
    )
    
  }    
  </>  
  )

}

export default App
