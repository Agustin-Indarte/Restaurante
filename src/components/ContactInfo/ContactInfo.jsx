function ContactInfo() {
    return (
        <div className='bg-dark text-light py-5 shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                        <div className='d-flex flex-column align-items-center'>
                            <h2 className='fs-1 mb-3 fw-bold'style={{color:"#e75e16"}}>¿Dónde encontrarnos?</h2>
                            <p className='mb-5'>Gral. José de San Martín 389, San Miguel de Tucumán, Tucumán.</p>
                            <h3 style={{color:"#e75e16"}}>Horarios de Atención</h3>
                            <p className='m-0'>Lun - Dom: 12am - 13pm</p>
                            <p>Lun - Dom: 09pm - 12pm</p>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img className='img-fluid w-75' src="https://scontent.faep29-2.fna.fbcdn.net/v/t1.6435-9/79336316_2531014500463159_3105700721572446208_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0b6b33&_nc_eui2=AeFKg2n--qC94juElazyq0E-zzpF9dmx9fPPOkX12bH182WWnK12YVEcvBGAaqIgK9VLCOs7RYumC1C91P-czWNZ&_nc_ohc=q1lBmT-ENjQQ7kNvwHmnLZE&_nc_oc=AdlRrEu1YTt7HJEDHA6jRS0xjj8zhMmJnVFtqCN4quJOSSgTCpvVzskrtInWMF-QBUA&_nc_zt=23&_nc_ht=scontent.faep29-2.fna&_nc_gid=eAuLz_ECfqokBb-b1TbOzA&oh=00_AfH1BKhR2_EL-I4CVbn_GKNbU0PxMwQBYKwT3hNN62uVaA&oe=681C0E1D" alt="Contact-info" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo