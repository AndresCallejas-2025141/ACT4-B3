import { ApiService } from "./services/ApiService";
import { JsonManager } from "./utils/JsonManager";
import { Timer } from "./utils/Timer.js";

async function main(): Promise<void> {

    const apiService = new ApiService();
    const jsonManager = new JsonManager();
    const timer = new Timer();

    try {

        console.log("=======================================");
        console.log("   CONSUMO DE API PÚBLICA");
        console.log("=======================================");

        timer.iniciar();

        console.log("Consumiendo API...");

        const usuarios = await apiService.obtenerUsuarios();

        console.log(`Se obtuvieron ${usuarios.length} usuarios.\n`);

        console.log("Guardando archivo JSON...");

        await jsonManager.guardarUsuarios(usuarios);

        const tiempo = timer.finalizar();

        console.log("\=======================================");
        console.log("Proceso finalizado correctamente.");
        console.log(`Tiempo de ejecución: ${tiempo.toFixed(2)} ms`);
        console.log("=======================================");

    } catch (error) {
    console.error(error);
}

}

main();