var count = 0;

$(document).ready(function() {

	while(count < 7200){
		$('#game').append('<div id="grid-"'+ count +' class="grid"></div>');
		count++;
	};

	$('.grid').on({
	    mouseenter: function () {
	        $(this).addClass('draw');
	    },
	    mouseleave: function () {
	        $(this).addClass('draw');
	    }
	});

	$('#clear-button').click(function() {
		$('#game').empty();

		count = 0;

		while(count < 7200){
			$('#game').append('<div id="grid-"'+ count +' class="grid"></div>');
			count++;
		};
		$('.grid').on({
	    	mouseenter: function () {
	       		$(this).addClass('draw');
	    	},
	    	mouseleave: function () {
	        	$(this).addClass('draw');
	    	}
		});
	});


	$('#clear-resize-button').click(function() {
		$('#game').empty();
		count = 0;

		var size = prompt("What size would you like the new etch-a-sketch to be?");

		while(count < size){
			$('#game').append('<div id="grid-"'+ count +' class="grid"></div>');
			count++;
		};
		$('.grid').on({
	    	mouseenter: function () {
	       		$(this).addClass('draw');
	    	},
	    	mouseleave: function () {
	        	$(this).addClass('draw');
	    	}
		});
	});
});




