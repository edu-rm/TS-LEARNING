
interface Addresses {
    rua: string;
    numero: number;
}

interface NewUserData {
    nome?: string;
    email: string;
    senha: string;
    addresses: Array<string |Addresses>
}

export default function userCreate({ nome, email, senha }: NewUserData) {
    const user = {
        nome,
        email,
        senha
    }

    return user;
}