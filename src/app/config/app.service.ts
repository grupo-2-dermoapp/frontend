import { Injectable, } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IDValueInterface } from '../interfaces/id-value.interface';
import { PartesCuerpoInterface } from '../interfaces/partes-cuerpo.interface';
import { PerfilDermatologicoInterface } from '../interfaces/perfil-dermatologico.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isPhone=false;

  constructor(private platform:Platform) {

    if(this.platform.is("mobile") || this.platform.is('mobileweb')
    || window.navigator.userAgent== 'Mobile') {
      this.isPhone = true;
    } else {
      this.isPhone = false;
    }
    console.log("Is Phone: ",this.isPhone);
  }

  get fitzpatrick(): PerfilDermatologicoInterface {
    return {
      colorOjos :[
        {id:'LIGHT_BLUE_GREEN_GREY',value:'Azul claro o gris verde'},
        {id:'BLUE_GREEN_GREY',value:'Azul, verde, gris'},
        {id:'DARK_BLUE_GREEN_LIGHT_BROWN',value:'Azul oscuro o verde marrón (avellana)'},
        {id:'DARK_BROWN',value:'Marron oscuro'},
        {id:'BROWISH_BLACK',value:'Negro pardusco'}],
        colorCabello :[
        {id:'RED',value:'Rojo'},
        {id:'BLONDIE',value:'Rubio'},
        {id:'CHESNUT_DARK_BLONDIE',value:'Castaño u oscuro rubio'},
        {id:'DARK_BROWN',value:'Castaño oscuro'},
        {id:'BLACK',value:'Negro'}],
        colorPiel :[
        {id:'PINK',value:'Rosada'},
        {id:'VERY_PALE',value:'Muy pálida'},
        {id:'LIGHT_BROWN_OLIVE',value:'Castaño claro o aceituna'},
        {id:'BROWN',value:'Café'},
        {id:'DARK_BROWN',value:'Café oscuro'}],
        cantidadPecas :[
        {id:'MANY',value:'Muchas'},
        {id:'SEVERAL',value:'Varias'},
        {id:'FEW',value:'Pocas'},
        {id:'RARE',value:'Raramente'},
        {id:'NONE',value:'Ninguna'}],
        exposicionAlSol :[
        {id:'SEVERE_BURNS',value:'Quemaduras severas, abrasador, peladura'},
        {id:'MODERATE_BURNS',value:'Quemaduras moderadas, abrasador, peladura'},
        {id:'SOMETIME_BURNS',value:'A veces se quema seguido por peladura'},
        {id:'RARE_BURNS',value:'Quemaduras raras'},
        {id:'NO_BURNS',value:'Sin quemaduras'}],
        bronceadoConElSol :[
        {id:'NEVER',value:'Nunca'},
        {id:'RARELY',value:'Raramente'},
        {id:'SOMETHIMES',value:'Algunas veces'},
        {id:'OFTEN',value:'Con frecuencia'},
        {id:'ALWAYS',value:'Siempre'}],
        cantidadBronceado :[
        {id:'HARDLY',value:'Difícilmente o no en absoluto'},
        {id:'LIGHT_TAN',value:'Bronceado suave'},
        {id:'MEDIUM_TAN',value:'Bronceado medio'},
        {id:'DARK_TAN',value:'Bronceado oscuro'},
        {id:'VERY_DARK_TAN',value:'Bronceado muy oscura'}],
        sensibilidadDeCaraConSol :[
        {id:'VERY_SENSITIVE',value:'Muy sensible'},
        {id:'SENSITIVE',value:'Sensible'},
        {id:'MILDLY_SENSITIVE',value:'Levemente sensible'},
        {id:'RESISTANT',value:'Resistente'},
        {id:'VERY_RESISTANT',value:'Muy resistente'}],
        frecuenciaBronceo :[
        {id:'NEVER',value:'Nunca'},
        {id:'RARELY',value:'Raramente'},
        {id:'SOMETIMES',value:'Algunas veces'},
        {id:'OFTEN',value:'Seguido'},
        {id:'ALWAYS',value:'Siempre'}],
        ultimaExposicion :[
        {id:'MORE_THREE_MONTHS',value:'Hace más de 3 meses'},
        {id:'LAST_TWO_THREE_MONTHS',value:'En los últimos 2-3 meses'},
        {id:'LAST_ONE_TWO_MONTS',value:'En los últimos 1-2 meses'},
        {id:'LAST_WEEK',value:'En la semana pasada'},
        {id:'LAST_DAY',value:'En el último día'}]
    }
  }

  get consulta() {
    return {
      tiposDeLesion :[
        {id:'TAINT',value:'Mácula'},
        {id:'PAPULE',value:'Pápula'},
        {id:'PATCH',value:'Parche'},
        {id:'PLATE',value:'Placa'},
        {id:'NODULE',value:'Nódulo'},
        {id:'BLISTER',value:'Ampolla'},
        {id:'SORE',value:'Úlcera'},
        {id:'GALLBLADDER',value:'Vesícula'}],
      formasDeLesiones :[
        {id:'RING',value:'Anillo'},
        {id:'DOME',value:'Domo'},
        {id:'OVAL',value:'Ovalada'},
        {id:'ROUND',value:'Redonda'},
        {id:'UNDEFINED',value:'Indefinida'},
        {id:'ROLLED_UP',value:'Enrollada'}],
      numeroDeLesiones :[
        {id:'LONELY',value:'Solitaria'},
        {id:'MULTIPLE',value:'Múltiple'},
        {id:'RECURRENT',value:'Recurrente'},
        {id:'DISSEMINATED',value:'Diseminada'}],
      distribucionDeLaLesion :[
        {id:'ASYMMETRIC',value:'Asimétrica'},
        {id:'CONFLUENT',value:'Confluente'},
        {id:'SYMMETRIC',value:'Simétrica'},
        {id:'SCATTERED',value:'Esparcida'}]
    }
  }

  get partesCuerpo():PartesCuerpoInterface{
    return {
      cabezaFrente: [
      {
        id:'FOREHEAD',
        value:'Frente'
      },
      {
        id:'EYEBROWS',
        value:'Cejas'
      },
      {
        id:'LEFT_EYEBROW',
        value:'Ceja izquierda'
      },
      {
        id:'RIGHT_EYEBROW',
        value:'Ceja derecha'
      },
      {
        id:'EYES',
        value:'Ojos'
      },
      {
        id:'LEFT_EYE',
        value:'Ojo izquierdo'
      },
      {
        id:'RIGHT_EYE',
        value:'Ojo derecho'
      },
      {
        id:'CHEEKBONES',
        value:'Pomulos'
      },
      {
        id:'LEFT_CHEEKBONE',
        value:'Polumo izquierdo'
      },
      {
        id:'RIGHT_CHEEKBONE',
        value:'Polumo derecho'
      },
      {
        id:'CHEEKS',
        value:'Cachetes'
      },
      {
        id:'LEFT_CHEEK',
        value:'Cachete izquierdo'
      },
      {
        id:'RIGHT_CHEEK',
        value:'Cachete derecho'
      },
      {
        id:'NOSE',
        value:'Nariz'
      },
      {
        id:'LIPS',
        value:'Labios'
      },
      {
        id:'SUPERIOR_LIP',
        value:'Labio superior'
      },
      {
        id:'LOWER_LIP',
        value:'Labio inferior'
      },
      {
        id:'CHIN',
        value:'Menton'
      },
      {
        id:'EARS',
        value:'Orejas'
      },
      {
        id:'LEFT_EAR',
        value:'Oreja izquierda'
      },
      {
        id:'RIGHT_EAR',
        value:'Oreja derecha'
      },
      {
        id:'FRONT_NECK',
        value:'Cuello'
      }
    ],
    cabezaEspalda:[
      {
        id:'BACK_NECK',
        value:'Cuello'
      },
      {
        id:'NAPE',
        value:'Nuca'
      },
      {
        id:'SCALP',
        value:'Cuero cabelludo'
      }
    ],
    brazoIzqFrente:[
      {
        id:'FRONT_LEFT_SHOULDER',
        value:'Hombro'
      },
      {
        id:'FRONT_LEFT_BICEPS',
        value:'Biceps'
      },
      {
        id:'FRONT_LEFT_FOREARM',
        value:'Antebrazo'
      }
    ],
    brazoIzqEspalda:[
      {
        id:'BACK_LEFT_SHOULDER',
        value:'Hombro'
      },
      {
        id:'BACK_LEFT_BICEPS',
        value:'TRICEPS'
      },
      {
        id:'BACK_LEFT_ELBOW',
        value:'Codo'
      },
      {
        id:'BACK_LEFT_FOREARM',
        value:'Antebrazo'
      }
    ],
    brazoDerFrente:[
      {
        id:'FRONT_RIGHT_SHOULDER',
        value:'Hombro'
      },
      {
        id:'FRONT_RIGHT_BICEPS',
        value:'Biceps'
      },
      {
        id:'FRONT_RIGHT_FOREARM',
        value:'Antebrazo'
      }
    ],
    brazoDerEspalda:[
      {
        id:'BACK_RIGHT_SHOULDER',
        value:'Hombro'
      },
      {
        id:'BACK_RIGHT_BICEPS',
        value:'TRICEPS'
      },
      {
        id:'BACK_RIGHT_ELBOW',
        value:'Codo'
      },
      {
        id:'BACK_RIGHT_FOREARM',
        value:'Antebrazo'
      }
    ],
    pieIzqFrente:[
      {
        id:'LEFT_ANCKLE',
        value:'Tobillo'
      },
      {
        id:'LEFT_INSTEP',
        value:'Empeine'
      },
      {
        id:'LEFT_TOES',
        value:'Dedos'
      }
    ],
    pieIzqEspalda:[
      {
        id:'LEFT_HEEL',
        value:'Talon'
      },
      {
        id:'LEFT_SOLE_OF_FOOT',
        value:'Planta'
      }
    ],
    pieDerFrente:[
      {
        id:'RIGHT_ANCKLE',
        value:'Tobillo'
      },
      {
        id:'RIGHT_INSTEP',
        value:'Empeine'
      },
      {
        id:'RIGHT_TOES',
        value:'Dedos'
      }
    ],
    pieDerEspalda:[
      {
        id:'RIGHT_HEEL',
        value:'Talon'
      },
      {
        id:'RIGHT_SOLE_OF_FOOT',
        value:'Planta'
      }
    ],
    piernaIzqFrente:[
      {
        id:'FRONT_LEFT_THIGH',
        value:'Muslo'
      },
      {
        id:'FRONT_LEFT_KNEE',
        value:'Rodilla'
      },
      {
        id:'FRONT_LEFT_CALF',
        value:'Pantorrilla'
      }
    ],
    piernaIzqEspalda:[
      {
        id:'BACK_LEFT_THIGH',
        value:'Muslo'
      },
      {
        id:'BACK_LEFT_GASTROCNEMIUS',
        value:'Gemelo'
      }
    ],
    piernaDerFrente:[
      {
        id:'FRONT_RIGHT_THIGH',
        value:'Muslo'
      },
      {
        id:'FRONT_RIGHT_KNEE',
        value:'Rodilla'
      },
      {
        id:'FRONT_RIGHT_CALF',
        value:'Pantorrilla'
      }
    ],
    piernaDerEspalda:[
      {
        id:'BACK_RIGHT_THIGH',
        value:'Muslo'
      },
      {
        id:'BACK_RIGHT_GASTROCNEMIUS',
        value:'Gemelo'
      }
    ],
    torsoFrente: [
      {
        id:'CLAVICLE',
        value:"Clavícula"
      },
      {
        id:'CHEST',
        value:'Pecho'
      },
      {
        id:'LEFT_PECTORAL',
        value:'Pectoral izquierdo'
      },
      {
        id:'RIGHT_PECTORAL',
        value:'Pectoral derecho'
      },
      {
        id:'ABDOMEN',
        value:'Abdomen'
      },
      {
        id:'RIGHT_LATERAL_ABDOMEN',
        value:'Admonen lateral derecho'
      },
      {
        id:'LEFT_LATERAL_ABDOMEN',
        value:'Admonen lateral izquierdo'
      },
      {
        id:'PELVIC_AREA',
        value:'Zona pelvica'
      },
      {
        id:'GENITALS',
        value:'Genitales'
      }
    ],
    torsoEspalda:[
      {
        id:'HIGH_BACK',
        value:'Espalda alta'
      },
      {
        id:'LEFT_HIGH_BACK',
        value:'Espalda alta izquierda'
      },
      {
        id:'RIGHT_HIGH_BACK',
        value:'Espalda alta derecha'
      },
      {
        id:'MEDIUM_BACK',
        value:'Espalda media'
      },
      {
        id:'LEFT_MEDIUM_BACK',
        value:'Espalda media izquierda'
      },
      {
        id:'RIGHT_MEDIUM_BACK',
        value:'Espalda media derecha'
      },
      {
        id:'LOWER_BACK',
        value:'Espalda baja'
      },
      {
        id:'LEFT_LOWER_BACK',
        value:'Espalda baja izquierda'
      },
      {
        id:'RIGHT_LOWER_BACK',
        value:'Espalda baja derecha'
      },
      {
        id:'BUTTOCKS',
        value:'Gluteos'
      },
      {
        id:'LEFT_GLUTEUS',
        value:'Gluteo izquierdo'
      },
      {
        id:'RIGHT_GLUTEUS',
        value:'Gluteo derecho'
      }
    ]
    }
  }

  obtenerConsultaPorId(nombreConsulta:string,id:string){
    const consulta = this.consulta[nombreConsulta as keyof typeof this.consulta]
    return consulta.find((obj:any)=>obj.id===id);
  }

  obtenerParteCuerpoPorId(id:string){
    let parteCuerpo:IDValueInterface | undefined;
    Object.keys(this.partesCuerpo)
    .forEach((parte)=>{
      const partes = this.partesCuerpo[parte as keyof typeof this.partesCuerpo]
      parteCuerpo=partes.find(p=>p.id===id);
    });
    return parteCuerpo;
  }
  
  

}
