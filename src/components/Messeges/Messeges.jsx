import React from "react";
import Messege from './Messege/Messege'
import m from './Messeges.module.css'
import StoreContext from "../../StoreContext";


const Messeges = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let MessegesOut = store.getState().messegesPage.MessegesData.map(
                        el => <Messege username={el.username} lastmessege={el.lastmessege} />
                    );
                    return (
                        <div className={`container ${m.messeges__container}`}>
                            <ul className={m.messeges__list}>
                                {MessegesOut}
                            </ul>
                            <ul>
                                <li className={m.messege__lastMessege}>
                                    Last messege
                                </li>
                            </ul>
                        </div>
                    );
                }
            }
        </StoreContext.Consumer>
    );
    
}

export default Messeges;