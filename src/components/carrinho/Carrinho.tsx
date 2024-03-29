import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import CardCarrinho from './CardCarrinho';

function Carrinho() {
    
    const { carrinho,  } = useContext(CarrinhoContext);

    return (
        <div className="pt-6">
            <h1 className="mb-5 ml-28 font-medium text-laranja text-4xl">CARRINHO</h1>
            {carrinho.map((produto) => (
                <CardCarrinho key={produto.id} produto={produto} />
            ))}
           
        </div>
    );
}

export default Carrinho;