import React from "react";
import Messegein from './Messegein/Messegein'

const Messegesin = (props) => {

    let MessegesinOut = props.MessegesinData.map(
        (el) => {
            return(
                <Messegein text={el.text} />
            );
        }
        // el => <Messegein text={el.text} />
    );

    let TextValue = React.createRef()

    let AddMessege = () => {
        let text = TextValue.current.value;
        props.AddMessege(text);
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