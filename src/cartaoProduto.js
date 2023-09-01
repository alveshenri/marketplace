import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-solid border-2 w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group" id="card-produto-${produtoCatalogo.id}">
        <img 
        src="./assets/img/${produtoCatalogo.imagem}" 
        alt="produto 1 do MarketPlace"
        class = "group-hover:scale-110 duration-300 my-3 rounded-lg" 
        >
        <p class= "text-sm">${produtoCatalogo.marca}</p>
        <p class= "text-sm">${produtoCatalogo.nome}</p>
        <p class= "text-sm">$${produtoCatalogo.preco}</p>
        <button class= "bg-slate-950 hover:bg-slate-700 text-slate-200"
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }
}
