import "./ScrollingText.css"
import { useEffect } from "react"


export default function ScrollingText(props){

    useEffect(()=>{
        let component = document.querySelector('.scrollingText');
        if(component){
            const elem = component.cloneNode(true)
            document.querySelector(".scrollingTextContainer").append(elem)  
        }
    },[]) 


    return(
        <div  className='scrollingTextContainer'>
            <div  className='scrollingText'>{props.text}</div>
    </div>

    )

}