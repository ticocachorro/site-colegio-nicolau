const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".conteudo");
for(let i=0; i<botoes.length; i++){
botoes[i].onclick = function(){
for(let j=0; j<botoes.length; j++){
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
}
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");

}
}






document.querySelectorAll('.menu-toggle,.submenu-toggle').forEach(function(toggle) {

toggle.nextElementSibling.style.display = 'none';

toggle.addEventListener('click', function(e) {

e.preventDefault();

e.target.nextElementSibling.style.display =

e.target.nextElementSibling.style.display === 'none' ? 'block' : 'none';

});

});