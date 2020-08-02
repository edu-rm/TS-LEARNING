import { Request, Response } from "express";

import userCreate from './services/UserCreate';

export function helloWorld(request : Request, response : Response) {
    const user = userCreate({
        email: 'eduardo@e.com',
        senha: '123456',
        addresses: [
            "Espanha",
            {
                rua: 'Espanha',
                numero: 145
            },
            {
                rua: 'Colombia',
                numero: 145
            },
        ]
    });
    return response.json({message : 'Hello world'});
}