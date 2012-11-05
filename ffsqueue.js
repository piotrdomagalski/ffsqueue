"use strict";

function FastFixedSizeQueue(size) {
	if (size < 0) {
		throw Error('Invalid queue size');
	}
	this.headIndex = 0;
	this.queueLength = 0;
	this.queueSize = size;
	this.data = new Array(this.queueSize);
}

FastFixedSizeQueue.prototype = {
	enqueue: function (value) {
		if (this.queueLength >= this.queueSize) {
			return -1;
		}

		this.data[(this.headIndex + this.queueLength) % this.queueSize] = value;
		this.queueLength += 1;

		return this.queueLength;
	},

	dequeue: function () {
		var result;

		if (this.queueLength <= 0) {
			return undefined;
		}

		result = this.data[this.headIndex];
		//this.data[this.headIndex] = undefined;

		this.headIndex = (this.headIndex + 1) % this.queueSize;
		this.queueLength -= 1;

		return result;
	},

	peek: function () {
		if (this.queueLength <= 0) {
			return undefined;
		}

		return this.data[this.headIndex];
	},

	get length() {
		return this.queueLength;
	},

	get size() {
		return this.queueSize;
	},

	clear: function () {
		this.headIndex = 0;
		this.queueLength = 0;
		this.data = new Array(this.queueSize);
	}
};
