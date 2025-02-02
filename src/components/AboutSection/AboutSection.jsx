import './AboutSection.css'
import { Link } from 'react-router-dom'
function AboutSection() {
    return (

        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                    <img src="https://images.pexels.com/photos/175697/pexels-photo-175697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About img" className='img-fluid w-75 object-fit-cover' />
                </div>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='fs-1 mb-5 text-uppercase'>Sobre Nostros</h2>
                    <p>
                    En La Leñita Parrillada, llevamos más de 40 años ofreciendo la mejor experiencia gastronómica en San Miguel de Tucumán. Nos enorgullece combinar la calidez de la cocina argentina con un ambiente familiar, donde cada visita se convierte en un momento especial. Además, nuestra atención personalizada y el toque único de nuestros mozos, quienes deleitan a los comensales con interpretaciones folclóricas, hacen de cada comida una experiencia inolvidable.
                    </p>
                    <p className='mb-5'>
                    Creemos que una buena parrilla es mucho más que carne a las brasas: es tradición, es encuentro y es sabor. Por eso, en La Leñita, cuidamos cada detalle para que disfrutes de platos preparados con ingredientes de primera calidad, cocinados con el auténtico espíritu de la parrilla argentina. Ya sea que nos visites para una cena en familia, una reunión con amigos o simplemente para degustar nuestras especialidades, te esperamos con el fuego encendido y el mejor sabor de Tucumán.
                    </p>
                    <Link to="/about">
                        <button className=' btn btn-outline-dark btn-lg'>
                            Más sobre Nosotros
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default AboutSection