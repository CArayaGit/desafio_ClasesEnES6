export class Cliente {
    constructor(nombreCliente, impuesto){
        this._nombreCliente = nombreCliente;
        this._impuesto = impuesto;
    }

    set setNombre(nombreCliente){
        this._nombreCliente = nombreCliente;
    }

    get getNombre(){
        return this._nombreCliente;
    }

    CalcularImpuesto(){
        return ((this._impuesto.getMonto - this._impuesto.getDeduccion) * 0.21 );
    }
};



