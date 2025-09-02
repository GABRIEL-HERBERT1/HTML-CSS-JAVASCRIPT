function fazerPedido(nomeHamburguer) {
    alert(`Você pediu um hambúrguer ${nomeHamburguer}! Em breve ficará pronto!`);
}

document.getElementById("form-pedido").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const hamburguer = document.getElementById("hamburguer").value;
    const quantidade = document.getElementById("quantidade").value;

    if (!nome || !endereco || !hamburguer || !quantidade) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Formata a mensagem
    const mensagem = `Olá! Gostaria de fazer um pedido:\n\n🍔 *Hambúrguer:* ${hamburguer}\n📦 *Quantidade:* ${quantidade}\n👤 *Nome:* ${nome}\n🏠 *Endereço:* ${endereco}`;

    // Número de WhatsApp da hamburgueria (ex: Brasil +55 11 91234-5678)
    const numero = "5532988353163"; // Substitua pelo seu número real

    // Cria a URL do WhatsApp com a mensagem codificada
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp
    window.open(url, "_blank");
});

    event.preventDefault(); // Evita recarregar a página

    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const hamburguer = document.getElementById("hamburguer").value;
    const quantidade = document.getElementById("quantidade").value;

    if (!nome || !endereco || !hamburguer || !quantidade) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert(`Pedido confirmado!\n\nCliente: ${nome}\nEndereço: ${endereco}\nHambúrguer: ${hamburguer}\nQuantidade: ${quantidade}\n\nObrigado por pedir conosco!`);
    
    // Aqui você poderia enviar os dados para um servidor se quiser
    this.reset(); // Limpa o formulário após envio
});
