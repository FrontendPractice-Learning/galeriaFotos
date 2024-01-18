/*

$(document).ready(function(){
    alert("Olá JQUERY")
}) //tudo que queremos dentro do Jquery tem ficar dentro desse escopo. Ele escreveu um alert primeiro
//para verificar se estava tudo certo. 

*/
/*
    VERSÃO LONGA
    console.log(document.querySelector('header button')); //botão que esta na tag header
    console.log($('header button')); //aqui colocou o seletor - pode ser qualquer tipo

    document.querySelector('header button').addEventListener('click'), function(){

    }//quando passamos uma função como argumento de outra função e é chamada depois da função principal
    //ela é chamada de calback, então a function em azul e tudo dentro das chaves é o calback do evento click(função click)

    
    */
$(document).ready(function(){
    const enderecoDaNovaImagem = $('#endereco-imagem-nova');
    const novoItem = $('<li style="display: none"></li>');
    
    $('header button').click(function(){
        $('form').slideDown(); //efeito de slide -abrir pra baixo)
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        enderecoDaNovaImagem.val(); //no js é value, no jq é val
         // quando adicionar uma imagem ela não vai ser exibida
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); //appendto = adicionar para (append = adicionar)
        $(`
            <div class="overlay-imagem-link">
                <a href = "${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div> 
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        //exatamente a cópia da seção do HTMl só mudou que colocou a constante. 
        // ele abriu o $ pra colar varias linhas de HTML mais organizadas.
        $(novoItem).fadeIn(1000); //opções (5000) está em milissegundos, então aqui seria 5 segundos
        enderecoDaNovaImagem.val(''); // limpa o que escrevemos no input 
    })
}) 

//para fazer a animação de fade-in primeiro aplica o display none no li, para que 
//a imagem adicionada não apareça no navegador. Ela ta lá, mas não aparece. Se desativar esse display, ela reaparece.

