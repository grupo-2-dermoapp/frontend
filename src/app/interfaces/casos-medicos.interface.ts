import { IDValueInterface } from "./id-value.interface";
import { PaginatorInterface, ResponseInterface } from "./response.interface";

export interface CasosMedicosInterface {
    uuid: string,
    type_of_diagnosis: string,
    number_of_injuries: string,
    injury_distribucion: string,
    shape_of_injury: string,
    body_part: string,
    type_of_injury: string,
    patient:{
        name:string;
    };
}

export interface CasosMedicoResponseInterface extends ResponseInterface,PaginatorInterface {
    medical_cases:CasosMedicosInterface[];
}

export interface CasosMedicosTableInterface {
    casoMedicoId:string;
    tipoDeDiagnostico:string;
    tipoLesion: IDValueInterface | undefined;
    formaLesion: IDValueInterface| undefined;
    numeroLesiones: IDValueInterface| undefined;
    distribucion: IDValueInterface| undefined;
    parteDelCuerpo: string| undefined;
    paciente:{
        nombre:string;
    }
}



