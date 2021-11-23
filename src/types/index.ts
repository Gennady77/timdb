export type PersonData = {
    name: string;
    surname: string;
    patronymic: string;
};

export type LaptopData = {
    model: string;
    manufacturerCode: string;
    os: string;
    gamingLaptop: boolean;
    releaseYear: number;
}

export interface CommonState {
    status: string;
    error: any;
}

export interface PersonsState extends CommonState {
    persons: PersonData[];
}

export interface LaptopsState extends CommonState {
    data: LaptopData[]
}

export interface LaptopModalState {
    shown: boolean;
}

export interface AppState {
    persons: PersonsState;
    laptops: LaptopsState;
    laptopModal: LaptopModalState;
}

export interface Response<T> {
    data: T;
}

export enum ThunkStatus {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEEDED = 'succeeded',
    ERROR = 'error'
}
