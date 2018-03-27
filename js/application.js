/*Techdegree| Project 9
=====================================================================================
by Humberto Ventura
=====================================================================================
*/


// ok, lets activate page elements

// o9n document onload

$("document").ready(function() {
	

// activate notifications
$('#notify').click(function(){
// drop menu, using DOM to show if invisible

if(($('#notifications').css("visibility") == "hidden")){
    $('#notifications').css("visibility", "visible").fadeIn();	
} 
		else {
			$('#notifications').fadeToggle('slow','linear');
		}
         $("#dot").fadeOut("slow");
		return false;
	});
	
	
// if we click anywhere on the page, notifications disapears

	$(document).click(function () {
		$('#notifications').css("visibility", "hidden").fadeIn();
	});
	
// close message, even handler
$('#close-button').click(function(){
	$('#message').fadeOut("fast");
	
});

// messages form 
// send messages event handler
$('#send-button').click(function(e) {
	e.preventDefault();
	$('#message-form').hide();
	
	// show error if fields are empty, quoting "if input search user OR text area field are empty..."
	if ($('input#searchu').val().length === 0 || $('#textarea').val().length === 0) {
	$('#message-user').append('<div id="error"><p>Fields cannot be empty.</p><p><button id="retry">Retry</button><p></div>'); // try again
	// upon retry take out elements created
	
	$('#retry').click(function(){
	// remove error message
				$('#error').remove();
				$('#message-form').show();
				});
	}
	
	// ok and now if user inserts data in the fields...
	
	else if ($('input#searchu').val().length > 0) {
			$('#message-user').append('<div id="sent"><p> Your message has been sent.</p><p><button id="new-message">New Message</button><p></div>');

			//when user clicks new message button
				$('#new-message').click(function(){
                    $('#sent').remove();
					$('#error').remove();
					$('#message-form')[0].reset();
					$('#message-form').show();
				});
			}
	
}); // end send messages handler



// store option values and dropmenu with local storage
$('#save-button').click(function(e){

	var timezone = $('#timezone').val();
	localStorage.setItem('timezone', timezone);

	var email = $('#email-switch').prop('checked');
	localStorage.setItem('email', email);

	var public = $('#public-switch').prop('checked');
	localStorage.setItem('public', public);
});

$('#timezone').val(localStorage.getItem('timezone'));

// local storage for checkbox items
if (localStorage.getItem('email') == "true") {
			$('#email-switch').prop('checked', true);
		} else {
			$('#email-switch').prop('checked', false);
		}
		
		if (localStorage.getItem('public') == "true") {
			$('#public-switch').prop('checked', true);
		} else {
			$('#public-switch').prop('checked', false);
		}
		
		
// cancel button clears local storage
$('#cancel-button').click(function(e){
		e.preventDefault();
		localStorage.clear();
		//defaults
		$('#timezone').val('');
		$('#email-switch').prop('checked', false);
		$('#public-switch').prop('checked', false);
	});


});