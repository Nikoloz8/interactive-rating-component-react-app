import './ThankCard.css'
import Illustration from "../../assets/illustration-thank-you.svg"

export default function ThankCard({isVisible, Value}) {
    return (
        <div className='thankcard-container' style={{display: isVisible ? "flex" : "none"}}>
            <img src={Illustration} alt="" />
            <div className='selected-count'>You selected {Value} out of 5</div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    )
}
