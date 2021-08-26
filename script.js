document.addEventListener('DOMContentLoaded',function(){

	var audio0 = new Audio('snd/cartoon-bubble-pop-01.mp3');
	var audio1 = new Audio('snd/cbc4277e031bf4a.mp3');
	// Create a new 'change' event
	var eventChange = new Event('change');

	var playPop = function(e){
		var state = this.checked;
		if(state){
			audio0.currentTime=0;
			audio0.play();
		}else{
			audio1.currentTime=0;
			audio1.play();
		}
	}

	var handleMouse = function(e){
		var e_inp = this.querySelector('input');
		var e_inp_state = !!e_inp.checked;
		//console.log(e.type,e.which,e.buttons,e_inp.checked,e_inp.dataset)

		if(e.type == 'mousedown' && e_inp_state == false || e.type == 'mouseover' && e.which == 1 && e_inp_state == false){
			e_inp.checked = true;
			e_inp.dataset.wait = 1;
			e_inp.dispatchEvent(eventChange);
			// console.log('pop down');
		}

		if(e.type == 'mouseout' || e.type == 'mouseover'){
			e_inp.dataset.wait = 0;
		}

		if(e.type == 'mouseup' && e_inp_state == true && e_inp.dataset.wait == 0){
			e_inp.checked = false;
			e_inp.dataset.wait = 1;
			e_inp.dispatchEvent(eventChange);
			// console.log('pop up');
		}
		
	}


	for(var i=0; i<81; i++){

		/* create elements */

		var pg = document.getElementById('playground');
		var pop = document.createElement('div');
		pop.classList.add('pop');
		pg.appendChild(pop);

		var lab = document.createElement('label');
		pop.appendChild(lab);

		var inp = document.createElement('input');
		inp.type = 'checkbox';
		lab.appendChild(inp);

		var ph = document.createElement('div');
		ph.classList.add('il');
		lab.appendChild(ph);

		/* handle events */
		inp.addEventListener('change',playPop);
		/* mouse events */


		lab.addEventListener('mousedown',handleMouse);
		lab.addEventListener('mouseup',handleMouse);
		lab.addEventListener('mouseover',handleMouse);
		lab.addEventListener('mouseout',handleMouse);


		lab.addEventListener('click',function(e){
			e.preventDefault();
		});

	}

});

/**
 * Как реализовать аналог $(document).ready на чистом JS?
 * https://ru.stackoverflow.com/questions/414516/
 *
 * trigger change js
 * https://stackoverflow.com/questions/2856513/how-can-i-trigger-an-onchange-event-manually
 *
 * звук пупырка
 * https://zvukipro.com/predmet/247-zvuki-puzyrkov.html
 *
 * js play sound
 * https://stackoverflow.com/questions/9419263/how-to-play-audio
 *
 * radial gradient css
 * http://htmlbook.ru/css3-na-primerakh/radialnyi-gradient
 *
 * */
