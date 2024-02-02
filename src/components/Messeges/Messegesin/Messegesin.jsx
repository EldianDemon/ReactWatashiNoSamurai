import React from "react"
import Messegein from './Messegein/Messegein'
import StoreContext from "../../../StoreContext";

const Messegesin = () => {

    <StoreContext.Consumer>
        {
            (store) => {

                let MessegesinOut = store.getState().messegesPage.Messegesin.MessegesinData.map(
                    (el) => {
                        return (
                            <Messegein text={el.text} />
                        );
                    }
                );
            
                let TextValue = React.createRef()
            
                let SendMessege = () => {
            
                    let text = TextValue.current.value
                    store.addMessege(text)
                }

                return (
                    <ul>
                        {MessegesinOut}
                        <textarea ref={TextValue}>

                        </textarea>
                        <button onClick={SendMessege}>

                        </button>
                    </ul>
                );
            }
        }
    </StoreContext.Consumer>
}

export default Messegesin;