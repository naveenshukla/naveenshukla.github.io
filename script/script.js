$(document).ready(function(){
	$("img").mouseover(function(){
		document.getElementById('imgid').className="";
	});
	$("#titleid").mouseover(function(){
		document.getElementById('titleid').className="title container-fluid";
	})
	$("#iid").mouseover(function(){
		document.getElementById('iid').className="i";
	})
	$("#aboutid").mouseover(function(){
		document.getElementById('aboutid').className="container about";
	})
	$("#infoid").mouseover(function(){
		document.getElementById('infoid').className="abouti";
	})

	$("#fb").mouseover(function(){
		document.getElementById('fb').className="social";
	})

	$("#github").mouseover(function(){
		document.getElementById('github').className="social";
	})

	$("#lin").mouseover(function(){
		document.getElementById('lin').className="social";
	})
})