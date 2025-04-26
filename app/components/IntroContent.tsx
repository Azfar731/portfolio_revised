import './IntroContent.css'
import WhatsAppButton from "/src/common/WhatsAppButton"

export default function IntroContent(props){
    const introContent = props.introContent

    

    return(
        <div id="intro-Content">
            <h2 className="smallText">{introContent.jobTitle}</h2>
            <h1>{introContent.sellingPoint}</h1>
            <p>{introContent.missionStatement}</p>
            <WhatsAppButton />
            
        </div>
    )
}