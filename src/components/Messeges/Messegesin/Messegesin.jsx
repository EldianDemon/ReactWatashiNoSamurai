import React from "react"
import Messegein from './Messegein/Messegein'
import { addMessegeActionCreator } from "../../../redux/messegesReducer";

const Messegesin = (props) => {

    let MessegesinOut = props.Messegesin.MessegesinData.map(
        (el) => {
            return(
                <Messegein text={el.text} />
            );
        }
        // el => <Messegein text={el.text} />
    );

    let TextValue = React.createRef()

    let AddMessege = () => {
        let text = TextValue.current.value
        props.dispatch(addMessegeActionCreator(text))
    }

    return(
        <ul>
            {MessegesinOut}
            <textarea ref={TextValue}>

            </textarea>
            <button onClick={AddMessege}>

            </button>
        </ul>
    );
}

export default Messegesin;