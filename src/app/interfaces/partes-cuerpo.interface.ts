export interface PartesCuerpoInterface {
    cabezaFrente:ParteCuerpoInterface[],
    cabezaEspalda:ParteCuerpoInterface[],
    brazoIzqFrente:ParteCuerpoInterface[],
    brazoIzqEspalda:ParteCuerpoInterface[],
    brazoDerFrente:ParteCuerpoInterface[],
    brazoDerEspalda:ParteCuerpoInterface[],
    pieIzqFrente:ParteCuerpoInterface[],
    pieIzqEspalda:ParteCuerpoInterface[],
    pieDerFrente:ParteCuerpoInterface[],
    pieDerEspalda:ParteCuerpoInterface[],
    piernaIzqFrente:ParteCuerpoInterface[],
    piernaIzqEspalda:ParteCuerpoInterface[],
    piernaDerFrente:ParteCuerpoInterface[],
    piernaDerEspalda:ParteCuerpoInterface[],
    torsoFrente:ParteCuerpoInterface[],
    torsoEspalda:ParteCuerpoInterface[]

}
interface ParteCuerpoInterface {
    id: number,
    nombre: string
}