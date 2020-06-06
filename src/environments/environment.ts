const IP: string = "https://addsoft-tech.com:"
const PUERTO: string = "8443"

const URL = IP + PUERTO
export const environment = {
  production: false,
  addToken: URL + '/em/api/paciente/noti/register',
  updateToken: URL + '/em/api/paciente/noti/change'
};


