"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7872],{7872:(V,p,r)=>{r.r(p),r.d(p,{DetalleConsultaPageModule:()=>w});var d=r(6895),a=r(433),l=r(5035),u=r(6955),c=r(655),e=r(8256),f=r(3079),m=r(2340),v=r(529);const _=m.N.API.AUTH_API_URL;let h=(()=>{class t{constructor(o){this.http=o}seleccionarCasoMedico(o,i){return this.http.post(_+m.N.API.API_SELECCIONAR_CASO_MEDICO_ENDPOINT,{medicalCase:o,doctorId:i})}crearDiagnostico(o){return this.http.post(_+m.N.API.API_CREAR_DIAGNOSTICO_ENDPOINT,o)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(v.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Z=r(7556);function C(t,n){if(1&t&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.value,"")}}function b(t,n){if(1&t&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.value,"")}}function A(t,n){if(1&t&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.value,"")}}function T(t,n){if(1&t&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.value,"")}}function x(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"ion-toolbar")(1,"ion-buttons",15)(2,"ion-button",16),e._uU(3,"Cancelar"),e.qZA()(),e.TgZ(4,"ion-buttons",17)(5,"ion-button",18),e.NdJ("click",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.aceptarCasoMedico())}),e._uU(6,"Aceptar caso"),e.qZA()()()}}function D(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El nombre de la lesi\xf3n es requerida"),e.qZA())}function P(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El nombre de la lesi\xf3ntiene que tener m\xednimo 6 caracteres"),e.qZA())}function q(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El nombre de la lesi\xf3ntiene que tener m\xe1ximo 24 caracteres"),e.qZA())}function I(t,n){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,D,2,0,"span",12),e.YNc(2,P,2,0,"span",12),e.YNc(3,q,2,0,"span",12),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==o.nombreLesion||null==o.nombreLesion.errors?null:o.nombreLesion.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.nombreLesion||null==o.nombreLesion.errors?null:o.nombreLesion.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==o.nombreLesion||null==o.nombreLesion.errors?null:o.nombreLesion.errors.maxlength)}}function L(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El diagn\xf3stico es requerido"),e.qZA())}function F(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El diagn\xf3stico tiene que tener m\xednimo 20 caracteres"),e.qZA())}function U(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El diagn\xf3stico tiene que tener m\xe1ximo 200 caracteres"),e.qZA())}function y(t,n){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,L,2,0,"span",12),e.YNc(2,F,2,0,"span",12),e.YNc(3,U,2,0,"span",12),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==o.diagnostico||null==o.diagnostico.errors?null:o.diagnostico.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.diagnostico||null==o.diagnostico.errors?null:o.diagnostico.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==o.diagnostico||null==o.diagnostico.errors?null:o.diagnostico.errors.maxlength)}}function N(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El tratamiento es requerido"),e.qZA())}function J(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El tratamiento tiene que tener m\xednimo 20 caracteres"),e.qZA())}function Q(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El tratamiento tiene que tener m\xe1ximo 200 caracteres"),e.qZA())}function Y(t,n){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,N,2,0,"span",12),e.YNc(2,J,2,0,"span",12),e.YNc(3,Q,2,0,"span",12),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==o.tratamiento||null==o.tratamiento.errors?null:o.tratamiento.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.tratamiento||null==o.tratamiento.errors?null:o.tratamiento.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==o.tratamiento||null==o.tratamiento.errors?null:o.tratamiento.errors.maxlength)}}function E(t,n){1&t&&(e.TgZ(0,"ion-toolbar")(1,"ion-buttons",17)(2,"ion-button",27),e._uU(3,"Enviar diagn\xf3stico"),e.qZA()()())}function S(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",4)(1,"div",19)(2,"strong",20),e._uU(3,"Crear diagn\xf3stico"),e.qZA()(),e._UZ(4,"br"),e.TgZ(5,"form",21),e.NdJ("ngSubmit",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.crearDiagnostico())}),e.TgZ(6,"ion-item")(7,"ion-label",8),e._uU(8,"Nombre lesi\xf3n"),e.qZA()(),e.TgZ(9,"ion-item"),e._UZ(10,"ion-textarea",22),e.qZA(),e.YNc(11,I,4,3,"div",23),e.TgZ(12,"ion-item")(13,"ion-label",8),e._uU(14,"Diagn\xf3stico"),e.qZA()(),e.TgZ(15,"ion-item"),e._UZ(16,"ion-textarea",24),e.qZA(),e.YNc(17,y,4,3,"div",23),e.TgZ(18,"ion-item")(19,"ion-label",8),e._uU(20,"Tratamiento"),e.qZA()(),e.TgZ(21,"ion-item"),e._UZ(22,"ion-textarea",25),e.qZA(),e.YNc(23,Y,4,3,"div",23),e.YNc(24,E,4,0,"ion-toolbar",12),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(5),e.Q6J("formGroup",o.diagnosticoForm),e.xp6(5),e.Q6J("autoGrow",!0),e.xp6(1),e.Q6J("ngIf",((null==o.nombreLesion?null:o.nombreLesion.dirty)||(null==o.nombreLesion?null:o.nombreLesion.touched))&&(null==o.nombreLesion?null:o.nombreLesion.errors)),e.xp6(5),e.Q6J("autoGrow",!0),e.xp6(1),e.Q6J("ngIf",((null==o.diagnostico?null:o.diagnostico.dirty)||(null==o.diagnostico?null:o.diagnostico.touched))&&(null==o.diagnostico?null:o.diagnostico.errors)),e.xp6(5),e.Q6J("autoGrow",!0),e.xp6(1),e.Q6J("ngIf",((null==o.tratamiento?null:o.tratamiento.dirty)||(null==o.tratamiento?null:o.tratamiento.touched))&&(null==o.tratamiento?null:o.tratamiento.errors)),e.xp6(1),e.Q6J("ngIf",!o.isPhone)}}function M(t,n){1&t&&(e.TgZ(0,"ion-footer")(1,"div",28)(2,"ion-button",29),e._uU(3," Guardar cambios "),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("routerLink","/consultas"))}const G=function(t){return{"web-view":t}},O=[{path:"",component:(()=>{class t{constructor(o,i,s,j,H,R,z,B){this.appService=o,this.fb=i,this.alertController=s,this.loadingController=j,this.detalleConsultaService=H,this.router=R,this.authService=z,this.route=B,this.isPhone=!1,this.isPhone=this.appService.isPhone,this.consulta=this.fb.group({tipoLesion:[1],formaLesion:[1],numeroLesiones:[1],distribucion:[1],parteDelCuerpo:["Cara"],parteDelCuerpoId:[null],casoMedicoAceptado:[!0]}),Object.keys(this.consulta.controls).forEach(K=>{var g;null===(g=this.consulta.get(K))||void 0===g||g.disable()});const $=this.route.snapshot.paramMap.get("casoMedicoId");console.log($),this.diagnosticoForm=this.fb.group({nombreLesion:[null,a.kI.required,a.kI.minLength(6),a.kI.maxLength(24)],diagnostico:[null,a.kI.required,a.kI.minLength(20),a.kI.maxLength(200)],tratamiento:[null,a.kI.required,a.kI.minLength(20),a.kI.maxLength(200)]})}ngOnInit(){}aceptarCasoMedico(){var o;return(0,c.mG)(this,void 0,void 0,function*(){const i=yield this.alertController.create({header:"Aceptar caso medico",message:"Esta seguro que desea aceptar este caso?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",role:"ok"}]});yield i.present();const{role:s}=yield i.onDidDismiss();"ok"===s&&(null===(o=this.casoMedicoAceptado)||void 0===o||o.setValue(!0))})}seleccionarCasomedico(){return(0,c.mG)(this,void 0,void 0,function*(){const o=yield this.loadingController.create();yield o.present(),this.detalleConsultaService.seleccionarCasoMedico("",this.authService.user.email).subscribe({next:i=>(0,c.mG)(this,void 0,void 0,function*(){yield o.dismiss(),yield o.dismiss(),yield(yield this.alertController.create({header:"Selecci\xf3n de caso medico",message:"Has aceptado el caso medico ",buttons:["Aceptar"]})).present(),this.router.navigateByUrl("/casos-medicos",{replaceUrl:!0})}),error:i=>(0,c.mG)(this,void 0,void 0,function*(){yield o.dismiss(),yield(yield this.alertController.create({header:"Selecci\xf3n de caso medico",message:"Error seleccionando caso medico",buttons:["Aceptar"]})).present()})})})}crearDiagnostico(){return(0,c.mG)(this,void 0,void 0,function*(){if(console.log("Diagnostico"),this.diagnosticoForm.invalid)Object.keys(this.diagnosticoForm.controls).forEach(o=>{var i;null===(i=this.diagnosticoForm.get(o))||void 0===i||i.markAllAsTouched()});else{const o=yield this.loadingController.create();yield o.present(),console.log(this.diagnosticoForm.value),this.authService.login(this.diagnosticoForm.value).subscribe({next:i=>(0,c.mG)(this,void 0,void 0,function*(){yield o.dismiss(),yield(yield this.alertController.create({header:"Creaci\xf3n de diagnostico",message:"Creaci\xf3n de diagnostico exitoso",buttons:["Aceptar"]})).present(),this.router.navigateByUrl("/casos-medicos",{replaceUrl:!0})}),error:i=>(0,c.mG)(this,void 0,void 0,function*(){yield o.dismiss(),yield(yield this.alertController.create({header:"Creaci\xf3n de diagnostico",message:"Hubo un error creando el diagnostico",buttons:["Aceptar"]})).present()})})}})}get casoMedicoAceptado(){return this.consulta.get("casoMedicoAceptado")}get nombreLesion(){return this.diagnosticoForm.get("nombreLesion")}get diagnostico(){return this.diagnosticoForm.get("diagnostico")}get tratamiento(){return this.diagnosticoForm.get("tratamiento")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(f.z),e.Y36(a.qu),e.Y36(l.Br),e.Y36(l.HT),e.Y36(h),e.Y36(u.F0),e.Y36(Z.e),e.Y36(u.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-detalle-consulta"]],decls:51,vars:11,consts:[["slot","start"],[3,"ngClass"],[1,"center","titulo-consulta"],[3,"formGroup"],[1,"input-group"],["formControlName","tipoLesion","placeholder","Seleccione su tipo de lesi\xf3n",1,"form-item"],[3,"value",4,"ngFor","ngForOf"],["formControlName","formaLesion","placeholder","Seleccione la forma de la lesi\xf3n",1,"form-item"],[1,"question-label"],["formControlName","numeroLesiones","placeholder","Seleccione la cantidad de lesiones",1,"form-item"],["formControlName","distribucion","placeholder","Seleccione la distribuci\xf3n de la lesi\xf3n",1,"form-item"],["placeholder","","formControlName","parteDelCuerpo"],[4,"ngIf"],["class","input-group",4,"ngIf"],[3,"value"],["slot","secondary"],["color","danger","fill","solid","routerLink","/casos-medicos"],["slot","primary"],["color","primary","fill","solid",3,"click"],["id","explicacion",2,"text-align","center"],[1,"capitalize"],[3,"formGroup","ngSubmit"],["formControlName","nombreLesion","placeholder","Escriba el nombre de la lesi\xf3n",3,"autoGrow"],["class","form-error",4,"ngIf"],["formControlName","diagnostico","placeholder","Escriba el diagn\xf3stico",3,"autoGrow"],["formControlName","tratamiento","placeholder","Escriba el tratamiento",3,"autoGrow"],[1,"form-error"],["type","submit","color","primary","fill","solid"],[1,"center",2,"text-align","center"],["type","submit","expand","block",3,"routerLink"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Detalle consulta"),e.qZA(),e.TgZ(4,"ion-buttons",0),e._UZ(5,"ion-menu-button"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"div",1)(8,"div",2)(9,"strong"),e._uU(10,"Consulta #1234"),e.qZA()(),e._UZ(11,"br"),e.TgZ(12,"form",3)(13,"div",4)(14,"ion-item")(15,"ion-label"),e._uU(16,"Tipos de lesi\xf3n:"),e.qZA()(),e.TgZ(17,"ion-item")(18,"ion-select",5),e.YNc(19,C,2,2,"ion-select-option",6),e.qZA()(),e.TgZ(20,"div")(21,"ion-item")(22,"ion-label"),e._uU(23,"Forma lesi\xf3n"),e.qZA()(),e.TgZ(24,"ion-item")(25,"ion-select",7),e.YNc(26,b,2,2,"ion-select-option",6),e.qZA()()(),e.TgZ(27,"div")(28,"ion-item")(29,"ion-label",8),e._uU(30,"N\xfamero de lesiones"),e.qZA()(),e.TgZ(31,"ion-item")(32,"ion-select",9),e.YNc(33,A,2,2,"ion-select-option",6),e.qZA()()(),e.TgZ(34,"div")(35,"ion-item")(36,"ion-label",8),e._uU(37,"Distribuci\xf3n"),e.qZA()(),e.TgZ(38,"ion-item")(39,"ion-select",10),e.YNc(40,T,2,2,"ion-select-option",6),e.qZA()()(),e.TgZ(41,"div")(42,"ion-item")(43,"ion-label"),e._uU(44," Parte del cuerpo "),e.qZA()(),e.TgZ(45,"ion-item"),e._UZ(46,"ion-input",11),e.qZA()(),e.YNc(47,x,7,0,"ion-toolbar",12),e.qZA()(),e._UZ(48,"br"),e.YNc(49,S,25,8,"div",13),e.qZA()(),e.YNc(50,M,4,1,"ion-footer",12)),2&o&&(e.xp6(7),e.Q6J("ngClass",e.VKq(9,G,!i.isPhone)),e.xp6(5),e.Q6J("formGroup",i.consulta),e.xp6(7),e.Q6J("ngForOf",i.appService.consulta.tiposDeLesion),e.xp6(7),e.Q6J("ngForOf",i.appService.consulta.formasDeLesiones),e.xp6(7),e.Q6J("ngForOf",i.appService.consulta.numeroDeLesiones),e.xp6(7),e.Q6J("ngForOf",i.appService.consulta.distribucionDeLaLesion),e.xp6(7),e.Q6J("ngIf",!(i.isPhone||null!=i.casoMedicoAceptado&&i.casoMedicoAceptado.value)),e.xp6(2),e.Q6J("ngIf",null==i.casoMedicoAceptado?null:i.casoMedicoAceptado.value),e.xp6(1),e.Q6J("ngIf",i.isPhone))},dependencies:[d.mk,d.sg,d.O5,a._Y,a.JJ,a.JL,l.YG,l.Sm,l.W2,l.fr,l.Gu,l.pK,l.Ie,l.Q$,l.fG,l.t9,l.n0,l.g2,l.wd,l.sr,l.QI,l.j9,l.YI,u.rH,a.sg,a.u],styles:[".titulo-consulta[_ngcontent-%COMP%]{padding-top:25px}"]}),t})()}];let k=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(O),u.Bz]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,a.u5,l.Pc,k,a.UX]}),t})()}}]);