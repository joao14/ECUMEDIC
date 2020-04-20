import { HeaderApp } from './header-app';

export class SeriesResponse {
    headerApp: HeaderApp;
    data: Data;
}

export class Data {
    tallas: { [key: string]: number };
    imcs: { [key: string]: number };
    pesos: { [key: string]: number };
    pcgs: { [key: string]: number };
    mmes: { [key: string]: number };
}