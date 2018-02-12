import { Tamagotchi } from './../app/js/tamagochi.js';
import * as sinon from 'sinon';
import * as chai from 'chai';
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Tamagotchi', function () {

	let clock;
	let kevin = new Tamagotchi("kevin");

	beforeEach(function () {
		clock = sinon.useFakeTimers();
		kevin.resetTomagachi(100, 420, 69);
		kevin.setFood();
		kevin.setPlay();
		kevin.setSleep();
	});

	afterEach(function () {
		clock.restore();
	});

	// Calculate foodLevel at time interval of 0.
	describe('setFood', function () {
		it('[setFood] should return 100.', function () {
			assert.equal(100, kevin.foodLevel);
		});
	});
	// Calculate foodLevel at time interval of 60000.
	describe('setFood', function () {
		it('[setFood] should return 99.', function () {
			clock.tick(60000);
			assert.equal(99, kevin.foodLevel);
		});
	});
	//Calculate playLevel at time interval of 0.
	describe('setPlay', function () {
		it('[setPlay] should return 420.', function () {
			assert.equal(420, kevin.playLevel);
		})
	});
	//Calculate playLevel at time interval of 60000.
	describe('setPlay', function () {
		it('[setPlay] should return 419.', function () {
			clock.tick(60000);
			assert.equal(419, kevin.playLevel);
		})
	});

	describe('setSleep', function () {
		it('[setSleep] should return 69.', function () {
			assert.equal(69, kevin.sleepLevel);
		})
	});

	describe('setSleep', function () {
		it('[setSleep] should return 68.', function () {
			clock.tick(60000);
			assert.equal(68, kevin.sleepLevel);
		})
	});

	describe('itDed', function () {
		it('[itDed] should return true.', function () {
			clock.tick(6000000);
			assert.isTrue(kevin.itDed());
		})
	});

	describe('itDying', function () {
		it('[itDying] should return true.', function () {
			clock.tick(6000000);
			assert.isTrue(kevin.itDying());
		});
	});

	describe('foodSnack', function () {
		it("[foodSnack] should increase kevin's foodLevel by 10.", function () {
			kevin.foodSnack(1);
			assert.equal(110, kevin.foodLevel);
		});
	});

});
