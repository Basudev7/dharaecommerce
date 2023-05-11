


//Show More

$('.wrap-5 .ShowMore  button').click(function(e){
    e.preventDefault();
    $(".MoreItems").attr("style","display:block")
    $(".wrap-5 .ShowMore").attr("style","display:none")
})

$('.wrap-10 .container p > a').click(function(e){
    e.preventDefault();
})

$(document).ready(function(){
    $('.btn-rep').on("click",function(){
   $(".collapse").slideToggle();
//    $(".collapse nav ul li a").style.display="block"
//    $('nav').slideToggle(1000);
})
})

//$('.ContactSubmit').click(function(e){
//    e.preventDefault();
//    if()
//    alert("Thanks")
//})

