$("#inicio").click(function(){
    $(this).slideUp(500);
});

$('#logoInit').css({'height':'1000', 'border-style':'dashed','border-color':'pink'});
$('#logoInit').animate({'height':150}, 2000);
 // Hace crecer la letra a tamaño 30 y pone el grosor del borde a 5 en un segundo
$('#logoInit').animate({'border-width':5},1000);

