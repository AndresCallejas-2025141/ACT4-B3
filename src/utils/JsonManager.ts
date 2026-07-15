import { writeFile } from "fs/promises";
import { Usuario } from "../models/Usuario.js";

export class JsonManager {

    public async guardarUsuarios(usuarios: Usuario[]): Promise<void> {

        const contenido = JSON.stringify(usuarios, null, 4);

        await writeFile(
            "./data/usuarios.json",
            contenido,
            "utf-8"
        );

        console.log("Archivo usuarios.json guardado correctamente.");

    }

}