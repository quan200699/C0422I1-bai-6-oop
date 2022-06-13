"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const cadres_1 = require("./cadres");
class Employee extends cadres_1.Cadres {
    constructor(name, birthday, address, level) {
        super(name, birthday, address);
        this._level = level;
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._level = value;
    }
}
exports.Employee = Employee;
