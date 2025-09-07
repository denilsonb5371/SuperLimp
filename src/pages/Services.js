import "./Services.css"

const Serviços = () => {
  return (
    <div className='Cards'>
      {/*ITEM-1*/}
        <div className='Cards-Item'>
          <img className='Cards-Imagens' src="./Pinturas.jpg" alt="Pinturas" />
          <h2 className='Cards-Title' >Pinturas</h2>
          <p className='Cards-subject' >Realizamos pintura interna e externa, residencial e comercial, com materiais de qualidade.</p>
        </div>
      {/*ITEM-1*/}
        {/*ITEM-2*/}
        <div className='Cards-Item'>
          <img className='Cards-Imagens' src="./Jardinagem.jpg" alt="Jardinagem" />
          <h2 className='Cards-Title' >Jardinagem</h2>
          <p className='Cards-subject' >Oferecemos poda, limpeza, manutenção, corte de árvores e gramas.</p>
        </div>
      {/*ITEM-2*/}
        {/*ITEM-3*/}
        <div className='Cards-Item'>
          <img className='Cards-Imagens' src="./Reformas.jpg" alt="Reformas" />
          <h2 className='Cards-Title' >Reformas</h2>
          <p className='Cards-subject' >Executamos desde pequenas melhorias até reformas completas em residências, comércios e áreas externas.</p>
        </div>
      {/*ITEM-3*/}
      {/*ITEM-4*/}
       <div className='Cards-Item'>
          <img className='Cards-Imagens' src="./Eletrica.jpg" alt="Eletrica" />
          <h2 className='Cards-Title' >Elétrica</h2>
          <p className='Cards-subject' >instalações, reparos e manutenções de tomadas, disjuntores, interruptores, luminárias, chuveiros, fiação e quadros de energia.
          </p>
        </div>
      {/*ITEM-4*/}
      {/*ITEM-5*/}
       <div className='Cards-Item'>
          <img className='Cards-Imagens' src="./Hidraulica.jpg" alt="Hidraulica" />
          <h2 className='Cards-Title' >Hidráulica</h2>
          <p className='Cards-subject' >Instalações, reparos e manutenções em torneiras, registros, chuveiros, encanamentos e caixas d’água.
          </p>
        </div>
      {/*ITEM-5*/}
      {/*ITEM-6*/}
       <div className='Cards-Item'>
          <img className='Cards-Imagens' src="./Reparos.jpg" alt="Reparos" />
          <h2 className='Cards-Title' >Reparos e Manutenções</h2>
          <p className='Cards-subject' >Troca de maçanetas, dobradiças, vedação de portas e janelas, ajustes diversos.
          </p>
        </div>
      {/*ITEM-6*/}
      {/*ITEM-7*/}
       <div className='Cards-Item'>
          <img className='Cards-Imagens' src="./Instalacoes.jpg" alt="Instalacoes" />
          <h2 className='Cards-Title' >Instalações em geral</h2>
          <p className='Cards-subject' >Montagem de chuveiros, torneiras, suportes, varões de cortina, ventiladores, entre outros.
          </p>
        </div>
      {/*ITEM-7*/}
      {/*ITEM-8*/}
       <div className='Cards-Item'>
          <img className='Cards-Imagens' src="./Impermeabilizacao.jpg" alt="Impermeabilizacao" />
          <h2 className='Cards-Title' >Impermeabilização de Áreas Úmidas</h2>
          <p className='Cards-subject' >Proteção contra infiltrações em áreas como telhados, paredes, banheiros, varandas e caixas d’água.
          </p>
        </div>
      {/*ITEM-8*/}
      {/*ITEM-9*/}
       <div className='Cards-Item'>
          <img className='Cards-Imagens' src="./Limpeza.jpg" alt="Limpeza" />
          <h2 className='Cards-Title' >Limpeza de telhados</h2>
          <p className='Cards-subject' >Remoção de limo, sujeira e folhas, revitalizando o visual do telhado.
          </p>
        </div>
      {/*ITEM-9*/}
    </div>
  )
}

export default Serviços
