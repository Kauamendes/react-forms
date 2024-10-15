import axios from 'axios';
import { Usuario } from '../interfaces/usuario';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
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