$(":button").click(function() {
	var isbn = this.id;
	//alert('About to report lost on ISBN ' + isbn);
	//alert(status);
	var display_value = "lost";
	$.ajax({
		  type: "PUT",
		  url: "/library/v1/books/"+isbn + "?status=lost",
	
		  dataType: "json",
		  contentType: "application/json",
		 
		  success: function(data) {
			  //  alert('please refresh the page to see current status of books');
			  $('#'+isbn).attr("disabled", true);
			  }
		});
	/*$.ajax({
		  type: "GET",
		  url: "/library/v1/books/",
	
		  dataType: "json",
		  contentType: "application/json",
		 
		  success: function(data) {
			   // alert('hi');
			    location.reload();
			    $('#'+isbn).attr("disabled", true);
			  }
		});*/

});
