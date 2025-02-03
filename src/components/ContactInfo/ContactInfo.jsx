function ContactInfo() {
    return (
        <div className='bg-dark text-light py-5 shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                        <div className='d-flex flex-column align-items-center'>
                            <h2 className='fs-1 mb-3  fw-bold'style={{color:"#e75e16"}}>¿Donde Encontrarnos?</h2>
                            <p className='mb-5'>Gral. José de San Martín 389, San Miguel de Tucumán, Tucumán</p>
                            <h3 style={{color:"#e75e16"}}>Horarios de Atención</h3>
                            <p className='m-0'>Lun - Dom: 12am - 13pm</p>
                            <p>Lun - Dom: 09pm - 12pm</p>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img className='img-fluid w-50' src="https://scontent.faep29-1.fna.fbcdn.net/v/t39.30808-6/359310277_662103655960297_8494996414728530702_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHaQL6HSmigwQ7FMki6RFSMVOAOpWEe_09U4A6lYR7_Tw8XcC3SY6MoiahLRq8b7xr9c5KpTSpvPle-5ZkAwe8_&_nc_ohc=zXjlifaC-rEQ7kNvgHIBIKq&_nc_oc=Adgjw2wdflbbtfySFp7QQkH2Z5lij23yxydsauKUcUBj0plNF8xMthLBLKrF87UMtNc&_nc_zt=23&_nc_ht=scontent.faep29-1.fna&_nc_gid=AxovPAdNE4YEpone4Pf-XC6&oh=00_AYCu1io5CCmyOxAXTvRGj4PdEUOcz3qnNxIMZ-UriDgyOQ&oe=67A5D838" alt="Contact-info" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo