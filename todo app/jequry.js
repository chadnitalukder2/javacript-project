$(document).ready(function(){
    
    $("#input").change(function(){
        var input = $(this).val();
        $("ul").append('<li>' + input + '<i class="fa-solid fa-house"></i> </li>');
    $(this).val("");
    });

});