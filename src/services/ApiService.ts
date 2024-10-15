import axios from 'axios';
import { Usuario } from '../interfaces/usuario';

const apiClient = axios.create({
    baseURL: 'https://cqdz4sb6-5165.brs.devtunnels.ms/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const salvarUsuario = (dadosUsuario: Usuario) => {
    return apiClient.post('/usuarios', dadosUsuario);
}

export const ListarUsuarios = () => {
    return apiClient.get('/usuarios');
}