$(document).ready(function(){
    
    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + '<i class= "fas fa-check"></i> <i class= "fas fa-trash"></i> </li>');
        $(this).val('');
    });

// to delete task
    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').fadeOut(200);
    });

// to check task
    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').toggleClass('checked');
    });
}); 