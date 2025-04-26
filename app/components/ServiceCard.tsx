import './Services.css'




export default function ServiceCard({number, title1, title2, description}){
    return(
        <div className='serviceCard'>
            <div className='serviceCardNumber'>
                <span className='greyLine'>⎯⎯⎯⎯⎯</span>
                <span className='serviceNumber'>   {number}</span>
            </div>
            <div className='serviceTitle'>
                <h3 className='serviceTitleLine'>{title1}</h3>
                <h3 className='serviceTitleLine'>{title2}</h3>
            </div>
            <div className='serviceDescription'>
                <p className='serviceDescriptionText'>
                {description}
                </p>
            </div>
        </div>
    )
}