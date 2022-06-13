import {Cadres} from "./cadres";

export class Employee extends Cadres{
    private _level: string;


    constructor(name: string, birthday: string, address: string, level: string) {
        super(name, birthday, address);
        this._level = level;
    }


    get level(): string {
        return this._level;
    }

    set level(value: string) {
        this._level = value;
    }
}
