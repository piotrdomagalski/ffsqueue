"use strict";

function ArrayQueue(size) {
	if (size < 0) {
		throw Error('Invalid queue size');
	}
	this.queueSize = size;
	this.data = new Array(this.queueSize);
}

ArrayQueue.prototype = {
	enqueue: function (value) {
		if (this.data.length >= this.queueSize) {
			return -1;
		}

		return this.data.push(value);
	},

	dequeue: function () {
		return this.data.pop();
	},

	peek: function () {
		return this.data[0];
	},

	get length() {
		return this.data.length;
	},

	get size() {
		return this.queueSize;
	},

	clear: function () {
		this.data = new Array(this.queueSize);
	}
};
