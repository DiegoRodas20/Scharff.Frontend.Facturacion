export interface ContactModel {

    id?: number;
    estado?: boolean | null;
    idCliente?: number;
    tipoContacto_parametro?: number;
    areaContacto_parametro?: number;
    nombreCompleto?: string | null;
    comentario?: string | null;
    fechaCreacion?: string | null;
    autorCreacion?: number;
    fechaActualizacion?: string | null;
    autorActualizacion?: number;
    fechaInicio?: string | null;
    fechaFin?: string | null;

}