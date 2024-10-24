function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

document.getElementById('pedidoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    // Capturar os dados do formulário
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereço').value;
    const cidade = document.getElementById('cidade').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const sabor = document.querySelector('input[name="sabor"]:checked').value;
    const data = document.getElementById('data').value;

    // Montar a URL do WhatsApp com os dados
    const msg = `Olá, gostaria de fazer um pedido:%0A%0ANome: ${nome}%0AEndereço: ${endereco}%0ACidade: ${cidade}%0AEmail: ${email}%0ATelefone: ${telefone}%0ASabor: ${sabor}%0AData e Hora de retirada: ${data}`;

    const whatsappUrl = `https://wa.me/5518996467780/?text=${msg}`;

    // Redirecionar para o WhatsApp
    window.open(whatsappUrl, '_blank');
});
