import React, { useEffect, useState } from 'react'

import axios from 'axios'
import "./CarouselCards.css"

function CarouselCards() {
    let [cards, setCards] = useState([])

    const api = async () => {
        await axios.get("http://localhost:8080/voices")
            .then(response => {
                setCards(response.data)
            }).catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        api();
    }, [])
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                {cards.map((actor, index) =>
                    <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={cards.id}>
                        <img src={actor.url_img} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{actor.name}</h5>
                                <p>{actor.email}</p>
                            
                            </div>
                    
                    </div>
                )}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );

}

export default CarouselCards