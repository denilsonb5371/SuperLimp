import "./Home.css"
const Home = () => {
  return (

    <header>
      <div className='Home'>


      <p  style={{textAlign:"center",paddingTop:"150px",fontSize:"50px"}} className="homeSubject">
      Cuidamos do seu lar com <br />
      qualidade e dedicação. <br />
      Peça seu orçamento agora! <br /> <br/>
           <a href="https://w.app/superlimp" className="button">Fale Conosco</a>
      </p>

        <p  style={{textAlign:"center",paddingTop:"150px",fontSize:"25px"}} className="homeSubject-mobile">
      Cuidamos do seu lar com <br />
      qualidade e dedicação. <br />
      Peça seu orçamento agora! <br /> <br/>
           <a href="#" className="button">Fale Conosco</a>
      </p>





    </div> 

    <img className='home-Service' src="./Atendimento.png" alt="service" />

    <img className='home-Service' src="./enterprise.png" alt="service" />

    <img className='home-Service' src="./enterprise-2.png" alt="service" /> 

    <img className='home-Service' src="./enterprise-3.png" alt="service" /> 
    
    <img className='home-Service' src="./enterprise-4.png" alt="service" />

    <img className='mobile-Service' src="./enterprise-mobile.png" alt="service" />

    <img className='mobile-Service' src="./enterprise-mobile-2.png" alt="service" />

    <img className='mobile-Service' src="./enterprise-mobile-3.png" alt="service" />

    <img className='mobile-Service' src="./enterprise-mobile-4.png" alt="service" />

    <img className='mobile-Service' src="./enterprise-mobile-5.png" alt="service" />



    </header>
  )
}

export default Home
