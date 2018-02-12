export class Care {

	constructor(food, play, sleep) {
		this.food = food;
		this.play = play;
		this.sleep = sleep;
	}; // End of the Care Constructor

	foodSnack() {
		const snack = 10;
		Tamagotchi.foodLevel += snack;
	}

	playRecess() {
		const recess = 10;
		const food = 10;
		const sleep = 10;
		Tamagotchi.playLevel += recess;
		Tamagotchi.foodLevel -= food;
		Tamagotchi.sleepLevel -= sleep;
	}

	sleepNap() {
		const nap = 10;
		let time = 30000
		Tamagotchi.sleepLevel += nap;
	}

}; // End of the Care Class
