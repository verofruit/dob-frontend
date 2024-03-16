import dob from "../../assets/DOB.png";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import Sobre from "../sobre/Sobre";

import "./Home.css";
import "./HomeDeslogado.css";
import DeslogadoProdutos from "../../components/produtos/listaProdutos/ListaProdutoDeslogado";


function HomeDeslogado() {
  return (
    <>
      <div className="w-screen">
        <div className="pt-10 bg-gradient-to-b  pb-32 grid items-center justify-items-center grid-cols-3  md:grid-cols-3">
          
            <div className="grid grid-cols-3 col-span-2 w-full">
              <div className="grid items-center justify-items-center col-span-2">
                <h2 className="mb-6 ml-6 text-orange-500 text-5xl font-bold">Comece aqui o seu negócio!</h2>
                <p className="ml-6 text-justify text-1xl font-bold">
                  O "Desenvolvendo o Bem - DOB" é um projeto inovador alinhado ao Objetivo de Desenvolvimento
                  Sustentável 1 da ONU, (ODS 1): Erradicação da Pobreza. Aqui você terá a oportunidade de iniciar a sua jornada
                  no mundo do empreendedorismo, anunciando os seus produtos e serviços.                  
                </p>
                <div className="mt-16 size-full  text-center ">
                  <a href="/cadastro"><button className='items-center justify-items-center m-auto rounded-full text-2xl text-white font-medium bg-verdeEsc hover:bg-verdeMusgo w-60 h-80 md:w-1/3 h-1/2 py-2 h-full' type='submit'>
             Crie sua conta!
            </button></a></div>
              </div>
            </div>
            <div className=" ">
              <img
                src='./src/assets/dobsemfundo.png'
                alt=""
                className="size-80 
                                                        pr-0"
              />
            </div>
            
        </div>

    <div className=" pb-20 grid  bg-gradient-to-b from-orange-500 to-orange-800 items-center justify-items-center overflow-hidden  bg-orange-700">
      <div className="flex gap-20 flex-wrap items-centers text-center">
       <div className="  w-full h-80 md:w-60  rounded shadow-lg hover:bg-orange-800  ">  
       <a href="/login">   
              <div className="grid grid-rows-4 py-4 h-full ">
                <div className="font-bold text-center text-2xl mb-2">Entre na sua Conta</div>
                <div className="grid row-span-2 items-center justify-items-center">
                  <div className=""><img className="text-justify size-24 text-center items-center justify-items-center"src='./src/assets/usericon.png' alt="" />
                  </div>
                </div>
                <div>
                <p className="ml-2 mr-2 font-bold text-white-700 text-base"> 
                 Entre em sua conta e fique por dentro das novidades!
                </p>
                </div>              
              </div>
              </a>
            </div>
            <div className=" w-full h-80 md:w-60 rounded shadow-lg   ">     
              <div className="grid grid-rows-4 py-4 h-full w-full">
                <div className="font-bold text-center text-2xl mb-2">Anuncie o seu produto ou serviço</div>
                <div className="grid row-span-2 items-center justify-items-center">
                  <div className=""><img className=" size-24 text-center items-center justify-items-center"src='./src/assets/formulario.png' alt="" />
                  </div>
                </div>
                <div className=" text-justify">
                <p className="ml-2 mr-2 font-bold text-white-700 text-base"> 
                  Você poderá anunciar seus produtos e serviços para outras pessoas contratarem
                </p>
                </div>              
              </div>
            </div>
            <div className=" w-full h-80 md:w-60    rounded shadow-lg ">     
              <div className="grid grid-rows-4 py-4 h-full ">
                <div className="font-bold text-center text-2xl mb-2">Oportunidade de Negócio</div>
                <div className="grid row-span-2 items-center justify-items-center">
                  <div className=""><img className="size-24 text-center items-center justify-items-center"src='./src/assets/negocios.png' alt="" />
                  </div>
                </div>
                <div className="text-justify">
                <p className=" ml-2 mr-2 font-bold text-white-700 text-base"> 
                 Você também tem a possibilidade de comprar e contratar serviços.
                </p>
                </div>              
              </div>
            </div>
            <div className=" w-full h-80 md:w-60   rounded shadow-lg">     
              <div className="grid grid-rows-4 py-4 h-full ">
                <div className=" font-bold text-center text-2xl mb-2">Sustentabilidade Econômica</div>
                <div className="grid row-span-2 items-center justify-items-center">
                  <div className=""><img className="size-24 text-center items-center justify-items-center"src='./src/assets/sustentabilidade.png' alt="" />
                  </div>
                </div>
                <div className="text-justify">
                <p className="ml-2 mr-2 font-bold text-base"> 
                 Com a sua ajuda, criaremos um mundo mais sustentável!
                </p>
                </div>              
              </div>
            </div>
            </div>
          </div>
        <div id="sobre"><Sobre></Sobre></div>
        
      
      </div>
    </>
  );
}
export default HomeDeslogado;