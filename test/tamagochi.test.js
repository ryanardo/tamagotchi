import { Tamagotchi } from './../app/js/tamagochi.js';
import * as sinon from 'sinon';
const assert = require('assert');

describe('Tamagotchi', function () {

	let kevin = new Tamagotchi("kevin");
	let clock = sinon.useFakeTimers();

	beforeEach(function () {

	});

	afterEach(function () {
		clock.restore();
	});

	// Calculate seconds in a year
	describe('setFood', function () {
		it('[setFood] should return 100.', function () {
			assert.equal(100, kevin.foodLevel);
		});
	});

});
