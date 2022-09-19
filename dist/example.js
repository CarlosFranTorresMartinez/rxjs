"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJS v6+
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
//emit value every 1s
const source = (0, rxjs_1.interval)(1000);
//sample last emitted value from source every 2s
const example = source.pipe((0, operators_1.sample)((0, rxjs_1.interval)(2000)));
//output: 2..4..6..8..
const subscribe = example.subscribe(val => console.log(val));
//# sourceMappingURL=example.js.map