import {Cadres} from "./cadres";

export class Engineer extends Cadres {
    private _specialize: string;


    constructor(name: string, birthday: string, address: string, specialize: string) {
        super(name, birthday, address);
        this._specialize = specialize;
    }


    get specialize(): string {
        return this._specialize;
    }

    set specialize(value: string) {
        this._specialize = value;
    }
}
