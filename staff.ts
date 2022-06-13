import {Cadres} from "./cadres";

export class Staff extends Cadres{
    private _job: string;


    constructor(name: string, birthday: string, address: string, job: string) {
        super(name, birthday, address);
        this._job = job;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }
}
