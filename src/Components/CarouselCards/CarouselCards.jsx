import React from 'react'

function CarouselCards() {
    return (
        <div>
            <div class="multi-carousel" data-mdb-interval="3000" data-mdb-items="5">
                <div class="d-flex justify-content-center m-2 mb-3">
                    <button class="carousel-control-prev btn btn-pink btn-floating mx-3" type="button" tabindex="0" data-mdb-slide="prev">
                        <i class="fas fa-angle-left fa-lg"></i>
                    </button>
                    <button class="carousel-control-next btn btn-pink btn-floating mx-3" type="button" tabindex="0" data-mdb-slide="next">
                        <i class="fas fa-angle-right fa-lg"></i>
                    </button>
                </div>
                <div class="multi-carousel-inner">
                    <div class="multi-carousel-item">
                        <div class="card m-2">
                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Square/img(4).jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Moda</h5>
                                <p class="card-text">Plan B</p>
                                <ul class="list-unstyled list-inline my-2">
                                    <li class="list-inline-item mx-0"><i class="fas fa-star"></i></li>
                                    <li class="list-inline-item mx-0"><i class="fas fa-star"></i></li>
                                    <li class="list-inline-item mx-0"><i class="fas fa-star"></i></li>
                                    <li class="list-inline-item mx-0"><i class="fas fa-star"></i></li>
                                    <li class="list-inline-item mx-0"><i class="fas fa-star-half-alt"></i></li>
                                </ul>
                                <p class="price mb-0">9,99 $</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselCards