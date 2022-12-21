export interface ClientModel {
    codigoUnico?: string,
    ruc?: string,
    razonSocial?: string,
    typeDocumentIdenty?: number,
    identificationNumber?: string,
    businessName?: string,
    phone?: string,
    tradeName?: string,
    typeCurrency?: number,
    businessGroup?: number,
    economicSector?: number,
    holding?: string,
    segmentation?: number,
    authorizeFedexAccount?: boolean,
    migrateSap?: boolean,
    status?: boolean,
    fedexAccount?: string
}