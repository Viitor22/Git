$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        var novaTarefa = $('#tarefa').val();
        let novoItem = '<li>'+ novaTarefa +'</li>';
        $(novoItem).appendTo('ul');
        $('#tarefa').val("");

        $('li').on('click', function(){
            $(this).css({"text-decoration": "line-through"});
        })
    })
})