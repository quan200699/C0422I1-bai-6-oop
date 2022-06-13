export class Cadres {
    private _name: string;
    private _birthday: string;
    private _address: string;


    constructor(name: string, birthday: string, address: string) {
        this._name = name;
        this._birthday = birthday;
        this._address = address;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get birthday(): string {
        return this._birthday;
    }

    set birthday(value: string) {
        this._birthday = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
}
