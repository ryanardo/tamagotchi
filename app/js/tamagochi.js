import { Care } from './tamagotchi.care.js';

export class Tamagotchi {

	constructor(name) {
		this.name = name;
		this.foodLevel = 100;
		this.playLevel = 420;
		this.sleepLevel = 69;
	}
	//Set Interval
	setFood() {
		setInterval(() => {
			this.foodLevel--;
		}, 60000)
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
		if (this.foodLevel > 0 || this.sleepLevel > 0) {
			return false;
		} else {
			return true;
		}
	}

	itDying() {
		if (this.foodLevel < 20 || this.sleepLevel < 10) {
			return true;
		} else {
			return false;
		}
	}
}
