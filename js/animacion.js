$("#inicio").click(function(){
    $(this).slideUp(500);
});

$('#logoInit').css({'height':'1000', 'border-style':'dashed','border-color':'pink'});
$('#logoInit').animate({'height':150}, 2000);
$('#logoInit').animate({'border-width':5},1000);

