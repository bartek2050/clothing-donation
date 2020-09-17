import React from "react";


function Foundation() {
    return (
        <section>
            <div className={"aboutFoundation__section"}>
                <div className={"aboutFoundation__text"}>
                    <p className={"aboutFoundation__text-name"}>
                        Fundacja dbam o zdrowie
                    </p>
                    <p className={"aboutFoundation__text-info"}>
                        Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                    </p>
                </div>
                <div className={"aboutFoundation__needs"}>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
            </div>

            <div className={"aboutFoundation__section"}>
                <div className={"aboutFoundation__text"}>
                    <p className={"aboutFoundation__text-name"}>
                        Fundacja “Dla dzieci”
                    </p>
                    <p className={"aboutFoundation__text-info"}>
                        Cel i misja: Pomoc dzieciom z ubogich rodzin.                    </p>
                </div>
                <div className={"aboutFoundation__needs"}>
                    <p>ubrania, meble, zabawki</p>
                </div>
            </div>

            <div className={"aboutFoundation__section"}>
                <div className={"aboutFoundation__text"}>
                    <p className={"aboutFoundation__text-name"}>
                        Fundacja “Bez domu”
                    </p>
                    <p className={"aboutFoundation__text-info"}>
                        Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
                    </p>
                </div>
                <div className={"aboutFoundation__needs"}>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </div>
            </div>

            <div className={"aboutFoundation__section"}>
                <div className={"aboutFoundation__text"}>
                    <p className={"aboutFoundation__text-name"}>
                        Fundacja “Lorem”
                    </p>
                    <p className={"aboutFoundation__text-info"}>
                        Cel i misja: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <div className={"aboutFoundation__needs"}>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
            </div>
        </section>
    )
}

export default Foundation;