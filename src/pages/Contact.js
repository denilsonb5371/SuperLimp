import "./Contato.css"

const Contact = () => {
  return (

    <div className="contact">
              <img className='contact-Image' src="./Contact.jpg" alt="Contact" />

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <h1 className="contact-title">
                  Tem dúvidas, quer um orçamento
                  <br/> ou agendar um serviço? 
                  <br/> Entre em contato com a gente!</h1>
            
            <br/>
<div className='Cards-contact'>
      {/*ITEM-1*/}
        <div className='Cards-Item-contact'>
          <img className='Cards-Imagens-contact' src="./icone-zap.png" alt="Zap" />
          <h2 className='Cards-Title-contact' style={{padding:"30px 0px 0px 0px"}} >(11) 98593-7564</h2>
        </div>
      {/*ITEM-1*/}
      {/*ITEM-2*/}
        <div className='Cards-Item-contact'>
          <img className='Cards-Imagens-contact' src="./icone-telefone.png" alt="Telefone" />
          <h2 className='Cards-Title-contact' style={{padding:"30px 0px 0px 0px"}} >(11) 5677-0229</h2>
        </div>
      {/*ITEM-2*/}
      {/*ITEM-3*/}
        <div className='Cards-Item-contact'>
          <img className='Cards-Imagens-contact' src="./icone-localizacao.png" alt="Localização" />
          <h2 className='Cards-Title-contact' style={{padding:"20px 0px 10px 5px"}} >Rua Luisa Alvares, 347 - Vila Campestre - Jabaquara.</h2>
        </div>
      {/*ITEM-3*/}
            
            </div>
     </div>

  )
}

export default Contact
