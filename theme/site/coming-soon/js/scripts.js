// JpreLoader ------------------
	$('#wrapper').jpreLoader({
		loaderVPos: '50%',
		autoClose: true,
	}, 
	function() {
		$('#wrapper').animate({"opacity":'1'},{queue:false,duration:700,easing:"easeInOutQuad"});			
		$('h2.animtext').textillate({ in: { effect: 'flipInX',delayScale: 2.5  } });
		setTimeout( function(){		
			$('.content').animate({"opacity":'1'},{queue:false,duration:1200,easing:"easeInOutQuad"});
		},2200);
	});

function initSoon() {

// functions ------------------

	"use strict";

	//------------------------------init countdown -----------------------
	
	$('.countdown').downCount({
		date: '09/12/2014 12:00:00', // your date
		offset: +10
	});
																		

		

				
// Subscribe   ----------------------------------------

	$('.subscriptionForm').submit(function(){		
		var email = $('#subscriptionForm').val();
		$.ajax({
			url:'php/subscription.php',
			type :'POST',
			dataType:'json',
			data: {'email': email},success: function(data){
				if(data.error){
					$('#error').fadeIn()
				}
				else{
					$('#success').fadeIn();
					$("#error").hide();}
				}
			});
		return false
	});
	
	$('#subscriptionForm').focus(function(){
		$('#error').fadeOut();
		$('#success').fadeOut();	
	});
	
	$('#subscriptionForm').keydown(function(){	
		$('#error').fadeOut();
		$('#success').fadeOut();		
	});				
		$('#nav li').click(function(){
			$('#nav li').removeClass('act');
			$(this).addClass('act');	
		});
		
//------------------------------finit  fitText  -----------------------
		
	$('h2.animtext').fitText(1.8,{minFontSize:'20px',maxFontSize:'52px'});	
			
};
$(document).ready(function(){	
	initSoon();		
});


