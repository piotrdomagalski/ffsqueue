"use strict";

function ArrayQueue(size) {
	if (size < 0) {
		throw Error('Invalid queue size');
	}
	this.queueSize = size;
	this.data = new Array(this.queueSize);
}

ArraySizeQueue.prototype = {
	enqueue: function (value) {
		if (this.data.length >= this.queueSize) {
			return -1;
		}

		this.data.push(value);
		return this.data.length;
	},

	dequeue: function () {
		if (this.data.length <= 0) {
			return undefined;
		}

		return this.data.pop();
	},

	peek: function () {
		if (this.data.length <= 0) {
			return undefined;
		}

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
