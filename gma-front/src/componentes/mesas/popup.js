import React from "react";
import { PopupComponent } from "./styles";

function Popup(props){
    return (props.trigger) ? (
        <PopupComponent>
            <div className="popup">
                <div className="popup-inner">
                    <button className="bt-fechar" onClick={() => props.setTrigger(false)}>Fechar</button>
                    <button className="bt-criar" onClick={() => props.setTrigger(false)}>Criar</button>
                    { props.children }
                </div>
            </div>
        </PopupComponent>
    ) : "";
}

export default Popup