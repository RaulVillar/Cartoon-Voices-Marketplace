import React, { useState } from 'react'
import './Card.css'
import { MdClose } from "react-icons/md";


import videomp4 from "./video.mp4"
const imgurl = "https://i.pravatar.cc/150?u=pablo";


function Card() {
    let [img, setImg] = useState({ display: "block" })
    let [video, setVideo] = useState({ display: "none" })

    function changeImgVideo(event) {
        if (event.type === "mouseover") {
            setImg({ display: "none" })
            setVideo({ display: "block" })
        } else {
            setImg({ dislay: "block" })
            setVideo({ display: "none" })
        }
    }






    return (
        <div class="card "style={{width: "18rem"}} >
            <div class="card-img ">
                <img src={imgurl} onMouseOver={changeImgVideo} style={img} alt="ejemplo" />
                <video src={videomp4} onMouseOut={changeImgVideo} style={video} autoPlay controls />
            </div>
            <div class="card-body">
                <h5 class="card-title">Nombre</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="card-body-ul">
                <li class="list-group-item">categoria</li>
                <li class="list-group-item">Email de contacto</li>
                <li class="list-group-item">Precio</li>
            </ul>
            <div class="card-body-button">
                <button type="button" class="btn btn-secondary btn-sm m-1">Contratar</button>
            </div>
        </div>
    )
}

export default Card
