import {Cadres} from "./cadres";

export class CadresManagement {
    private static cadresList: Cadres[] = [];

    addNewCadres(cadres: Cadres): void {
        CadresManagement.cadresList.push(cadres);
    }

    getAllCadres(): Cadres[] {
        return CadresManagement.cadresList;
    }

    updateCadresByName(name: string, newCadres: Cadres): boolean {
        let index = this.findCadresByName(name);
        if (index !== -1) {
            CadresManagement.cadresList[index] = newCadres;
            return true;
        }
        return false;
    }

    deleteCadresByName(name: string): boolean {
        let index = this.findCadresByName(name);
        if (index !== -1) {
            CadresManagement.cadresList.splice(index, 1);
            return true;
        }
        return false;
    }

    findCadresByName(name: string) {
        let index = -1;
        for (let i = 0; i < CadresManagement.cadresList.length; i++) {
            if (name === CadresManagement.cadresList[i].name) {
                index = i;
                break;
            }
        }
        return index;
    }
}
