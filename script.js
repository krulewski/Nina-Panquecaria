function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/icons8-menu (1).svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/icons8-close.svg";
    }
}

document.getElementById('pedidoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    // Capturar os dados do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const sabor = document.querySelector('input[name="sabor"]:checked').value;
    const data = document.getElementById('data').value;

    // Montar a URL do WhatsApp com os dados
    const msg = `Olá, gostaria de fazer um pedido:%0A%0ANome: ${nome}%0ATelefone: ${telefone}%0ASabor: ${sabor}%0AData e Hora: ${data}`;

    // Substitua SEU_NUMERO_DE_TELEFONE pelo número correto (por exemplo: 5511999999999 para São Paulo, Brasil)
    const whatsappUrl = `https://wa.me/5518996467780?text=${msg}`;

    // Redirecionar para o WhatsApp
    window.open(whatsappUrl, '_blank');
});



