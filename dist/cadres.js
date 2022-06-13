"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cadres = void 0;
class Cadres {
    constructor(name, birthday, address) {
        this._name = name;
        this._birthday = birthday;
        this._address = address;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(value) {
        this._birthday = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
}
exports.Cadres = Cadres;
