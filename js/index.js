$(window).on("hashchange", function(){
	if(location.hash.slice(1)=="registro"){
		$(".card").addClass("extend");
		$("#log").removeClass("login");
		$("#registro").addClass("login");
	} else {
		$(".card").removeClass("extend");
		$("#log").addClass("login");
		$("#registro").removeClass("selected");
	}
});
$(window).trigger("hashchange");
