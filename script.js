const menuData={
burgers:[["Chef Classic","Hambúrguer da casa — composição a confirmar.","A confirmar"],["Double Chef","Duas camadas de sabor — composição a confirmar.","A confirmar"],["Chef Special","Criação especial — produto demonstrativo.","A confirmar"]],
sides:[["Batatas Chef","Acompanhamento demonstrativo.","A confirmar"],["Batatas Especiais","Acompanhamento demonstrativo.","A confirmar"],["Combo","Combinação demonstrativa.","A confirmar"]],
drinks:[["Refrigerante","Bebida demonstrativa.","A confirmar"],["Milkshake","Bebida demonstrativa.","A confirmar"],["Bebida da Casa","Produto demonstrativo.","A confirmar"]],
desserts:[["Sobremesa Chef","Sobremesa demonstrativa.","A confirmar"],["Cheesecake","Produto demonstrativo.","A confirmar"],["Especial do Dia","Produto demonstrativo.","A confirmar"]]
};
const products=document.querySelector("#products");
function render(cat){products.innerHTML=menuData[cat].map(x=>`<article class="product"><div class="product-photo">${x[0].toUpperCase()}<small>FOTO REAL DO PRODUTO</small></div><div class="product-body"><h3>${x[0]}</h3><p>${x[1]}</p><div class="product-foot"><span class="price">${x[2]}</span><a class="order" href="tel:+244925918468">PEDIR ↗</a></div></div></article>`).join("")}
render("burgers");
document.querySelectorAll(".tabs button").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".tabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.cat)}));
const menuBtn=document.querySelector("#menuBtn"),nav=document.querySelector("#nav");menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll('.product,.gallery-card,.feature-strip div').forEach(el=>{
  el.addEventListener('pointerenter',()=>el.classList.add('is-hover'));
  el.addEventListener('pointerleave',()=>el.classList.remove('is-hover'));
});
