import { Paciente } from './paciente';
import { HeaderApp } from './header-app';

export interface DataLogin {
    paciente: Paciente;
    token: string;
}

export class LoginResponse {
    headerApp: HeaderApp;
    data: DataLogin;
}
