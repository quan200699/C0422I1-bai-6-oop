"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadresManagement = void 0;
class CadresManagement {
    addNewCadres(cadres) {
        CadresManagement.cadresList.push(cadres);
    }
    getAllCadres() {
        return CadresManagement.cadresList;
    }
    updateCadresByName(name, newCadres) {
        let index = this.findCadresByName(name);
        if (index !== -1) {
            CadresManagement.cadresList[index] = newCadres;
            return true;
        }
        return false;
    }
    deleteCadresByName(name) {
        let index = this.findCadresByName(name);
        if (index !== -1) {
            CadresManagement.cadresList.splice(index, 1);
            return true;
        }
        return false;
    }
    findCadresByName(name) {
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
exports.CadresManagement = CadresManagement;
CadresManagement.cadresList = [];
