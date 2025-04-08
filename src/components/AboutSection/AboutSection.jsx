import './AboutSection.css'
import { Link } from 'react-router-dom'
function AboutSection() {
    return (

        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                    <img src="https://scontent.faep29-2.fna.fbcdn.net/v/t1.6435-9/60298194_2375263372704940_4473464818266800128_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_eui2=AeGXknpaJqgCp7aYKHo2Ra5g-B8qpWINyA_4HyqlYg3ID8N5aMGnFu5OQx04tGGviTbKOHRyR55mGglI5OMInwO4&_nc_ohc=HzsuiNCnnHgQ7kNvwGhcNqy&_nc_oc=Adkm1xGqH7muufvKPmvFwtI0dfS64ji7wp1xFEi_0RE_Ops9V_khIcXqrJGn5wC22G4&_nc_zt=23&_nc_ht=scontent.faep29-2.fna&_nc_gid=Np0fG-Qc5CjZrtKv1eQgQA&oh=00_AfHasHZ_C5Aom1m244tDx_2zQY2WpBq1mZc4HYOaj4EQkw&oe=681BDD1B" alt="About img" className='img-fluid w-75 object-fit-cover' />
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