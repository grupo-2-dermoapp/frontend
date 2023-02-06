"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5522],{4908:(D,f,s)=>{s.r(f),s.d(f,{RegistroMedicoPageModule:()=>V});var g=s(6895),l=s(433),t=s(5035),p=s(1407),c=s(655),e=s(8256),_=s(2340),v=s(529);const h=_.N.API.API_URL+_.N.API.API_REGISTRO_MEDICO_ENDPOINT;let M=(()=>{class a{constructor(i){this.http=i}registro(i,n){const r=new FormData;return console.log(i),console.log(n),r.append("medical_license",n),r.append("email",i.email),r.append("names",i.nombre),r.append("nationality",i.nacionalidad),r.append("speciality",i.especialidad),r.append("password",i.password),console.log(JSON.stringify(r)),this.http.post(h,r)}}return a.\u0275fac=function(i){return new(i||a)(e.LFG(v.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();const b=["inputFiles"];function Z(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"El nombre es requerido"),e.qZA())}function T(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"El nombre necesita un m\xednimo de 4 caracteres"),e.qZA())}function A(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"El nombre necesita un m\xe1ximo de 60 caracteres"),e.qZA())}function C(a,o){if(1&a&&(e.TgZ(0,"div",19),e.YNc(1,Z,2,0,"span",20),e.YNc(2,T,2,0,"span",20),e.YNc(3,A,2,0,"span",20),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.nombre||null==i.nombre.errors?null:i.nombre.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.nombre||null==i.nombre.errors?null:i.nombre.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==i.nombre||null==i.nombre.errors?null:i.nombre.errors.maxlength)}}function R(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"El correo es requerido"),e.qZA())}function P(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"El correo es inv\xe1lido"),e.qZA())}function q(a,o){if(1&a&&(e.TgZ(0,"div",19),e.YNc(1,R,2,0,"span",20),e.YNc(2,P,2,0,"span",20),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.email||null==i.email.errors?null:i.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.email||null==i.email.errors?null:i.email.errors.email)}}function w(a,o){if(1&a&&(e.TgZ(0,"ion-select-option",21),e._uU(1),e.qZA()),2&a){const i=o.$implicit;e.Q6J("value",i),e.xp6(1),e.Oqu(i)}}function I(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"La nacionalidad es requerida"),e.qZA())}function y(a,o){if(1&a&&(e.TgZ(0,"div",19),e.YNc(1,I,2,0,"span",20),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.nacionalidad||null==i.nacionalidad.errors?null:i.nacionalidad.errors.required)}}function N(a,o){if(1&a&&(e.TgZ(0,"ion-select-option",21),e._uU(1),e.qZA()),2&a){const i=o.$implicit;e.Q6J("value",i.id),e.xp6(1),e.hij(" ",i.value,"")}}function U(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"La especialidad es requerida"),e.qZA())}function S(a,o){if(1&a&&(e.TgZ(0,"div",19),e.YNc(1,U,2,0,"span",20),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.especialidad||null==i.especialidad.errors?null:i.especialidad.errors.required)}}function J(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"La licencia medica es requerida"),e.qZA())}function x(a,o){if(1&a&&(e.TgZ(0,"div",19),e.YNc(1,J,2,0,"span",20),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.licenciaMedica||null==i.licenciaMedica.errors?null:i.licenciaMedica.errors.required)}}function F(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"La contrase\xf1a es requerida"),e.qZA())}function E(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"La contrase\xf1a nombre necesita un m\xednimo de 4 caracteres"),e.qZA())}function Y(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"La contrase\xf1a necesita un m\xe1ximo de 60 caracteres"),e.qZA())}function L(a,o){if(1&a&&(e.TgZ(0,"div",19),e.YNc(1,F,2,0,"span",20),e.YNc(2,E,2,0,"span",20),e.YNc(3,Y,2,0,"span",20),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.password||null==i.password.errors?null:i.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.password||null==i.password.errors?null:i.password.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==i.password||null==i.password.errors?null:i.password.errors.maxlength)}}function Q(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"La contrase\xf1a es requerida"),e.qZA())}function B(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"La contrase\xf1a necesita un m\xednimo de 4 caracteres"),e.qZA())}function k(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"La contrase\xf1a necesita un m\xe1ximo de 60 caracteres"),e.qZA())}function G(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"La contrase\xf1as deben coincidir"),e.qZA())}function O(a,o){if(1&a&&(e.TgZ(0,"div",19),e.YNc(1,Q,2,0,"span",20),e.YNc(2,B,2,0,"span",20),e.YNc(3,k,2,0,"span",20),e.YNc(4,G,2,0,"span",20),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",null==i.passwordConfirmation||null==i.passwordConfirmation.errors?null:i.passwordConfirmation.errors.required),e.xp6(1),e.Q6J("ngIf",null==i.passwordConfirmation||null==i.passwordConfirmation.errors?null:i.passwordConfirmation.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==i.passwordConfirmation||null==i.passwordConfirmation.errors?null:i.passwordConfirmation.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==i.passwordConfirmation||null==i.passwordConfirmation.errors?null:i.passwordConfirmation.errors.confirmedValidator)}}const z=[{path:"",component:(()=>{class a{constructor(i,n,r,d,m){this.fb=i,this.alertController=n,this.router=r,this.loadingController=d,this.registroMedicoService=m,this.registro=this.fb.group({nombre:["",[l.kI.required,l.kI.minLength(4),l.kI.maxLength(60)]],email:["",[l.kI.required,l.kI.email]],nacionalidad:[null,[l.kI.required]],especialidad:[null,[l.kI.required]],licenciaMedica:[null,[l.kI.required]],password:["",[l.kI.required,l.kI.minLength(6),l.kI.maxLength(24)]],passwordConfirmation:["",[l.kI.required,l.kI.minLength(6),l.kI.maxLength(24)]]},{validator:this.confirmedValidator("password","passwordConfirmation")})}registrarse(){return(0,c.mG)(this,void 0,void 0,function*(){if(this.registro.invalid)Object.keys(this.registro.controls).forEach(i=>{var n;null===(n=this.registro.get(i))||void 0===n||n.markAllAsTouched()});else{const i=yield this.loadingController.create();yield i.present(),this.registroMedicoService.registro(this.registro.value,this.file).subscribe({next:n=>(0,c.mG)(this,void 0,void 0,function*(){yield i.dismiss(),yield(yield this.alertController.create({header:"Registro correcto",message:"Gracias por registrarse en DermoApp",buttons:["Aceptar"]})).present(),this.router.navigateByUrl("/login",{replaceUrl:!0})}),error:n=>(0,c.mG)(this,void 0,void 0,function*(){yield i.dismiss(),yield(yield this.alertController.create({header:"Registro fallido",message:n.error.error,buttons:["Aceptar"]})).present()})})}})}onFileChange(i){return(0,c.mG)(this,void 0,void 0,function*(){const{files:n}=i.target;let r="Archivo ajuntado correctamente";n.length>1?r="Solo se puede adjuntar un archivo.":0===n[0].size?r="Archivo corrupto o inv\xe1lido":"application/pdf"!==n[0].type?r="El archivo tiene que tener extenxi\xf3n PDF.":1==n.length&&(this.file=n[0]),yield(yield this.alertController.create({header:"Agregar licencia medica",message:r,buttons:["Aceptar"]})).present()})}attachFiles(){this.inputFiles.nativeElement.click()}get nombre(){return this.registro.get("nombre")}get email(){return this.registro.get("email")}get nacionalidad(){return this.registro.get("nacionalidad")}get especialidad(){return this.registro.get("especialidad")}get licenciaMedica(){return this.registro.get("licenciaMedica")}get password(){return this.registro.get("password")}get passwordConfirmation(){return this.registro.get("passwordConfirmation")}get nacionalidades(){return["Afganist\xe1n","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiy\xe1n","Bahamas","Banglad\xe9s","Barbados","Bar\xe9in","B\xe9lgica","Belice","Ben\xedn","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brun\xe9i","Bulgaria","Burkina Faso","Burundi","But\xe1n","Cabo Verde","Camboya","Camer\xfan","Canad\xe1","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos \xc1rabes Unidos","Eritrea","Eslovaquia","Eslovenia","Espa\xf1a","Estados Unidos","Estonia","Etiop\xeda","Filipinas","Finlandia","Fiyi","Francia","Gab\xf3n","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bis\xe1u","Hait\xed","Honduras","Hungr\xeda","India","Indonesia","Irak","Ir\xe1n","Irlanda","Islandia","Islas Marshall","Islas Salom\xf3n","Israel","Italia","Jamaica","Jap\xf3n","Jordania","Kazajist\xe1n","Kenia","Kirguist\xe1n","Kiribati","Kuwait","Laos","Lesoto","Letonia","L\xedbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Mal\xed","Malta","Marruecos","Mauricio","Mauritania","M\xe9xico","Micronesia","Moldavia","M\xf3naco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","N\xedger","Nigeria","Noruega","Nueva Zelanda","Om\xe1n","Pa\xedses Bajos","Pakist\xe1n","Palaos","Palestina","Panam\xe1","Pap\xfaa Nueva Guinea","Paraguay","Per\xfa","Polonia","Portugal","Reino Unido","Rep\xfablica Centroafricana","Rep\xfablica Checa","Rep\xfablica de Macedonia","Rep\xfablica del Congo","Rep\xfablica Democr\xe1tica del Congo","Rep\xfablica Dominicana","Rep\xfablica Sudafricana","Ruanda","Ruman\xeda","Rusia","Samoa","San Crist\xf3bal y Nieves","San Marino","San Vicente y las Granadinas","Santa Luc\xeda","Santo Tom\xe9 y Pr\xedncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sud\xe1n","Sud\xe1n del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikist\xe1n","Timor Oriental","Togo","Tonga","Trinidad y Tobago","T\xfanez","Turkmenist\xe1n","Turqu\xeda","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekist\xe1n","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"]}get especialidades(){return[{id:1,value:"Dermatolog\xeda pedi\xe1trica"},{id:2,value:"Adulto mayor"},{id:3,value:"Oncolog\xeda"},{id:4,value:"Otra"}]}confirmedValidator(i,n){return r=>{var d;const u=r.controls[n];u.errors&&(null===(d=u.errors)||void 0===d||!d.confirmedValidator)||u.setErrors(r.controls[i].value!==u.value?{confirmedValidator:!0}:null)}}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(l.qu),e.Y36(t.Br),e.Y36(p.F0),e.Y36(t.HT),e.Y36(M))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-registro-medico"]],viewQuery:function(i,n){if(1&i&&e.Gf(b,5),2&i){let r;e.iGM(r=e.CRH())&&(n.inputFiles=r.first)}},decls:51,vars:12,consts:[["padding",""],[1,"center","titulo-registro"],[1,"web-registro"],[3,"formGroup","ngSubmit"],[1,"input-group"],["type","text","placeholder","Nombre","formControlName","nombre"],["class","form-error",4,"ngIf"],["type","email","placeholder","Email","formControlName","email"],["formControlName","nacionalidad","placeholder","Seleccione nacionalidad"],[3,"value",4,"ngFor","ngForOf"],["formControlName","especialidad","placeholder","Seleccione especialidad"],["for","file"],["formControlName","licenciaMedica","id","file","type","file","name","pdf","formControlName","licenciaMedica",2,"display","none",3,"change"],["inputFiles",""],["type","button","expand","block",3,"disabled","click"],["type","password","placeholder","Password","formControlName","password"],["type","password","placeholder","Password","formControlName","passwordConfirmation"],[1,"center","boton-registro"],["id","register-button","type","submit","expand","block"],[1,"form-error"],[4,"ngIf"],[3,"value"]],template:function(i,n){1&i&&(e.TgZ(0,"ion-content",0)(1,"h1",1),e._uU(2," Editar informaci\xf3n personal "),e.qZA(),e.TgZ(3,"div",2)(4,"form",3),e.NdJ("ngSubmit",function(){return n.registrarse()}),e.TgZ(5,"div",4)(6,"ion-item")(7,"ion-label"),e._uU(8,"Nombre"),e.qZA(),e._UZ(9,"ion-input",5),e.qZA(),e.YNc(10,C,4,3,"div",6),e.TgZ(11,"ion-item")(12,"ion-label"),e._uU(13,"Email"),e.qZA(),e._UZ(14,"ion-input",7),e.qZA(),e.YNc(15,q,3,2,"div",6),e.TgZ(16,"ion-item")(17,"ion-label"),e._uU(18,"Nacionalidad"),e.qZA(),e.TgZ(19,"ion-item")(20,"ion-select",8),e.YNc(21,w,2,2,"ion-select-option",9),e.qZA()()(),e.YNc(22,y,2,1,"div",6),e.TgZ(23,"ion-item")(24,"ion-label"),e._uU(25,"Especialidad"),e.qZA(),e.TgZ(26,"ion-item")(27,"ion-select",10),e.YNc(28,N,2,2,"ion-select-option",9),e.qZA()()(),e.YNc(29,S,2,1,"div",6),e.TgZ(30,"ion-item")(31,"ion-label",11),e._uU(32,"Licenia Medica"),e.qZA(),e.TgZ(33,"input",12,13),e.NdJ("change",function(d){return n.onFileChange(d)}),e.qZA(),e.TgZ(35,"ion-button",14),e.NdJ("click",function(){return n.attachFiles()}),e._uU(36),e.qZA()(),e.YNc(37,x,2,1,"div",6),e.TgZ(38,"ion-item")(39,"ion-label"),e._uU(40,"Contrase\xf1a"),e.qZA(),e._UZ(41,"ion-input",15),e.qZA(),e.YNc(42,L,4,3,"div",6),e.TgZ(43,"ion-item")(44,"ion-label"),e._uU(45,"Confirmar Contrase\xf1a"),e.qZA(),e._UZ(46,"ion-input",16),e.qZA(),e.YNc(47,O,5,4,"div",6),e.qZA(),e.TgZ(48,"div",17)(49,"ion-button",18),e._uU(50," Registrarse "),e.qZA()()()()()),2&i&&(e.xp6(4),e.Q6J("formGroup",n.registro),e.xp6(6),e.Q6J("ngIf",((null==n.nombre?null:n.nombre.dirty)||(null==n.nombre?null:n.nombre.touched))&&(null==n.nombre?null:n.nombre.errors)),e.xp6(5),e.Q6J("ngIf",((null==n.email?null:n.email.dirty)||(null==n.email?null:n.email.touched))&&(null==n.email?null:n.email.errors)),e.xp6(6),e.Q6J("ngForOf",n.nacionalidades),e.xp6(1),e.Q6J("ngIf",((null==n.nacionalidad?null:n.nacionalidad.dirty)||(null==n.nacionalidad?null:n.nacionalidad.touched))&&(null==n.nacionalidad?null:n.nacionalidad.errors)),e.xp6(6),e.Q6J("ngForOf",n.especialidades),e.xp6(1),e.Q6J("ngIf",((null==n.especialidad?null:n.especialidad.dirty)||(null==n.especialidad?null:n.especialidad.touched))&&(null==n.especialidad?null:n.especialidad.errors)),e.xp6(6),e.Q6J("disabled",n.file),e.xp6(1),e.hij(" ",n.file?n.file.name:"Agregar soporte"," "),e.xp6(1),e.Q6J("ngIf",((null==n.licenciaMedica?null:n.licenciaMedica.dirty)||(null==n.licenciaMedica?null:n.licenciaMedica.touched))&&(null==n.licenciaMedica?null:n.licenciaMedica.errors)),e.xp6(5),e.Q6J("ngIf",((null==n.password?null:n.password.dirty)||(null==n.password?null:n.password.touched))&&(null==n.password?null:n.password.errors)),e.xp6(5),e.Q6J("ngIf",((null==n.passwordConfirmation?null:n.passwordConfirmation.dirty)||(null==n.passwordConfirmation?null:n.passwordConfirmation.touched))&&(null==n.passwordConfirmation?null:n.passwordConfirmation.errors)))},dependencies:[g.sg,g.O5,l._Y,l.Fj,l.JJ,l.JL,t.YG,t.W2,t.pK,t.Ie,t.Q$,t.t9,t.n0,t.QI,t.j9,l.sg,l.u],styles:[".web-registro[_ngcontent-%COMP%]{max-width:860px;text-align:center;margin:auto;width:60%;padding:10px}.titulo-registro[_ngcontent-%COMP%], .boton-registro[_ngcontent-%COMP%]{padding-top:96px}"]}),a})()}];let j=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.Bz.forChild(z),p.Bz]}),a})(),V=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.ez,l.u5,t.Pc,j,l.UX]}),a})()}}]);