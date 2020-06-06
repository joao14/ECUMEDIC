export interface Chronology {
    id: string;
    calendarType: string;
}

export interface Ages {
    years: number;
    months: number;
    days: number;
    chronology: Chronology;
    zero: boolean;
    negative: boolean;
    units: string[];
}

export class Paciente {
    profession: string;
    lastconsid: number;
    gender: string;
    mme: number;
    mcadera: number;
    icc: number;
    birth: number;
    photo: string;
    weight: number;
    dateregi: number;
    nextdate: number;
    pgc: number;
    estacivi: string;
    lastname: string;
    mcintura: number;
    size: number;
    name: string;
    ages: Ages;
    email: string;
    imc: number;
    dni: string;
    /**info tabla alimentos */
    recoacl: string;
    recoazu: string;
    recocar: string;
    recofru: string;
    recogra: string;
    recolac: string;
    recover: string;
    /**info plan alimentos */
    planreco: string;
    planacfi: string;
    planagua: string;
}
