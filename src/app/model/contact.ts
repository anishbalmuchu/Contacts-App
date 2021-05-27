export interface IContact {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
}

export interface ITableContact {
    serial: string;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
    del: string;
}

export interface INewContact {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
}

export interface IStatus {
    value: string;
    viewValue: string;
}
