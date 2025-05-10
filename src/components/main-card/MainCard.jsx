import "./MainCard.css"
import Star from "../../assets/icon-star.svg"

export default function Card({ isVisible, setVisible, SetValue, Value}) {
    
    const buttons = [1, 2, 3, 4, 5]
    
    return (
        <div className="container" style={{ display: !isVisible ? "flex" : "none" }}>
            <div className="star-container">
                <img src={Star} alt="" />
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="levels">
                {buttons.map((e) => <button key={e} className="level" onClick={() => SetValue(e)} style={{backgroundColor: Value == e ? "#7C8798" : ""} }><span style={{color: Value == e ? "#FFFFFF" : ""}}>{e}</span></button>)}
            </div>
            <button className="submit" onClick={() => setVisible(!isVisible)}>SUBMIT</button>
        </div>
    )
}