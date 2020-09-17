import React from "react";


function HomeThreeColumns() {
    return (
        <div className={"threeColumns__section"}>
            <div className={"threeColumns__box"}>
                <p className={"threeColumns__number"}>10</p>
                <span className={"threeColumns__tag"}>ODDANYCH WORKÓW</span>
                <span className={"threeColumns__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta eaque est impedit laborum libero nemo perferendis repellendus suscipit!</span>
            </div>
            <div className={"threeColumns__box"}>
                <p className={"threeColumns__number"}>5</p>
                <span className={"threeColumns__tag"}>WSPARTYCH ORGANIZACJI</span>
                <span className={"threeColumns__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta eaque est impedit laborum libero nemo perferendis repellendus suscipit!</span>
            </div>
            <div className={"threeColumns__box"}>
                <p className={"threeColumns__number"}>7</p>
                <span className={"threeColumns__tag"}>ZORGANIZOWANYCH ZBIÓREK</span>
                <span className={"threeColumns__text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta eaque est impedit laborum libero nemo perferendis repellendus suscipit!</span>
            </div>

        </div>
    )
}

export default HomeThreeColumns