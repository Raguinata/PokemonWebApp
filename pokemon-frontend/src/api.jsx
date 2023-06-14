import axios from 'axios';

// Função para obter o token armazenado no localStorage
const getToken = () => {
    return localStorage.getItem('token');
};

// Configuração global do Axios para incluir o token em todas as solicitações
axios.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axios;