export class Tamagotchi {

	constructor(name) {
		this.name = name;
		this.foodLevel = 100;
		this.playLevel = 420;
		this.sleepLevel = 69;
	}

	resetTomagachi(foodLevel, playLevel, sleepLevel) {
		this.foodLevel = foodLevel;
		this.playLevel = playLevel;
		this.sleepLevel = sleepLevel;
	}

	//Set Interval
	setFood() {
		setInterval(() => {
			this.foodLevel--;
		}, 60000);
	}

	setPlay() {
		setInterval(() => {
			this.playLevel--;
		}, 60000);
	}

	setSleep() {
		setInterval(() => {
			this.sleepLevel--;
		}, 60000);
	}

	itDed() {
		if (this.foodLevel <= 0 || this.sleepLevel <= 0) {
			return true;
		} else {
			return false;
		}
	}

	itDying() {
		if (this.foodLevel < 20 || this.sleepLevel < 10) {
			return true;
		} else {
			return false;
		}
	}

	foodSnack(numberOfSnacks) {
		const snack = 10 * numberOfSnacks;
		this.foodLevel += snack;
	}

	playRecess() {
		const recess = 10;
		const food = 10;
		const sleep = 10;
		this.playLevel += recess;
		this.foodLevel -= food;
		this.sleepLevel -= sleep;
	}

	sleepNap() {
		const nap = 10;
		let time = 30000
		this.sleepLevel += nap;
	}
}
