import React from "react"
import Messegein from './Messegein/Messegein'

const Messegesin = (props) => {
    debugger
    let MessegesinOut = props.messegesPage.Messegesin.MessegesinData.map(
        (el) => {
            return(
                <Messegein text={el.text} />
            );
        }
    );

    let TextValue = React.createRef()

    let SendMessege = () => {
        debugger
        let text = TextValue.current.value
        props.addMessege(text)
    }

    return(
        <ul>
            {MessegesinOut}
            <textarea ref={TextValue}>

            </textarea>
            <button onClick={SendMessege}>

            </button>
        </ul>
    );
}

export default Messegesin;