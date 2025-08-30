function fazerPedido(nomeHamburguer) {
    alert(`Você pediu um hambúrguer ${nomeHamburguer}! Em breve ficará pronto`);
}

document.getElementById("form-pedido"),addEventListener("submit", function(event) {
    event.preventDefault();
}