import './ImageGallery.css'

function ImageGallery() {
    return (
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase">Galeria de Imagenes</h2>
            <div className="row">
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img className="img-fluid gallery-pic-vertical" src="https://images.pexels.com/photos/27223808/pexels-photo-27223808/free-photo-of-cena-cocina-cocinando-jugoso.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="my-3">
                        <img className="img-fluid gallery-pic" src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img className="img-fluid gallery-pic" src="https://images.pexels.com/photos/2233730/pexels-photo-2233730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="my-3">
                        <img className="img-fluid gallery-pic-vertical" src="https://images.pexels.com/photos/4551907/pexels-photo-4551907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img className="img-fluid gallery-pic-vertical" src="https://images.pexels.com/photos/12648493/pexels-photo-12648493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    </div>
                    <div className="my-3">
                        <img className="img-fluid gallery-pic" src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery