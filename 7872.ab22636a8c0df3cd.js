"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7872],{7872:(ne,q,r)=>{r.r(q),r.d(q,{DetalleConsultaPageModule:()=>oe});var A=r(6895),s=r(4006),a=r(5035),h=r(5122),d=r(655),e=r(8274),I=r(3079),g=r(2340),y=r(529);const b=g.N.API.MEDICAL_CASES_URL;let N=(()=>{class o{constructor(t){this.http=t}crearDiagnostico(t){return this.http.post(b+g.N.API.API_DIAGNOSTICO_ENDPOINT,t)}obtenerConsulta(t){return this.http.get(b+g.N.API.API_CASOS_MEDICOS_ENDPOINT+"/"+t)}obtenerDiagnostico(t){return this.http.get(b+g.N.API.API_DIAGNOSTICO_ENDPOINT+"/"+t)}agendarCita(t,n){return this.http.post(g.N.API.AGENDA_URL+g.N.API.API_AGENDAR_CITA_ENDPOINT,{doctor_uuid:t,patient_uuid:n})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(y.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var U=r(7556),P=r(4032);function O(o,i){if(1&o&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.value,"")}}function M(o,i){if(1&o&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.value,"")}}function J(o,i){if(1&o&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.value,"")}}function Q(o,i){if(1&o&&(e.TgZ(0,"ion-select-option",14),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.value,"")}}function S(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-toolbar")(1,"ion-buttons",15)(2,"ion-button",16),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e.TgZ(5,"ion-buttons",17)(6,"ion-button",18),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.aceptarCasoMedico())}),e._uU(7),e.ALo(8,"translate"),e.qZA()()()}2&o&&(e.xp6(3),e.Oqu(e.lcZ(4,2,"detalleConsulta.botonCancelar")),e.xp6(4),e.Oqu(e.lcZ(8,4,"detalleConsulta.botonAceptar")))}function Y(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"detalleConsulta.nombreLesionRequerida")))}function G(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"detalleConsulta.minnombreLesionRequerida")))}function F(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"detalleConsulta.maxnombreLesionRequerida")))}function k(o,i){if(1&o&&(e.TgZ(0,"div",26),e.YNc(1,Y,3,3,"span",12),e.YNc(2,G,3,3,"span",12),e.YNc(3,F,3,3,"span",12),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==t.nombreLesion||null==t.nombreLesion.errors?null:t.nombreLesion.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.nombreLesion||null==t.nombreLesion.errors?null:t.nombreLesion.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==t.nombreLesion||null==t.nombreLesion.errors?null:t.nombreLesion.errors.maxlength)}}function E(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"detalleConsulta.diagnosticoRequerido")))}function j(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"detalleConsulta.mindiagnosticoRequerido")))}function R(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"detalleConsulta.maxdiagnosticoRequerido")))}function H(o,i){if(1&o&&(e.TgZ(0,"div",26),e.YNc(1,E,3,3,"span",12),e.YNc(2,j,3,3,"span",12),e.YNc(3,R,3,3,"span",12),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==t.diagnostico||null==t.diagnostico.errors?null:t.diagnostico.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.diagnostico||null==t.diagnostico.errors?null:t.diagnostico.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==t.diagnostico||null==t.diagnostico.errors?null:t.diagnostico.errors.maxlength)}}function w(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"detalleConsulta.tratamientoRequerido")))}function V(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"detalleConsulta.mintratamientoRequerido")))}function B(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"detalleConsulta.maxtratamientoRequerido")))}function $(o,i){if(1&o&&(e.TgZ(0,"div",26),e.YNc(1,w,3,3,"span",12),e.YNc(2,V,3,3,"span",12),e.YNc(3,B,3,3,"span",12),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==t.tratamiento||null==t.tratamiento.errors?null:t.tratamiento.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.tratamiento||null==t.tratamiento.errors?null:t.tratamiento.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==t.tratamiento||null==t.tratamiento.errors?null:t.tratamiento.errors.maxlength)}}function z(o,i){1&o&&(e.TgZ(0,"ion-toolbar")(1,"ion-buttons",17)(2,"ion-button",27),e._uU(3),e.ALo(4,"translate"),e.qZA()()()),2&o&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"detalleConsulta.botonEnviarDiagnostico")))}function K(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",4)(1,"div",19)(2,"strong",20),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e._UZ(5,"br"),e.TgZ(6,"form",21),e.NdJ("ngSubmit",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.crearDiagnostico())}),e.TgZ(7,"ion-item")(8,"ion-label",8),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e.TgZ(11,"ion-item"),e._UZ(12,"ion-textarea",22),e.ALo(13,"translate"),e.qZA(),e.YNc(14,k,4,3,"div",23),e.TgZ(15,"ion-item")(16,"ion-label",8),e._uU(17),e.ALo(18,"translate"),e.qZA()(),e.TgZ(19,"ion-item"),e._UZ(20,"ion-textarea",24),e.ALo(21,"translate"),e.qZA(),e.YNc(22,H,4,3,"div",23),e.TgZ(23,"ion-item")(24,"ion-label",8),e._uU(25),e.ALo(26,"translate"),e.qZA()(),e.TgZ(27,"ion-item"),e._UZ(28,"ion-textarea",25),e.ALo(29,"translate"),e.qZA(),e.YNc(30,$,4,3,"div",23),e.YNc(31,z,5,3,"ion-toolbar",12),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,15,"detalleConsulta.crearDiagnostico")),e.xp6(3),e.Q6J("formGroup",t.diagnosticoForm),e.xp6(3),e.Oqu(e.lcZ(10,17,"detalleConsulta.nombreLesion")),e.xp6(3),e.s9C("placeholder",e.lcZ(13,19,"detalleConsulta.placeHolderNombreLesion")),e.Q6J("autoGrow",!0),e.xp6(2),e.Q6J("ngIf",((null==t.nombreLesion?null:t.nombreLesion.dirty)||(null==t.nombreLesion?null:t.nombreLesion.touched))&&(null==t.nombreLesion?null:t.nombreLesion.errors)),e.xp6(3),e.Oqu(e.lcZ(18,21,"detalleConsulta.diagnostico")),e.xp6(3),e.s9C("placeholder",e.lcZ(21,23,"detalleConsulta.placeHolderDiagnostico")),e.Q6J("autoGrow",!0),e.xp6(2),e.Q6J("ngIf",((null==t.diagnostico?null:t.diagnostico.dirty)||(null==t.diagnostico?null:t.diagnostico.touched))&&(null==t.diagnostico?null:t.diagnostico.errors)),e.xp6(3),e.Oqu(e.lcZ(26,25,"detalleConsulta.tratamiento")),e.xp6(3),e.s9C("placeholder",e.lcZ(29,27,"detalleConsulta.tratamientoPlaceHolder")),e.Q6J("autoGrow",!0),e.xp6(2),e.Q6J("ngIf",((null==t.tratamiento?null:t.tratamiento.dirty)||(null==t.tratamiento?null:t.tratamiento.touched))&&(null==t.tratamiento?null:t.tratamiento.errors)),e.xp6(1),e.Q6J("ngIf",!t.isPhone&&!t.diagnosticoCreado)}}function X(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-footer")(1,"div",28)(2,"ion-button",29),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.agendarCita())}),e._uU(3),e.ALo(4,"translate"),e.qZA()()()}2&o&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"detalleConsulta.agendarCita")," "))}const W=function(o){return{"web-view":o}},ee=[{path:"",component:(()=>{class o{constructor(t,n,l,m,f,v,C,Z){this.appService=t,this.fb=n,this.alertController=l,this.loadingController=m,this.detalleConsultaService=f,this.router=v,this.authService=C,this.route=Z,this.isPhone=!1,this.casoMedicoId="",this.diagnosticoCreado=!1,this.tipoDiagnostico="",this.doctorID="",this.isPhone=this.appService.isPhone,this.consulta=this.fb.group({tipoLesion:[null],formaLesion:[null],numeroLesiones:[null],distribucion:[null],parteDelCuerpo:[null],casoMedicoAceptado:[!1]}),Object.keys(this.consulta.controls).forEach(u=>{var c;null===(c=this.consulta.get(u))||void 0===c||c.disable()});let p=this.route.snapshot.paramMap.get("casoMedicoId");p?(this.casoMedicoId=p,this.detalleConsultaService.obtenerConsulta(p).subscribe({next:u=>{var c,x,L,D,T;console.log("Consulta",u);const _=u.medical_case;u&&(null===(c=this.consulta.get("tipoLesion"))||void 0===c||c.setValue(_.type_of_injury),null===(x=this.consulta.get("formaLesion"))||void 0===x||x.setValue(_.shape_of_injury),null===(L=this.consulta.get("numeroLesiones"))||void 0===L||L.setValue(_.number_of_injuries),null===(D=this.consulta.get("distribucion"))||void 0===D||D.setValue(_.injury_distribucion),null===(T=this.consulta.get("parteDelCuerpo"))||void 0===T||T.setValue(this.appService.obtenerParteCuerpoPorId(_.body_part)),this.tipoDiagnostico=_.type_of_diagnosis,this.obetenerDiagnosticoCasoMedico(this.casoMedicoId))},error:u=>{this.erroObteniendoCasoMedico()}})):this.erroObteniendoCasoMedico(),this.diagnosticoForm=this.fb.group({nombreLesion:[null,[s.kI.required,s.kI.minLength(6),s.kI.maxLength(24)]],diagnostico:[null,[s.kI.required,s.kI.minLength(20),s.kI.maxLength(200)]],tratamiento:[null,[s.kI.required,s.kI.minLength(20),s.kI.maxLength(200)]]})}obetenerDiagnosticoCasoMedico(t){this.detalleConsultaService.obtenerDiagnostico(t).subscribe({next:n=>{var l,m,f,v,C,Z,p,u;console.log("Diagnostico",n);const c=n.medical_diagnostic;c&&(null===(l=this.nombreLesion)||void 0===l||l.setValue(c.name_of_injury),null===(m=this.nombreLesion)||void 0===m||m.disable(),null===(f=this.diagnostico)||void 0===f||f.setValue(c.diagnosis),null===(v=this.diagnostico)||void 0===v||v.disable(),null===(C=this.tratamiento)||void 0===C||C.setValue(c.treatment),null===(Z=this.tratamiento)||void 0===Z||Z.disable(),null===(p=this.casoMedicoAceptado)||void 0===p||p.setValue(!0),this.diagnosticoCreado=!0,this.doctorID=(null===(u=c.doctor)||void 0===u?void 0:u.uuid)||"")}})}erroObteniendoCasoMedico(){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Error",message:"Error obteniendo la informaci\xf3n del caso medico",buttons:["Aceptar"]})).present(),this.router.navigateByUrl("/casos-medicos",{replaceUrl:!0})})}aceptarCasoMedico(){var t;return(0,d.mG)(this,void 0,void 0,function*(){const n=yield this.alertController.create({header:"Aceptar caso medico",message:"Esta seguro que desea aceptar este caso?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",role:"ok"}]});yield n.present();const{role:l}=yield n.onDidDismiss();"ok"===l&&(null===(t=this.casoMedicoAceptado)||void 0===t||t.setValue(!0))})}validarAgendarCita(){return(0,d.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({header:"Agengar cita",message:"Esta seguro que desea agendar cita para este caso?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",role:"ok"}]});yield t.present();const{role:n}=yield t.onDidDismiss();"ok"===n&&this.agendarCita()})}agendarCita(){return(0,d.mG)(this,void 0,void 0,function*(){const t=yield this.loadingController.create();yield t.present(),this.detalleConsultaService.agendarCita(this.doctorID,this.authService.user.uuid).subscribe({next:n=>(0,d.mG)(this,void 0,void 0,function*(){yield t.dismiss();const l=n.event.start_date.split("T");yield(yield this.alertController.create({header:n.event.name,message:`Su agenda ha sido exitosamente asignada para el dia ${l[0]} a las ${l[1]}`,buttons:["Aceptar"]})).present(),this.router.navigateByUrl("/inicio",{replaceUrl:!0})}),error:n=>(0,d.mG)(this,void 0,void 0,function*(){yield t.dismiss(),yield(yield this.alertController.create({header:"Creaci\xf3n de agenda",message:"Hubo un error creando la agenda",buttons:["Aceptar"]})).present()})})})}crearDiagnostico(){return(0,d.mG)(this,void 0,void 0,function*(){if(this.diagnosticoForm.invalid)Object.keys(this.diagnosticoForm.controls).forEach(t=>{var n;null===(n=this.diagnosticoForm.get(t))||void 0===n||n.markAllAsTouched()});else{const t=yield this.loadingController.create();yield t.present(),this.detalleConsultaService.crearDiagnostico(this.transformarParaBackend(this.diagnosticoForm.value)).subscribe({next:n=>(0,d.mG)(this,void 0,void 0,function*(){yield t.dismiss(),yield(yield this.alertController.create({header:"Creaci\xf3n de diagn\xf3stico",message:"Creaci\xf3n de diagn\xf3stico exitoso",buttons:["Aceptar"]})).present(),this.router.navigateByUrl("/casos-medicos",{replaceUrl:!0})}),error:n=>(0,d.mG)(this,void 0,void 0,function*(){yield t.dismiss(),yield(yield this.alertController.create({header:"Creaci\xf3n de diagn\xf3stico",message:"Hubo un error creando el diagn\xf3stico",buttons:["Aceptar"]})).present()})})}})}transformarParaBackend(t){return{name_of_injury:t.nombreLesion,diagnosis:t.diagnostico,treatment:t.tratamiento,medical_case_uuid:this.casoMedicoId,doctor_uuid:this.authService.user.uuid}}get casoMedicoAceptado(){return this.consulta.get("casoMedicoAceptado")}get nombreLesion(){return this.diagnosticoForm.get("nombreLesion")}get diagnostico(){return this.diagnosticoForm.get("diagnostico")}get tratamiento(){return this.diagnosticoForm.get("tratamiento")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(I.z),e.Y36(s.qu),e.Y36(a.Br),e.Y36(a.HT),e.Y36(N),e.Y36(h.F0),e.Y36(U.e),e.Y36(h.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-detalle-consulta"]],decls:62,vars:44,consts:[["slot","start"],[3,"ngClass"],[1,"center","titulo-consulta"],["id","consulta-form",3,"formGroup"],[1,"input-group"],["formControlName","tipoLesion",1,"form-item",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],["formControlName","formaLesion",1,"form-item",3,"placeholder"],[1,"question-label"],["formControlName","numeroLesiones",1,"form-item",3,"placeholder"],["formControlName","distribucion",1,"form-item",3,"placeholder"],["placeholder","","formControlName","parteDelCuerpo"],[4,"ngIf"],["class","input-group",4,"ngIf"],[3,"value"],["slot","secondary"],["id","cancelar-button","color","danger","fill","solid","routerLink","/casos-medicos"],["slot","primary"],["id","aceptar-caso-button","color","primary","fill","solid",3,"click"],["id","explicacion",2,"text-align","center"],[1,"capitalize"],["id","diagnostico-form",3,"formGroup","ngSubmit"],["formControlName","nombreLesion",3,"autoGrow","placeholder"],["class","form-error",4,"ngIf"],["formControlName","diagnostico",3,"autoGrow","placeholder"],["formControlName","tratamiento",3,"autoGrow","placeholder"],[1,"form-error"],["id","crear-diagnostico-button","type","submit","color","primary","fill","solid"],[1,"center",2,"text-align","center"],["type","submit","expand","block",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"ion-buttons",0),e._UZ(6,"ion-menu-button"),e.qZA()()(),e.TgZ(7,"ion-content")(8,"div",1)(9,"div",2)(10,"strong"),e._uU(11),e.ALo(12,"translate"),e.qZA()(),e._UZ(13,"br"),e.TgZ(14,"form",3)(15,"div",4)(16,"ion-item")(17,"ion-label"),e._uU(18),e.ALo(19,"translate"),e.qZA()(),e.TgZ(20,"ion-item")(21,"ion-select",5),e.ALo(22,"translate"),e.YNc(23,O,2,2,"ion-select-option",6),e.qZA()(),e.TgZ(24,"div")(25,"ion-item")(26,"ion-label"),e._uU(27),e.ALo(28,"translate"),e.qZA()(),e.TgZ(29,"ion-item")(30,"ion-select",7),e.ALo(31,"translate"),e.YNc(32,M,2,2,"ion-select-option",6),e.qZA()()(),e.TgZ(33,"div")(34,"ion-item")(35,"ion-label",8),e._uU(36),e.ALo(37,"translate"),e.qZA()(),e.TgZ(38,"ion-item")(39,"ion-select",9),e.ALo(40,"translate"),e.YNc(41,J,2,2,"ion-select-option",6),e.qZA()()(),e.TgZ(42,"div")(43,"ion-item")(44,"ion-label",8),e._uU(45),e.ALo(46,"translate"),e.qZA()(),e.TgZ(47,"ion-item")(48,"ion-select",10),e.ALo(49,"translate"),e.YNc(50,Q,2,2,"ion-select-option",6),e.qZA()()(),e.TgZ(51,"div")(52,"ion-item")(53,"ion-label"),e._uU(54),e.ALo(55,"translate"),e.qZA()(),e.TgZ(56,"ion-item"),e._UZ(57,"ion-input",11),e.qZA()(),e.YNc(58,S,9,6,"ion-toolbar",12),e.qZA()(),e._UZ(59,"br"),e.YNc(60,K,32,29,"div",13),e.qZA()(),e.YNc(61,X,5,3,"ion-footer",12)),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,20,"detalleConsulta.titulo")),e.xp6(5),e.Q6J("ngClass",e.VKq(42,W,!n.isPhone)),e.xp6(3),e.hij("",e.lcZ(12,22,"detalleConsulta.consulta")," #1234"),e.xp6(3),e.Q6J("formGroup",n.consulta),e.xp6(4),e.Oqu(e.lcZ(19,24,"detalleConsulta.tipoLesion")),e.xp6(3),e.s9C("placeholder",e.lcZ(22,26,"detalleConsulta.placeHolderTipoLesion")),e.xp6(2),e.Q6J("ngForOf",n.appService.consulta.tiposDeLesion),e.xp6(4),e.Oqu(e.lcZ(28,28,"detalleConsulta.formaLesion")),e.xp6(3),e.s9C("placeholder",e.lcZ(31,30,"detalleConsulta.placeHolderFormaLesion")),e.xp6(2),e.Q6J("ngForOf",n.appService.consulta.formasDeLesiones),e.xp6(4),e.Oqu(e.lcZ(37,32,"detalleConsulta.numLesiones")),e.xp6(3),e.s9C("placeholder",e.lcZ(40,34,"detalleConsulta.placeHolderNumLesiones")),e.xp6(2),e.Q6J("ngForOf",n.appService.consulta.numeroDeLesiones),e.xp6(4),e.Oqu(e.lcZ(46,36,"detalleConsulta.distribucion")),e.xp6(3),e.s9C("placeholder",e.lcZ(49,38,"detalleConsulta.placeHolderdistribucion")),e.xp6(2),e.Q6J("ngForOf",n.appService.consulta.distribucionDeLaLesion),e.xp6(4),e.hij(" ",e.lcZ(55,40,"detalleConsulta.labelParteCuerpo")," "),e.xp6(4),e.Q6J("ngIf",!(n.isPhone||null!=n.casoMedicoAceptado&&n.casoMedicoAceptado.value)),e.xp6(2),e.Q6J("ngIf",null==n.casoMedicoAceptado?null:n.casoMedicoAceptado.value),e.xp6(1),e.Q6J("ngIf",n.isPhone&&(null==n.casoMedicoAceptado?null:n.casoMedicoAceptado.value)&&"DOCTOR"===n.tipoDiagnostico))},dependencies:[A.mk,A.sg,A.O5,s._Y,s.JJ,s.JL,a.YG,a.Sm,a.W2,a.fr,a.Gu,a.pK,a.Ie,a.Q$,a.fG,a.t9,a.n0,a.g2,a.wd,a.sr,a.QI,a.j9,a.YI,h.rH,s.sg,s.u,P.X$],styles:[".titulo-consulta[_ngcontent-%COMP%]{padding-top:25px}"]}),o})()}];let te=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild(ee),h.Bz]}),o})(),oe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[A.ez,s.u5,a.Pc,te,s.UX,P.aw]}),o})()}}]);