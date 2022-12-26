export interface ClientModel {

    id?: number;
    tipoCliente_parametro?: number;
    numeroDocumentoIdentidad?: string;
    codigoSegmentacion_parametro?: number;
    tipoDocumentoIdentidad?: number;
    idUbicacionGeografica?: number;
    razonSocial?: string;
    codigoSector_parametro?: number;
    telefono?: string;
    cuentaFedex?: string;
    cuentaAutorizadaFedex?: boolean;
    fechaAutorizacionFedex?: string;
    nombreComercial?: string;
    comentario?: string;
    tipoMoneda_parametro?: number;
    grupoEmpresarial_parametro?: number;
    holding_parametro?: number;
    codigoSap?: string;
    estadoCliente?: boolean;
    estadoSap_parametro?: number;
    estadoSR_parametro?: number;
    fechaCreacion?: string;
    autorCreacion?: number;
    fechaModificacion?: string;
    autorModificacion?: number;

    //Descripciones tabla Parametro
    descripcionGrupoEmpresarial?: string;
    descripcionCodigoSector?: string;
    descripcionTipoMoneda?: string;
    descripcionTipoDocumentoIdentidad?: string;
    descripcionHolding?: string;
    descripcionCodigoSegmentacion?: string;

}