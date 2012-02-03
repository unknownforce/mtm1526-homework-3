// JavaScript Document


$(document).ready(function() {
	
		$('#border').on('click', function (ev) {	
			
			$('form').on('submit', function (ev) {
				ev.preventDefault();
				//$('#inner').css('background-color', '#0F0');
				//$('#outer').css('border-color', '#0F0');
				if ($('#color').val() != '') {
					
					$('#outer').css('border-color', $('#color').val() );
					//$(this).css('background-color', '#f33');
				}
				
				
			});
		});
		
		$('#bg').on('click', function (ev) {	
			
			$('form').on('submit', function (ev) {
				ev.preventDefault();
				//$('#inner').css('background-color', '#0F0');
				//$('#outer').css('border-color', '#0F0');
				if ($('#color').val() != '') {
					
					$('#inner').css('background-color', $('#color').val() );
					//$(this).css('background-color', '#f33');
				}
				
				
			});
		});
		
		
		$('#text').on('click', function (ev) {	
			
			$('form').on('submit', function (ev) {
				ev.preventDefault();
				//$('#inner').css('background-color', '#0F0');
				//$('#outer').css('border-color', '#0F0');
				if ($('#color').val() != '') {
					
					$('#textcolor').css('color', $('#color').val() );
					//$(this).css('background-color', '#f33');
				}
				
				
			});
		});
	
		$('button').on('click', function (ev) {	
		
			ev.preventDefault();
			$('#outer').toggleClass('hide');
		});
	
});
	



