$(document).ready(function(){
	$("button").click(function(){
		$.ajax({  type : 'GET',
			dataType : 'json',
			async: false,
			url: "teste.html",
			success: function(result){
				$("#div1").html(result);
			}});
	});
});