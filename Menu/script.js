function popup {
	if (document.getElementById("popup").style.display == 'block') {
		document.getElementById("popup").style.display = 'none';
		document.getElementById("popupContent").style.display = 'none';
	}

	else {
		document.getElementById("popup").style.display = 'block';
		document.getElementById("popupContent").style.display = 'block';
	}
}

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});