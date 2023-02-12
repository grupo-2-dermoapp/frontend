export interface ConsultaFormInterface {
    tipoLesion: string;
    formaLesion: string;
    numeroLesiones: string;
    distribucion: string;
    parteDelCuerpo: string;
    parteDelCuerpoId: string;
}

export interface ConsultaBackendInterface {
    type_of_injury: string;
    shape_of_injury: string;
    number_of_injuries: string;
    injury_distribucion: string;
    body_part: string;
    user_id: string;
    type_of_diagnosis: string;
}