export interface ContactModel {

    id?: number;
    status?: boolean;
    client_id?: number;
    type_param?: number;
    area_param?: number;
    full_name?: string;
    comment?: string;
    creation_date?: string;
    creation_author?: number;
    modification_date?: string;
    modification_author?: number;
    start_date?: string;
    end_date?: string;

}

export interface RegisterContact extends ContactModel {
    phones_contact: RegisterPhoneContactModel[];
    emails_contact: RegisterEmailContactModel[];
}

export interface RegisterPhoneContactModel {
    phone?: string;
}

export interface RegisterEmailContactModel {
    email?: string;
}