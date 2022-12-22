export interface ClientModel {
    codigoUnico?: string,
    ruc?: string,
    razonSocial?: string,
    typeDocumentIdentity?: number,
    numberDocumentIdentity?: string,
    companyName?: string,
    phone?: string,
    tradeName?: string,
    typeCurrency?: number,
    businessGroup?: number,
    codeEconomicSector?: number,
    holding?: number,
    codeSegmentation?: number,
    accountAuthorizeFedex?: boolean,
    migrateSap?: boolean,
    statusClient?: boolean,
    accountFedex?: string
}