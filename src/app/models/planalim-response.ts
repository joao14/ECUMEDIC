import { HeaderApp } from './header-app';

export interface Mm {
    id: number;
    paalOrden: number;
    paalGrupocomi: string;
    paalLacteo: string;
    paalAlmidon: string;
    paalCarnico: string;
    paalFruta: string;
    paalVerdura: string;
    paalGrasa: string;
    paalCanlacteo: string;
    paalcanalmidon: string;
    paalCancarnico: string;
    paalCanfruta: string;
    paalCanverdura: string;
    paalCangrasa: string;
    consId: number;
    paalMedia: string;
    paalCanmmmt: string;
}

export interface Almuerzo {
    id: number;
    paalOrden: number;
    paalGrupocomi: string;
    paalLacteo: string;
    paalAlmidon: string;
    paalCarnico?: any;
    paalFruta?: any;
    paalVerdura: string;
    paalGrasa?: any;
    paalCanlacteo: string;
    paalcanalmidon: string;
    paalCancarnico: string;
    paalCanfruta: string;
    paalCanverdura: string;
    paalCangrasa: string;
    consId: number;
    paalMedia: string;
    paalCanmmmt: string;
}

export interface Mt {
    id: number;
    paalOrden: number;
    paalGrupocomi: string;
    paalLacteo: string;
    paalAlmidon: string;
    paalCarnico: string;
    paalFruta: string;
    paalVerdura: string;
    paalGrasa: string;
    paalCanlacteo: string;
    paalcanalmidon: string;
    paalCancarnico: string;
    paalCanfruta: string;
    paalCanverdura: string;
    paalCangrasa: string;
    consId: number;
    paalMedia: string;
    paalCanmmmt: string;
}

export interface Desayuno {
    id: number;
    paalOrden: number;
    paalGrupocomi: string;
    paalLacteo: string;
    paalAlmidon: string;
    paalCarnico?: any;
    paalFruta?: any;
    paalVerdura: string;
    paalGrasa?: any;
    paalCanlacteo: string;
    paalcanalmidon: string;
    paalCancarnico: string;
    paalCanfruta: string;
    paalCanverdura: string;
    paalCangrasa: string;
    consId: number;
    paalMedia: string;
    paalCanmmmt: string;
}

export interface Cena {
    id: number;
    paalOrden: number;
    paalGrupocomi: string;
    paalLacteo: string;
    paalAlmidon: string;
    paalCarnico: string;
    paalFruta: string;
    paalVerdura: string;
    paalGrasa: string;
    paalCanlacteo: string;
    paalcanalmidon: string;
    paalCancarnico: string;
    paalCanfruta: string;
    paalCanverdura: string;
    paalCangrasa: string;
    consId: number;
    paalMedia: string;
    paalCanmmmt: string;
}

export class Data {
    desayuno: Desayuno[];
    almuerzo: Almuerzo[];
    cena: Cena[];
    mm: Mm[];
    mt: Mt[];
}

export class PlanalimResponse {
    headerApp: HeaderApp;
    data: Data;
}
