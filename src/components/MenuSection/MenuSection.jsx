import BtnMenu from "../BtnMenu/BtnMenu"
function MenuSection() {
  return (
    <div className='menu-section py-5 text-light shadow'>
    <div className='container d-flex flex-column align-items-center'>
        <h2 className='fs-1 mb-5 text-uppercase fw-bold text-warning'>Los Favoritos</h2>
        <div className='row mb-5 w-100'>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                  <h3 className='fs-2 mb-5' >PLATOS PRINCIPALES</h3>
                  <ul className='px-0'>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>Parrillada Mixta Para Dos Personas</p>
                          <p className='fs-3 mx-2 text-warning fw-bold'>$12.500</p>
                        </li>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>Matambrito al Verdeo con Fritas</p>
                          <p className='fs-3 mx-2 text-warning fw-bold'>$6.800</p>
                        </li>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>Milanesa Napolitana con Fritas</p>
                          <p className='fs-3 mx-2 text-warning fw-bold'>$7.200</p>
                        </li>
                  </ul>
            </div>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                  <h3 className='fs-2 mb-5'>LAS MEJORES BEBIDAS</h3>
                  <ul className='px-0'>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>Vino Malbec Reserva</p>
                          <p className='fs-3 mx-2 text-warning fw-bold'>$9.500</p>
                        </li>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>Cerveza Artesanal Tirada</p>
                          <p className='fs-3 mx-2 text-warning fw-bold'>$2.800</p>
                        </li>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>Limonada con Menta y Jengibre</p>
                          <p className='fs-3 mx-2 text-warning fw-bold'>$3.500</p>
                        </li>
                  </ul>
            </div>
        </div>
        <BtnMenu/>
     </div>
  </div>
  )
}
export default MenuSection