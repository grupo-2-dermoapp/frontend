"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7872],{7872:(te,P,c)=>{c.r(P),c.d(P,{DetalleConsultaPageModule:()=>oe});var A=c(6895),r=c(433),a=c(5035),f=c(6955),d=c(655),e=c(8256),y=c(3079),m=c(2340),q=c(529);const Z=m.N.API.MEDICAL_CASES_URL;let N=(()=>{class t{constructor(o){this.http=o}crearDiagnostico(o){return this.http.post(Z+m.N.API.API_DIAGNOSTICO_ENDPOINT,o)}obtenerConsulta(o){return this.http.get(Z+m.N.API.API_CASOS_MEDICOS_ENDPOINT+"/"+o)}obtenerDiagnostico(o){return this.http.get(Z+m.N.API.API_DIAGNOSTICO_ENDPOINT+"/"+o)}agendarCita(o,i){return this.http.post(m.N.API.AGENDA_URL+m.N.API.API_AGENDAR_CITA_ENDPOINT,{doctor_uuid:o,patient_uuid:i})}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(q.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var L=c(7556);function U(t,n){if(1&t&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.value,"")}}function F(t,n){if(1&t&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.value,"")}}function M(t,n){if(1&t&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.value,"")}}function J(t,n){if(1&t&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.value,"")}}function E(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"ion-toolbar")(1,"ion-buttons",15)(2,"ion-button",16),e._uU(3,"Cancelar"),e.qZA()(),e.TgZ(4,"ion-buttons",17)(5,"ion-button",18),e.NdJ("click",function(){e.CHM(o);const l=e.oxw();return e.KtG(l.aceptarCasoMedico())}),e._uU(6,"Aceptar caso"),e.qZA()()()}}function S(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El nombre de la lesi\xf3n es requerida"),e.qZA())}function Q(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El nombre de la lesi\xf3ntiene que tener m\xednimo 6 caracteres"),e.qZA())}function Y(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El nombre de la lesi\xf3ntiene que tener m\xe1ximo 24 caracteres"),e.qZA())}function G(t,n){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,S,2,0,"span",12),e.YNc(2,Q,2,0,"span",12),e.YNc(3,Y,2,0,"span",12),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==o.nombreLesion||null==o.nombreLesion.errors?null:o.nombreLesion.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.nombreLesion||null==o.nombreLesion.errors?null:o.nombreLesion.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==o.nombreLesion||null==o.nombreLesion.errors?null:o.nombreLesion.errors.maxlength)}}function O(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El diagn\xf3stico es requerido"),e.qZA())}function k(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El diagn\xf3stico tiene que tener m\xednimo 20 caracteres"),e.qZA())}function j(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El diagn\xf3stico tiene que tener m\xe1ximo 200 caracteres"),e.qZA())}function w(t,n){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,O,2,0,"span",12),e.YNc(2,k,2,0,"span",12),e.YNc(3,j,2,0,"span",12),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==o.diagnostico||null==o.diagnostico.errors?null:o.diagnostico.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.diagnostico||null==o.diagnostico.errors?null:o.diagnostico.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==o.diagnostico||null==o.diagnostico.errors?null:o.diagnostico.errors.maxlength)}}function V(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El tratamiento es requerido"),e.qZA())}function B(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El tratamiento tiene que tener m\xednimo 20 caracteres"),e.qZA())}function R(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"El tratamiento tiene que tener m\xe1ximo 200 caracteres"),e.qZA())}function z(t,n){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,V,2,0,"span",12),e.YNc(2,B,2,0,"span",12),e.YNc(3,R,2,0,"span",12),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==o.tratamiento||null==o.tratamiento.errors?null:o.tratamiento.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.tratamiento||null==o.tratamiento.errors?null:o.tratamiento.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==o.tratamiento||null==o.tratamiento.errors?null:o.tratamiento.errors.maxlength)}}function H(t,n){1&t&&(e.TgZ(0,"ion-toolbar")(1,"ion-buttons",17)(2,"ion-button",27),e._uU(3,"Enviar diagn\xf3stico"),e.qZA()()())}function $(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",4)(1,"div",19)(2,"strong",20),e._uU(3,"Crear diagn\xf3stico"),e.qZA()(),e._UZ(4,"br"),e.TgZ(5,"form",21),e.NdJ("ngSubmit",function(){e.CHM(o);const l=e.oxw();return e.KtG(l.crearDiagnostico())}),e.TgZ(6,"ion-item")(7,"ion-label",8),e._uU(8,"Nombre lesi\xf3n"),e.qZA()(),e.TgZ(9,"ion-item"),e._UZ(10,"ion-textarea",22),e.qZA(),e.YNc(11,G,4,3,"div",23),e.TgZ(12,"ion-item")(13,"ion-label",8),e._uU(14,"Diagn\xf3stico"),e.qZA()(),e.TgZ(15,"ion-item"),e._UZ(16,"ion-textarea",24),e.qZA(),e.YNc(17,w,4,3,"div",23),e.TgZ(18,"ion-item")(19,"ion-label",8),e._uU(20,"Tratamiento"),e.qZA()(),e.TgZ(21,"ion-item"),e._UZ(22,"ion-textarea",25),e.qZA(),e.YNc(23,z,4,3,"div",23),e.YNc(24,H,4,0,"ion-toolbar",12),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(5),e.Q6J("formGroup",o.diagnosticoForm),e.xp6(5),e.Q6J("autoGrow",!0),e.xp6(1),e.Q6J("ngIf",((null==o.nombreLesion?null:o.nombreLesion.dirty)||(null==o.nombreLesion?null:o.nombreLesion.touched))&&(null==o.nombreLesion?null:o.nombreLesion.errors)),e.xp6(5),e.Q6J("autoGrow",!0),e.xp6(1),e.Q6J("ngIf",((null==o.diagnostico?null:o.diagnostico.dirty)||(null==o.diagnostico?null:o.diagnostico.touched))&&(null==o.diagnostico?null:o.diagnostico.errors)),e.xp6(5),e.Q6J("autoGrow",!0),e.xp6(1),e.Q6J("ngIf",((null==o.tratamiento?null:o.tratamiento.dirty)||(null==o.tratamiento?null:o.tratamiento.touched))&&(null==o.tratamiento?null:o.tratamiento.errors)),e.xp6(1),e.Q6J("ngIf",!o.isPhone&&!o.diagnosticoCreado)}}function K(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"ion-footer")(1,"div",28)(2,"ion-button",29),e.NdJ("click",function(){e.CHM(o);const l=e.oxw();return e.KtG(l.agendarCita())}),e._uU(3," Agendar cita "),e.qZA()()()}}const X=function(t){return{"web-view":t}},W=[{path:"",component:(()=>{class t{constructor(o,i,l,p,v,h,b,C){this.appService=o,this.fb=i,this.alertController=l,this.loadingController=p,this.detalleConsultaService=v,this.router=h,this.authService=b,this.route=C,this.isPhone=!1,this.casoMedicoId="",this.diagnosticoCreado=!1,this.tipoDiagnostico="",this.doctorID="",this.isPhone=this.appService.isPhone,this.consulta=this.fb.group({tipoLesion:[null],formaLesion:[null],numeroLesiones:[null],distribucion:[null],parteDelCuerpo:[null],casoMedicoAceptado:[!1]}),Object.keys(this.consulta.controls).forEach(u=>{var s;null===(s=this.consulta.get(u))||void 0===s||s.disable()});let g=this.route.snapshot.paramMap.get("casoMedicoId");g?(this.casoMedicoId=g,this.detalleConsultaService.obtenerConsulta(g).subscribe({next:u=>{var s,D,T,x,I;console.log("Consulta",u);const _=u.medical_case;u&&(null===(s=this.consulta.get("tipoLesion"))||void 0===s||s.setValue(_.type_of_injury),null===(D=this.consulta.get("formaLesion"))||void 0===D||D.setValue(_.shape_of_injury),null===(T=this.consulta.get("numeroLesiones"))||void 0===T||T.setValue(_.number_of_injuries),null===(x=this.consulta.get("distribucion"))||void 0===x||x.setValue(_.injury_distribucion),null===(I=this.consulta.get("parteDelCuerpo"))||void 0===I||I.setValue(this.appService.obtenerParteCuerpoPorId(_.body_part)),this.tipoDiagnostico=_.type_of_diagnosis,this.obetenerDiagnosticoCasoMedico(this.casoMedicoId))},error:u=>{this.erroObteniendoCasoMedico()}})):this.erroObteniendoCasoMedico(),this.diagnosticoForm=this.fb.group({nombreLesion:[null,[r.kI.required,r.kI.minLength(6),r.kI.maxLength(24)]],diagnostico:[null,[r.kI.required,r.kI.minLength(20),r.kI.maxLength(200)]],tratamiento:[null,[r.kI.required,r.kI.minLength(20),r.kI.maxLength(200)]]})}obetenerDiagnosticoCasoMedico(o){this.detalleConsultaService.obtenerDiagnostico(o).subscribe({next:i=>{var l,p,v,h,b,C,g,u;console.log("Diagnostico",i);const s=i.medical_diagnostic;s&&(null===(l=this.nombreLesion)||void 0===l||l.setValue(s.name_of_injury),null===(p=this.nombreLesion)||void 0===p||p.disable(),null===(v=this.diagnostico)||void 0===v||v.setValue(s.diagnosis),null===(h=this.diagnostico)||void 0===h||h.disable(),null===(b=this.tratamiento)||void 0===b||b.setValue(s.treatment),null===(C=this.tratamiento)||void 0===C||C.disable(),null===(g=this.casoMedicoAceptado)||void 0===g||g.setValue(!0),this.diagnosticoCreado=!0,this.doctorID=(null===(u=s.doctor)||void 0===u?void 0:u.uuid)||"")}})}erroObteniendoCasoMedico(){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Error",message:"Error obteniendo la informaci\xf3n del caso medico",buttons:["Aceptar"]})).present(),this.router.navigateByUrl("/casos-medicos",{replaceUrl:!0})})}aceptarCasoMedico(){var o;return(0,d.mG)(this,void 0,void 0,function*(){const i=yield this.alertController.create({header:"Aceptar caso medico",message:"Esta seguro que desea aceptar este caso?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",role:"ok"}]});yield i.present();const{role:l}=yield i.onDidDismiss();"ok"===l&&(null===(o=this.casoMedicoAceptado)||void 0===o||o.setValue(!0))})}validarAgendarCita(){return(0,d.mG)(this,void 0,void 0,function*(){const o=yield this.alertController.create({header:"Agengar cita",message:"Esta seguro que desea agendar cita para este caso?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",role:"ok"}]});yield o.present();const{role:i}=yield o.onDidDismiss();"ok"===i&&this.agendarCita()})}agendarCita(){return(0,d.mG)(this,void 0,void 0,function*(){const o=yield this.loadingController.create();yield o.present(),this.detalleConsultaService.agendarCita(this.doctorID,this.authService.user.uuid).subscribe({next:i=>(0,d.mG)(this,void 0,void 0,function*(){yield o.dismiss();const l=i.event.start_date.split("T");yield(yield this.alertController.create({header:i.event.name,message:`Su agenda ha sido exitosamente asignada para el dia ${l[0]} a las ${l[1]}`,buttons:["Aceptar"]})).present(),this.router.navigateByUrl("/inicio",{replaceUrl:!0})}),error:i=>(0,d.mG)(this,void 0,void 0,function*(){yield o.dismiss(),yield(yield this.alertController.create({header:"Creaci\xf3n de agenda",message:"Hubo un error creando la agenda",buttons:["Aceptar"]})).present()})})})}crearDiagnostico(){return(0,d.mG)(this,void 0,void 0,function*(){if(this.diagnosticoForm.invalid)Object.keys(this.diagnosticoForm.controls).forEach(o=>{var i;null===(i=this.diagnosticoForm.get(o))||void 0===i||i.markAllAsTouched()});else{const o=yield this.loadingController.create();yield o.present(),this.detalleConsultaService.crearDiagnostico(this.transformarParaBackend(this.diagnosticoForm.value)).subscribe({next:i=>(0,d.mG)(this,void 0,void 0,function*(){yield o.dismiss(),yield(yield this.alertController.create({header:"Creaci\xf3n de diagn\xf3stico",message:"Creaci\xf3n de diagn\xf3stico exitoso",buttons:["Aceptar"]})).present(),this.router.navigateByUrl("/casos-medicos",{replaceUrl:!0})}),error:i=>(0,d.mG)(this,void 0,void 0,function*(){yield o.dismiss(),yield(yield this.alertController.create({header:"Creaci\xf3n de diagn\xf3stico",message:"Hubo un error creando el diagn\xf3stico",buttons:["Aceptar"]})).present()})})}})}transformarParaBackend(o){return{name_of_injury:o.nombreLesion,diagnosis:o.diagnostico,treatment:o.tratamiento,medical_case_uuid:this.casoMedicoId,doctor_uuid:this.authService.user.uuid}}get casoMedicoAceptado(){return this.consulta.get("casoMedicoAceptado")}get nombreLesion(){return this.diagnosticoForm.get("nombreLesion")}get diagnostico(){return this.diagnosticoForm.get("diagnostico")}get tratamiento(){return this.diagnosticoForm.get("tratamiento")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(y.z),e.Y36(r.qu),e.Y36(a.Br),e.Y36(a.HT),e.Y36(N),e.Y36(f.F0),e.Y36(L.e),e.Y36(f.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-detalle-consulta"]],decls:51,vars:11,consts:[["slot","start"],[3,"ngClass"],[1,"center","titulo-consulta"],["id","consulta-form",3,"formGroup"],[1,"input-group"],["formControlName","tipoLesion","placeholder","Seleccione su tipo de lesi\xf3n",1,"form-item"],[3,"value",4,"ngFor","ngForOf"],["formControlName","formaLesion","placeholder","Seleccione la forma de la lesi\xf3n",1,"form-item"],[1,"question-label"],["formControlName","numeroLesiones","placeholder","Seleccione la cantidad de lesiones",1,"form-item"],["formControlName","distribucion","placeholder","Seleccione la distribuci\xf3n de la lesi\xf3n",1,"form-item"],["placeholder","","formControlName","parteDelCuerpo"],[4,"ngIf"],["class","input-group",4,"ngIf"],[3,"value"],["slot","secondary"],["id","cancelar-button","color","danger","fill","solid","routerLink","/casos-medicos"],["slot","primary"],["id","aceptar-caso-button","color","primary","fill","solid",3,"click"],["id","explicacion",2,"text-align","center"],[1,"capitalize"],["id","diagnostico-form",3,"formGroup","ngSubmit"],["formControlName","nombreLesion","placeholder","Escriba el nombre de la lesi\xf3n",3,"autoGrow"],["class","form-error",4,"ngIf"],["formControlName","diagnostico","placeholder","Escriba el diagn\xf3stico",3,"autoGrow"],["formControlName","tratamiento","placeholder","Escriba el tratamiento",3,"autoGrow"],[1,"form-error"],["id","crear-diagnostico-button","type","submit","color","primary","fill","solid"],[1,"center",2,"text-align","center"],["type","submit","expand","block",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Detalle consulta"),e.qZA(),e.TgZ(4,"ion-buttons",0),e._UZ(5,"ion-menu-button"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"div",1)(8,"div",2)(9,"strong"),e._uU(10,"Consulta #1234"),e.qZA()(),e._UZ(11,"br"),e.TgZ(12,"form",3)(13,"div",4)(14,"ion-item")(15,"ion-label"),e._uU(16,"Tipos de lesi\xf3n:"),e.qZA()(),e.TgZ(17,"ion-item")(18,"ion-select",5),e.YNc(19,U,2,2,"ion-select-option",6),e.qZA()(),e.TgZ(20,"div")(21,"ion-item")(22,"ion-label"),e._uU(23,"Forma lesi\xf3n"),e.qZA()(),e.TgZ(24,"ion-item")(25,"ion-select",7),e.YNc(26,F,2,2,"ion-select-option",6),e.qZA()()(),e.TgZ(27,"div")(28,"ion-item")(29,"ion-label",8),e._uU(30,"N\xfamero de lesiones"),e.qZA()(),e.TgZ(31,"ion-item")(32,"ion-select",9),e.YNc(33,M,2,2,"ion-select-option",6),e.qZA()()(),e.TgZ(34,"div")(35,"ion-item")(36,"ion-label",8),e._uU(37,"Distribuci\xf3n"),e.qZA()(),e.TgZ(38,"ion-item")(39,"ion-select",10),e.YNc(40,J,2,2,"ion-select-option",6),e.qZA()()(),e.TgZ(41,"div")(42,"ion-item")(43,"ion-label"),e._uU(44," Parte del cuerpo "),e.qZA()(),e.TgZ(45,"ion-item"),e._UZ(46,"ion-input",11),e.qZA()(),e.YNc(47,E,7,0,"ion-toolbar",12),e.qZA()(),e._UZ(48,"br"),e.YNc(49,$,25,8,"div",13),e.qZA()(),e.YNc(50,K,4,0,"ion-footer",12)),2&o&&(e.xp6(7),e.Q6J("ngClass",e.VKq(9,X,!i.isPhone)),e.xp6(5),e.Q6J("formGroup",i.consulta),e.xp6(7),e.Q6J("ngForOf",i.appService.consulta.tiposDeLesion),e.xp6(7),e.Q6J("ngForOf",i.appService.consulta.formasDeLesiones),e.xp6(7),e.Q6J("ngForOf",i.appService.consulta.numeroDeLesiones),e.xp6(7),e.Q6J("ngForOf",i.appService.consulta.distribucionDeLaLesion),e.xp6(7),e.Q6J("ngIf",!(i.isPhone||null!=i.casoMedicoAceptado&&i.casoMedicoAceptado.value)),e.xp6(2),e.Q6J("ngIf",null==i.casoMedicoAceptado?null:i.casoMedicoAceptado.value),e.xp6(1),e.Q6J("ngIf",i.isPhone&&(null==i.casoMedicoAceptado?null:i.casoMedicoAceptado.value)&&"DOCTOR"===i.tipoDiagnostico))},dependencies:[A.mk,A.sg,A.O5,r._Y,r.JJ,r.JL,a.YG,a.Sm,a.W2,a.fr,a.Gu,a.pK,a.Ie,a.Q$,a.fG,a.t9,a.n0,a.g2,a.wd,a.sr,a.QI,a.j9,a.YI,f.rH,r.sg,r.u],styles:[".titulo-consulta[_ngcontent-%COMP%]{padding-top:25px}"]}),t})()}];let ee=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.Bz.forChild(W),f.Bz]}),t})(),oe=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[A.ez,r.u5,a.Pc,ee,r.UX]}),t})()}}]);