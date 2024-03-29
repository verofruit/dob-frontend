import { useState } from "react";
import Produto from "../../../models/Produto";
import { useNavigate } from "react-router-dom";
import { toastAlerta } from "../../../util/toastAlerta";

interface CardProdutosProps {
  prod: Produto;
}

function CardProdutoHome({ prod }: CardProdutosProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  function retornar() {
    navigate("/login");
    toastAlerta("Você precisa estar logado", "info");
  }
  return (
    <div className="max-w-sm bg-white mb-7 rounded-lg shadow dark:bg-white dark:border-black-700 transition duration-300 ease-in-out transform hover:scale-105 hover:text-black-600 flex flex-col">
      <a href="#">
        <img className="w-full h-96 object-cover" src={prod.foto} alt="" />
      </a>
      <div
        className="p-5 flex flex-col justify-between"
        style={{ height: "calc(100% - 180px)" }}
      >
        <div className="h-auto">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {prod.nome}
            </h5>
          </a>
          <p
            className="mb-3 font-normal text-gray-900 dark:text-gray-400"
            style={{
              maxHeight: showFullDescription ? "none" : "2.6em",
              overflow: "hidden",
            }}
          >
            {prod.descricao}
          </p>
          {prod.descricao.length > 150 && (
            <button
              onClick={toggleDescription}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              {showFullDescription ? "Ver menos" : "Ver mais"}
            </button>
          )}
        </div>
        <div className="flex flex-col mt-auto">
          <p className="mb-2 mt-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-black">
            R$ {prod.preco.toFixed(2)}
          </p>
          <button
            onClick={() => retornar()}
            className="w-full inline-flex items-center mt-3 justify-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProdutoHome;
