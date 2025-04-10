import BtnMenu from '../BtnMenu/BtnMenu'
import './HeaderHome.css'

function HeaderHome() {
  return (
    <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                    <h2 className='mb-0 text-light fw-bold'>Bienvenidos a</h2>
                    <h1 className='mb-5 text-light fw-bold text-center text-sm-start'>La Leñita</h1>
                    <BtnMenu/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default HeaderHome