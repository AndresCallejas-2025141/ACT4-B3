import { Usuario } from "../models/Usuario.js";

export class ApiService {

    private readonly URL =
        "https://jsonplaceholder.typicode.com/users";

    public async obtenerUsuarios(): Promise<Usuario[]> {

        const respuesta = await fetch(this.URL);

        if (!respuesta.ok) {
            throw new Error(
                `Error HTTP: ${respuesta.status} - ${respuesta.statusText}`
            );
        }

        const datos = await respuesta.json();

        const usuarios: Usuario[] = datos.map((usuario: any) => {

            return new Usuario(
                usuario.id,
                usuario.name,
                usuario.username,
                usuario.email
            );

        });

        return usuarios;

    }

}