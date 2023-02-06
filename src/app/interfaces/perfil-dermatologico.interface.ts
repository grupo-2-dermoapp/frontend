import { IDValueInterface } from "./id-value.interface";

export interface PerfilDermatologicoFormInterface {
    colorOjos: string,
    colorCabello: string,
    colorPiel: string,
    cantidadPecas: string,
    exposicionAlSol: string,
    bronceadoConElSol: string,
    cantidadBronceado: string,
    sensibilidadDeCaraConSol: string,
    frecuenciaBronceo: string,
    ultimaExposicion: string;
}

export interface PerfilDermatologicoInterface {
    colorOjos: IDValueInterface[],
    colorCabello: IDValueInterface[],
    colorPiel: IDValueInterface[],
    cantidadPecas: IDValueInterface[],
    exposicionAlSol: IDValueInterface[],
    bronceadoConElSol: IDValueInterface[],
    cantidadBronceado: IDValueInterface[],
    sensibilidadDeCaraConSol: IDValueInterface[],
    frecuenciaBronceo: IDValueInterface[],
    ultimaExposicion: IDValueInterface[]
}

export interface PerfilDermatologicoBackendInterface {
    eyes_color: string,
    hair_color: string,
    skin_color: string,
    freckles: string,
    skin_stay_in_the_sun: string,
    turn_brown: string,
    how_brown: string,
    face_sensitive: string,
    how_often_tan: string,
    artificial_time_expose: string;
    
}