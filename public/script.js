let signButtonClickCount = 0;
$(document).ready(() => {

 	signInOrLogin();
 	
	$('#local-btn').click(() => {
		signButtonClickCount++;
 		signInOrLogin();
	})











})