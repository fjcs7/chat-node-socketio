//  pega as referencias dos elementos da página.
var $form = $('#form_dados');
var $mensagemTexto = $('#mensagem');
var $nick = $('#nome');
var $listaMensagem = $('#mural');
var $horaServidor = $('#hora');

var socket = io();

socket.on('mensagem', function(msg) {
    //Exercício 5) Modifique o tutorial de chat WebSockets de forma a permitir o envio de um link de uma figura;
    $listaMensagem.append($('<li>').html(msg));
});
socket.on('horaServidor', function(hora) {
    $horaServidor.text(hora);
});

$form.submit(function() {
    //Exercício 4) Modifique o tutorial de chat WebSockets de forma a receber o nick de usuário;
    socket.emit('mensagem', {
        user: $nick.val(),
        msg: $mensagemTexto.val()
    });
    $mensagemTexto.val('');
    return false;
});