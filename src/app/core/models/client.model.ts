export interface ClientModel {

    id?: number;
    type_param?: number;
    identity_document_number?: string;
    segmentation_code_param?: number;
    document_type_id?: number;
    geographic_location_id?: number;
    business_name?: string;
    industry_code_param?: number;
    telephone?: string;
    fedex_account?: string;
    fedex_authorized_account?: boolean;
    fedex_authorization_date?: string;
    commercial_name?: string;
    comment?: string;
    currency_type?: number;
    corporate_group_param?: number;
    holding_param?: number;
    sap_id?: string;
    status?: boolean;
    sap_state_param?: number;
    validate_status_param?: number;
    creation_date?: string;
    creation_author?: number;
    modification_date?: string;
    modification_author?: number;

    //Descripciones tabla Parametro
    descripcionGrupoEmpresarial?: string;
    descripcionCodigoSector?: string;
    descripcionTipoMoneda?: string;
    descripcionTipoDocumentoIdentidad?: string;
    descripcionHolding?: string;
    descripcionCodigoSegmentacion?: string;

}