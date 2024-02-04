import React from "react"
import Messegesin from "./Messegesin";
import { addMessegeActionCreator } from "../../../redux/messegesReducer";
import StoreContext from "../../../StoreContext";

const MessegesinContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addMessege = (text) => {
                        let action = addMessegeActionCreator(text)
                        store.dispatch(action)
                    }
                    return <Messegesin MessegesinData={store.getState().messegesPage.Messegesin.MessegesinData} messegesPage={store.getState().messegesPage} addMessege={addMessege} />
                }
            }
        </StoreContext.Consumer>
    );

}

export default MessegesinContainer;