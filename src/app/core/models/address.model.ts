export interface AddressModel {

    id: number;
    estado: boolean;
    tipoDireccion_parametro: number;
    idCliente: number;
    idUbigeo: number;
    direccion: string | null;
    codigoPostal: string | null;
    fechaCreacion: string;
    autorCreacion: number;
    fechaModificacion: string;
    autorModificacion: number;
    
}