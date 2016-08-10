var count = 0;

$(document).ready(function() {

	while(count < 3735){
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
		if (typeof size !== 'undefined') {
			var limit = size*size;
		} else {
			var limit = 3735;
		}
		while(count < limit){
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

		size = prompt("What size would you like the new etch-a-sketch to be?");

		$('#wrapper').css('width', size*12);

		while(count < size * size){
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
