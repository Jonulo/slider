
/* cada vez que se recargue la pagina ejecuta la funcion()...*/
$(document).ready(function(){
	/* hacer dinamico lapaginacion, agrega un punto cuando hay una nueva imagen*/
	var imgItems = $('.slider li').length; //saber el numero de li (osea las imagenes)
	var imgPos = 1; //se controla la posicion en todas las funciones!!
	for(i=0; i<imgItems; i++){
	$('.pagination').append('<li><span class="icon-android"></span></li>');/*el "append"
	agrega elementos a HTML*/
	}

	$('.slider li').hide();
	$('.slider li:first').show();
	$('.pagination li:first').css({'color': 'yellow'});

	//funciones a ejecutar cuando se da click en el objetivo:
	/*$('.pagination li').click(pagination);*/
	$('.arrowright span').click(nextArrow);
	$('.arrowleft span').click(prevArrow);
	$('#menuSports').click(showSports);
	$('#menuIcon').click(showMenu);
//asignarle una variable al intervalo para saber cual se resetea y asignarle de nuevo el intervalo su tiempo y funciones
	var interval=setInterval(function(){
		nextArrow()
	},4000);


	//funciones================================================

	function pagination(){
		var paginationPos = $(this).index()+1; //traemos las posicion del elemento al cual se le dio click
		imgPos=paginationPos;
		$('.slider li').hide();
		$('.slider li:nth-child('+paginationPos+')').fadeIn(); //fadeIN() hace que se muestre la imagen con efecto

		$('.pagination li').css({'color': 'gray'});
		$(this).css({'color': 'yellow'});
	}

	function nextArrow(){
		if(imgPos==imgItems) {imgPos=1;}
		else {imgPos++;}

		$('.pagination li').css({'color': 'white'});
		$('.pagination li:nth-child('+imgPos+')').css({'color': 'yellow'});

		$('.slider li').hide();
		$('.slider li:nth-child('+imgPos+')').fadeIn();

		clearInterval(interval);
		interval=setInterval(function(){
			nextArrow()
		},4000);
	}

	function prevArrow(){
		if(imgPos==1) {imgPos=imgItems;}
		else {imgPos--;}

		$('.pagination li').css({'color': 'white'});
		$('.pagination li:nth-child('+imgPos+')').css({'color': 'yellow'});

		$('.slider li').hide();
		$('.slider li:nth-child('+imgPos+')').fadeIn();

		clearInterval(interval);
		interval=setInterval(function(){
			nextArrow()
		},4000);
	}

	function showSports(){
	var ancho = $(document).width();
		if(ancho<=767){
			if( $('.secondMenu').is(":visible"))
    				$('.secondMenu').hide();
				else
    				$('.secondMenu').show();
					
			}else{
				if( $('#showMenu').is(":visible") ){
    				$('#showMenu').hide();
				}else{
    				$('#showMenu').show();
					}
				}
	}
	function showMenu(){
		if( $('#menuCard').is(":visible"))
			$('#menuCard').hide();
		else	
			$('#menuCard').show();
	}
});


/*console.log(nombreVariable); -- muestra el valor de la variable en el partado consola*/