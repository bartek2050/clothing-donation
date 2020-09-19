import React from "react";
import Decor from "../../assets/Decoration.svg"

function Decoration (props) {
    return (
        <div className={"decor"}>
        <h3 className={"decorHeader"}>{props.header}</h3>
        <img className={"decorElement"} alt={"decor"} src={Decor} />
        </div>
    )
}

export default Decoration;