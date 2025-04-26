import "./Introduction.css"
import Nav from "./Nav"
import IntroContent from "./IntroContent"

export default function Introduction(props){
    
    return (
        <div id='intro'>
            <div id="introTopLeftGradient" className='radialGradient'></div>
            <div id="introRightGradient" className='radialGradient'></div>
            <Nav personName={props.personName}/>
            <IntroContent introContent={props.introContent}/>            
        </div>
    )
}