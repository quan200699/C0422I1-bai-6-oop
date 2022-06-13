"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
const cadres_1 = require("./cadres");
class Staff extends cadres_1.Cadres {
    constructor(name, birthday, address, job) {
        super(name, birthday, address);
        this._job = job;
    }
    get job() {
        return this._job;
    }
    set job(value) {
        this._job = value;
    }
}
exports.Staff = Staff;
