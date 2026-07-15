export class Timer {

    private inicio: number = 0;

    public iniciar(): void {
        this.inicio = performance.now();
    }

    public finalizar(): number {
        const fin = performance.now();
        return fin - this.inicio;
    }

}