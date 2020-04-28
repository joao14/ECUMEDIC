import { HeaderApp } from './header-app';
export interface Data {
    table: Map<string, boolean>;
}

export class TablealimResponse {
    headerApp: HeaderApp;
    data: Data;
}
