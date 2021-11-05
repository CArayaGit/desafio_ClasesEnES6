export class Impuestos {
    constructor (montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    set setMonto(montoBrutoAnual) {
        this._montoBrutoAnual = montoBrutoAnual;
    }

    get getMonto() {
        return this._montoBrutoAnual;
    }

    set setDeduccion(deducciones) {
        this._deducciones = deducciones;
    }

    get getDeduccion() {
        return this._deducciones;
    }
};