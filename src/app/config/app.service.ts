import { Injectable, } from '@angular/core';
import { Platform } from '@ionic/angular';

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

    get fitzpatrick(){
    return {
      colorOjos :[
        {id:1,value:'Azul claro o gris verde'},
        {id:2,value:'Azul, verde, gris'},
        {id:3,value:'Azul oscuro o verde marrón (avellana)'},
        {id:4,value:'Marron oscuro'},
        {id:5,value:'Negro pardusco'}],
        colorCabello :[
        {id:1,value:'Rojo'},
        {id:2,value:'Rubio'},
        {id:3,value:'Castaño u oscuro rubio'},
        {id:4,value:'Castaño oscuro'},
        {id:5,value:'Negro'}],
        colorPiel :[
        {id:1,value:'Rosada'},
        {id:2,value:'Muy pálida'},
        {id:3,value:'Castaño claro o aceituna'},
        {id:4,value:'Café'},
        {id:5,value:'Café oscuro'}],
        cantidadPecas :[
        {id:1,value:'Muchas'},
        {id:2,value:'Varias'},
        {id:3,value:'Pocas'},
        {id:4,value:'Raramente'},
        {id:5,value:'Ninguna'}],
        exposicionAlSol :[
        {id:1,value:'Quemaduras severas, abrasador, peladura'},
        {id:2,value:'Quemaduras moderadas, abrasador, peladura'},
        {id:3,value:'A veces se quema seguido por peladura'},
        {id:4,value:'Quemaduras raras'},
        {id:5,value:'Sin quemaduras'}],
        bronceadoConElSol :[
        {id:1,value:'Nunca'},
        {id:2,value:'Raramente'},
        {id:3,value:'Algunas veces'},
        {id:4,value:'Con frecuencia'},
        {id:5,value:'Siempre'}],
        cantidadBronceado :[
        {id:1,value:'Difícilmente o no en absoluto'},
        {id:2,value:'Bronceado suave'},
        {id:3,value:'Bronceado medio'},
        {id:4,value:'Bronceado oscuro'},
        {id:5,value:'Bronceado muy oscura'}],
        sensibilidadDeCaraConSol :[
        {id:1,value:'Muy sensible'},
        {id:2,value:'Sensible'},
        {id:3,value:'Levemente sensible'},
        {id:4,value:'Resistente'},
        {id:5,value:'Muy resistente'}],
        frecuenciaBronceo :[
        {id:1,value:'Nunca'},
        {id:2,value:'Raramente'},
        {id:3,value:'Algunas veces'},
        {id:4,value:'Seguido'},
        {id:5,value:'Siempre'}],
        ultimaExposicion :[
        {id:1,value:'Hace más de 3 meses'},
        {id:2,value:'En los últimos 2-3 meses'},
        {id:3,value:'En los últimos 1-2 meses'},
        {id:4,value:'En la semana pasada'},
        {id:5,value:'En el último día'}]
    }
  }


}
