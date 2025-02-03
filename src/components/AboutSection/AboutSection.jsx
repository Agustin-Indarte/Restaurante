import './AboutSection.css'
import { Link } from 'react-router-dom'
function AboutSection() {
    return (

        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                    <img src="https://scontent.faep29-1.fna.fbcdn.net/v/t39.30808-6/272926703_4123980364372195_3246054353507299554_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH37409N4mnPGeHoCNqDOAO-APAXIPxX4v4A8Bcg_Ffi4zI9wLlQu2mt4PwNO5mZT0JwcsOHDPnquLt7VeOEBG1&_nc_ohc=HeJQ9lXbLokQ7kNvgEKT_y2&_nc_oc=Adg06gWi3bkieGKNiJOUs97DzaopJf3bwJUlJGgNBmTankgpFX0cJ-Xjb7qnEc9r6C749aYM-rPgqSPZdkvVqIZq&_nc_zt=23&_nc_ht=scontent.faep29-1.fna&_nc_gid=AWulsbyHIrX0mfIpogLAMAZ&oh=00_AYCSxSUhUMkRATW94Rmwuyxy6RXOhJkzHQaOnisGWiWjlA&oe=67A5D089" alt="About img" className='img-fluid w-75 object-fit-cover' />
                </div>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='fs-1 mb-5 ' style={{color:"#462a1c"}}>Sobre Nosotros</h2>
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