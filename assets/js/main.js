new WOW().init();
$(function(){
//Start Functions
$(".dropdown-button").dropdown();
$(".button-collapse").sideNav();
$('select').material_select();
$(".dropdown-button").dropdown();
$('.collapsible').collapsible();
Materialize.updateTextFields();
$('.tooltipped').tooltip({delay: 30});
$('.modal.dismissible').modal({
	dismissible: true,
});
$('.modal').modal({
	dismissible: false,
});

$('.char-counter').characterCounter();

$('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
        




//Number of SMS
$('#numOfClientsRange').change(function(){	
	$('#numOfClients').val($(this).val());
	Materialize.updateTextFields();
});
$('#numOfClients').on('keyup change',function(){
	var num = $(this).val();
	$('#numOfClientsRange').val(num);
});

//Form Process
$('.firstSubmit').on('click', function(e){			
	var numOfClients = $('#numOfClients').val();
	var area = $('#area').val();
	var type = $('input[type=radio]:checked').val();
	console.log($('input[type=radio]:checked').val());

	var error = 0;
	if (numOfClients < 50) {
		swal( 'Error',  'The number of clients cannot be less than 50',  'error');
		$('.collapsible').collapsible('open', 0);
		error++;
	}else if (area.length < 1) {
		swal( 'Error',  'Select at least one Area',  'error');
		$('.collapsible').collapsible('open', 1);
		error++;
	}else if($('input[type=radio]:checked').val() == ""){
		swal( 'Error',  'Select Type',  'error');
		$('.collapsible').collapsible('open', 2);
		error++;
	}

	if (error == 0) { //if no error was found
		if ($('input[type=radio]:checked').val() == 0) { //if MO
			$('#smsmodal').modal('open');
		}else if($('input[type=radio]:checked').val() == 1){ //if short url
			$('#urlmodal').modal('open');			
			$('#submitFromURL').show();
			$('#nextFromURL').hide();
		}else if($('input[type=radio]:checked').val() == 2){ //if short + MO
			$('#urlmodal').modal('open');			
			$('#nextFromURL').show();
			$('#submitFromURL').hide();
		}
	}
	

});

});