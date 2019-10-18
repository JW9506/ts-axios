var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
console.log();
console.log();
console.log();
console.log();
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var config = { color: "black", width: 22 };
var mySquare = createSquare(config);
console.log(mySquare);
console.log();
console.log();
console.log();
var p1 = { x: 10, y: 20 };
console.log(p1);
var a = [1, 2, 3, 4];
var ro = a;
a[0] = 99;
console.log(ro);
var mySearch = function (src, sub) {
    return src.search(sub) > -1;
};
console.log(mySearch("abc", "aa"));
var myArray = ["bob", "fred"];
console.log(myArray[1]);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
// interface notOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }
console.log();
console.log();
console.log();
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick toc");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 6, 30);
digital.tick();
var Analog = createClock(AnalogClock, 6, 30);
Analog.tick();
//# sourceMappingURL=index.js.map