function fazerPedido(produto) {
  alert(`Você escolheu: ${produto}`);
}

const form = document.getElementById('form-pedido');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // impede o envio automático do formulário

  const nome = document.getElementById('nome').value;
  const endereco = document.getElementById('endereco').value;
  const hamburguer = document.getElementById('hamburguer').value;
  const quantidadeHamburguer = document.getElementById('quantidadeHamburguer').value;
  const refrigerante = document.getElementById('refrigerante').value;
  const quantidadeRefrigerante = document.getElementById('quantidadeRefrigerante').value;

  // Mensagem formatada
  const mensagem = `Olá! Gostaria de fazer um pedido:
  
🍔 *Hambúrguer*: ${hamburguer} (x${quantidadeHamburguer})
🥤 *Refrigerante*: ${refrigerante} (x${quantidadeRefrigerante})

👤 *Nome*: ${nome}
🏠 *Endereço*: ${endereco}`;

  // Codifica a mensagem para usar em URL
  const mensagemCodificada = encodeURIComponent(mensagem);

  // Número de telefone com DDD (exemplo: 32 = Juiz de Fora / MG)
  const telefone = "5532988353163";

  // URL do WhatsApp
  const url = `https://wa.me/${telefone}?text=${mensagemCodificada}`;

  // Abre o WhatsApp em uma nova aba
  window.open(url, "_blank");
});
