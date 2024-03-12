import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import Usuario from '../../../models/Usuario'

interface CardProdutosProps {
  prod: Produto,
  usuario: Usuario
}

function CardProdutoPerfil({ prod, usuario }: CardProdutosProps, ) {
    if(prod.usuario?.id == usuario.id){
  return (
   
<div className="max-w-sm bg-white mb-7 rounded-lg shadow dark:bg-white dark:border-gray-700 transition duration-300 ease-in-out transform hover:scale-105 hover:border-orange-500 hover:text-gray-600">
<div className="flex w-full bg-orange-400 py-2 px-4 items-center gap-4">
          <img src={prod.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{prod.usuario?.nome}</h3>
        </div>
    <a href="#">
        <img className=" w-full h-80" src={prod.foto} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{prod.nome}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">{prod.descricao}</p>
        <p className="mb-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-black">R$ {prod.preco}</p>
        <p className="mb-3 font-bold text-gray-900 dark:text-gray-400">{prod.categoria?.tipo}</p>
        <div>
        <Link to={`/editarProduto/${prod.id}`} className='
inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${prod.id}`} className='ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
          <button>Deletar</button>
        </Link>
        </div>
    </div>
</div>
    
  )
}
}

export default CardProdutoPerfil