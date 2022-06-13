"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engineer = void 0;
const cadres_1 = require("./cadres");
class Engineer extends cadres_1.Cadres {
    constructor(name, birthday, address, specialize) {
        super(name, birthday, address);
        this._specialize = specialize;
    }
    get specialize() {
        return this._specialize;
    }
    set specialize(value) {
        this._specialize = value;
    }
}
exports.Engineer = Engineer;
