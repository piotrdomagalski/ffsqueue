ffsqueue - Fast Fixed Size Queue
================================

Fast and clean implementation of a fixed size queue in JavaScript. I created it as I wanted to optimize my
code which was heavily using queue based on `Array` and its `push()` and `unshift()` methods.

Is it really fast?
------------------

Check it with a sample use case here: <http://jsperf.com/ffsqueue>

Currently, it is faster compared to equivalent use of `Array` in Chromium 22.0 and Opera 12.02 but not in
Firefox 16. The Firefox case still needs to be investigated.

License
-------

This is free and unencumbered software released into the public domain. For more information, please
refer to <http://unlicense.org/>
