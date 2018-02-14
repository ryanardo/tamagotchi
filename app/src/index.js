import { Tamagotchi } from './../js/tamagotchi.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'babel'

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in the development mode!');
}

$(document).ready(function () {

	let kevin = new Tamagotchi("Kevin");
	kevin.setFood();
	kevin.setPlay();
	kevin.setSleep();

	let time = setInterval(() => {
		if (kevin.itDed() === true) {
			$("#food-level").empty();
			$("#play-level").empty();
			$("#sleep-level").empty();
			console.log("It ded.");
		} else {
			$("#food-level").empty().append(`${kevin.foodLevel}`);
			$("#play-level").empty().append(`${kevin.playLevel}`);
			$("#sleep-level").empty().append(`${kevin.sleepLevel}`);
			console.log("IT'S ALIVE!!!!");
		}
	}, 1000); //End kevin.itDed()

}); //End (document).ready
