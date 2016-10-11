
<!-- accordeon начало-->
//accordeon
$(document).ready(function () {
$(".accordeon dd").hide().prev().mouseover(function() {
	$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
    })
})
;
 <!-- accordeon конец -->




<!-- плавная прокрутка якорей начало-->


 $(document).ready(function(){
    $("#menu1").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

<!-- плавная прокрутка якорей конец -->





















 