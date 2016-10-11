// $(function(){

// var anim = {
// 	marginLeft:'750px',
// 	marginTop:'0px',
// };

// var options = {
// 	queue:false,
// 	duration:2000,
// };


//     $("#divq , #hov")
//     .animate(anim ,options)
//     // .animate(
//     // {
//     //     width:'50px',
//     //     height:'50px'
        
        
//     // },2000);

// });





$(function(){
	
	$('#divq').animate(
	{
marginLeft:'630px',
marginTop:'0px'
		},2000 )
	.animate(
	{
marginLeft:'0px',
marginTop:'0px'
	},3000);
});






$(document).ready(function() {
var divw = $('.divw');

function runIt(){
	
	divw.animate(
	{
marginLeft:'130px',

opacity:'0.99'
 
		},3000 ,'easeOutBounce')


.animate(
	{
	fontSize:'16px'
	 },500)
.animate(
	{

	opacity:'0.00'
	 },50)

	.animate(
	{
marginLeft:'0px',
marginTop:'0px'
	},2000, function() {
            divw.removeAttr("style");
            
            setTimeout(function() {
                runIt();
            }, 1000);
   });
    }

runIt();


});



// $(function(){

// var button_anim = {
// 	marginLeft:'190px',
// 	marginTop:'125',
// 	fontSize:'46px'
// };



// var options = {
// 	queue:false,
// 	duration:2000,
// };


//     $(".zac_site ")
//     .animate(button_anim ,options)
   

// });



/*кнопка заказать сайт анимация  начало*/

$(document).ready(function() {
var zs = $('.zac_site');

function runIt(){
	
	zs.animate(
	{
	marginLeft:'190px',
	marginTop:'125',
	opacity:'1',
 
		},3000 ,'easeOutBounce')


.animate(
	{
	fontSize:'46px'
	 },500)
.animate(
	{

	opacity:'0.00'
	 },50)

	.animate(
	{
marginLeft:'0px',
marginTop:'0px'
	},2000, function() {
            zs.removeAttr("style");
            
            setTimeout(function() {
                runIt();
            }, 1000);
   });
    }

runIt();


});

/*кнопка заказать сайт анимация  конец*/

$(document).ready(function() {
var zаs = $('.zacazS');

function runIt(){
	
	zаs.animate(
	{
	
	opacity:'0.1',
 
		},100 )

	.animate(
	{
opacity:'1.0',
backgroundColor:"#D0FF00",
	},100, function() {
            zаs.removeAttr("style");
            
            setTimeout(function() {
                runIt();
            }, 100);
   });
    }

runIt();


});






