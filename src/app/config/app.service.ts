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
        {id:1,value:'Mácula'},
        {id:2,value:'Pápula'},
        {id:3,value:'Parche'},
        {id:4,value:'Placa'},
        {id:5,value:'Nódulo'},
        {id:6,value:'Ampolla'},
        {id:7,value:'Úlcera'},
        {id:8,value:'Vesícula'}],
      formas :[
        {id:1,value:'Anillo'},
        {id:2,value:'Domo'},
        {id:3,value:'Ovalada'},
        {id:4,value:'Redonda'},
        {id:5,value:'Indefinida'},
        {id:6,value:'Enrollada'}],
      numeroDeLesiones :[
        {id:1,value:'Solitaria'},
        {id:2,value:'Múltiple'},
        {id:3,value:'Recurrente'},
        {id:4,value:'Diseminada'}],
      distribucion :[
        {id:1,value:'Asimétrica'},
        {id:2,value:'Confluente'},
        {id:3,value:'Simétrica'},
        {id:4,value:'Esparcida'}]

    }
  }

  get partesCuerpo():PartesCuerpoInterface{
    return {
      cabezaFrente: [
      {
        id:1,
        nombre:'Frente'
      },
      {
        id:2,
        nombre:'Cejas'
      },
      {
        id:3,
        nombre:'Ceja izquierda'
      },
      {
        id:4,
        nombre:'Ceja derecha'
      },
      {
        id:5,
        nombre:'Ojos'
      },
      {
        id:6,
        nombre:'Ojo izquierdo'
      },
      {
        id:7,
        nombre:'Ojo derecho'
      },
      {
        id:8,
        nombre:'Pomulos'
      },
      {
        id:9,
        nombre:'Polumo izquierdo'
      },
      {
        id:10,
        nombre:'Polumo derecho'
      },
      {
        id:11,
        nombre:'Cachetes'
      },
      {
        id:12,
        nombre:'Cachete izquierdo'
      },
      {
        id:13,
        nombre:'Cachete derecho'
      },
      {
        id:14,
        nombre:'Nariz'
      },
      {
        id:15,
        nombre:'Labios'
      },
      {
        id:16,
        nombre:'Labio superior'
      },
      {
        id:17,
        nombre:'Labio inferior'
      },
      {
        id:18,
        nombre:'Menton'
      },
      {
        id:19,
        nombre:'Orejas'
      },
      {
        id:20,
        nombre:'Oreja izquierda'
      },
      {
        id:21,
        nombre:'Oreja derecha'
      },
      {
        id:22,
        nombre:'Cuello'
      }
    ],
    cabezaEspalda:[
      {
        id:23,
        nombre:'Cuello'
      },
      {
        id:24,
        nombre:'Nuca'
      },
      {
        id:25,
        nombre:'Cuero cabelludo'
      },
      {
        id:25,
        nombre:'Orejas'
      },
      {
        id:26,
        nombre:'Oreja izquierda'
      },
      {
        id:27,
        nombre:'Oreja derecha'
      },
    ],
    brazoIzqFrente:[
      {
        id:28,
        nombre:'Hombro'
      },
      {
        id:29,
        nombre:'Biceps'
      },
      {
        id:30,
        nombre:'Antebrazo'
      }
    ],
    brazoIzqEspalda:[
      {
        id:31,
        nombre:'Hombro'
      },
      {
        id:32,
        nombre:'Triceps'
      },
      {
        id:33,
        nombre:'Codo'
      },
      {
        id:34,
        nombre:'Antebrazo'
      }
    ],
    brazoDerFrente:[
      {
        id:35,
        nombre:'Hombro'
      },
      {
        id:36,
        nombre:'Biceps'
      },
      {
        id:37,
        nombre:'Antebrazo'
      }
    ],
    brazoDerEspalda:[
      {
        id:38,
        nombre:'Hombro'
      },
      {
        id:39,
        nombre:'Triceps'
      },
      {
        id:40,
        nombre:'Codo'
      },
      {
        id:41,
        nombre:'Antebrazo'
      }
    ],
    pieIzqFrente:[
      {
        id:42,
        nombre:'Tobillo'
      },
      {
        id:43,
        nombre:'Empeine'
      },
      {
        id:44,
        nombre:'Dedos'
      }
    ],
    pieIzqEspalda:[
      {
        id:45,
        nombre:'Talon'
      },
      {
        id:46,
        nombre:'Planta'
      }
    ],
    pieDerFrente:[
      {
        id:47,
        nombre:'Tobillo'
      },
      {
        id:48,
        nombre:'Empeine'
      },
      {
        id:49,
        nombre:'Dedos'
      }
    ],
    pieDerEspalda:[
      {
        id:50,
        nombre:'Talon'
      },
      {
        id:51,
        nombre:'Planta'
      }
    ],
    piernaIzqFrente:[
      {
        id:52,
        nombre:'Muslo'
      },
      {
        id:53,
        nombre:'Rodilla'
      },
      {
        id:54,
        nombre:'Pantorrilla'
      }
    ],
    piernaIzqEspalda:[
      {
        id:55,
        nombre:'Muslo'
      },
      {
        id:56,
        nombre:'Gemelo'
      }
    ],
    piernaDerFrente:[
      {
        id:57,
        nombre:'Muslo'
      },
      {
        id:58,
        nombre:'Rodilla'
      },
      {
        id:59,
        nombre:'Pantorrilla'
      }
    ],
    piernaDerEspalda:[
      {
        id:60,
        nombre:'Muslo'
      },
      {
        id:61,
        nombre:'Gemelo'
      }
    ],
    torsoFrente: [
      {
        id:62,
        nombre:"Clavícula"
      },
      {
        id:63,
        nombre:'Pecho'
      },
      {
        id:64,
        nombre:'Pectoral izquierdo'
      },
      {
        id:65,
        nombre:'Pectoral derecho'
      },
      {
        id:66,
        nombre:'Abdomen'
      },
      {
        id:67,
        nombre:'Admonen lateral derecho'
      },
      {
        id:68,
        nombre:'Admonen lateral izquierdo'
      },
      {
        id:69,
        nombre:'Zona pelvica'
      },
      {
        id:70,
        nombre:'Pelvis izquierda'
      },
      {
        id:71,
        nombre:'Pelvis derecha'
      },
      {
        id:72,
        nombre:'Genitales'
      }
    ],
    torsoEspalda:[
      {
        id:73,
        nombre:'Espalda alta'
      },
      {
        id:74,
        nombre:'Espalda alta izquierda'
      },
      {
        id:75,
        nombre:'Espalda alta derecha'
      },
      {
        id:76,
        nombre:'Espalda media'
      },
      {
        id:77,
        nombre:'Espalda media izquierda'
      },
      {
        id:78,
        nombre:'Espalda media derecha'
      },
      {
        id:79,
        nombre:'Espalda baja'
      },
      {
        id:80,
        nombre:'Espalda baja izquierda'
      },
      {
        id:81,
        nombre:'Espalda baja derecha'
      },
      {
        id:82,
        nombre:'Gluteos'
      },
      {
        id:83,
        nombre:'Gluteo izquierdo'
      },
      {
        id:84,
        nombre:'Gluteo derecho'
      }
    ]
    }
  }
  
  

}
