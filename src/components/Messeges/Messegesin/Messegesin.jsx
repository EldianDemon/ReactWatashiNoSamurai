import React from "react";
import Messegein from './Messegein/Messegein'

const Messegesin = (props) => {

    let MessegesinOut = props.MessegesinData.map(
        el => <Messegein text={el.text} />
    );

    let NewMessege = React.createRef();

    let AddMessege = () => {
        let text = NewMessege.current.value;
        alert(text);
    };

    return(
        <ul>
            {MessegesinOut}
            <textarea ref={NewMessege}>

            </textarea>
            <button onClick={AddMessege}>

            </button>
        </ul>
    );
}

export default Messegesin;