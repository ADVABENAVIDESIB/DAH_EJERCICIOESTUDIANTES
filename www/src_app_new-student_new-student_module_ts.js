"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-student_new-student_module_ts"],{

/***/ 7635:
/*!***********************************************************!*\
  !*** ./src/app/new-student/new-student-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewStudentPageRoutingModule": () => (/* binding */ NewStudentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _new_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-student.page */ 4589);




const routes = [
    {
        path: '',
        component: _new_student_page__WEBPACK_IMPORTED_MODULE_0__.NewStudentPage
    }
];
let NewStudentPageRoutingModule = class NewStudentPageRoutingModule {
};
NewStudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewStudentPageRoutingModule);



/***/ }),

/***/ 1682:
/*!***************************************************!*\
  !*** ./src/app/new-student/new-student.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewStudentPageModule": () => (/* binding */ NewStudentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _new_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-student-routing.module */ 7635);
/* harmony import */ var _new_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-student.page */ 4589);







let NewStudentPageModule = class NewStudentPageModule {
};
NewStudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewStudentPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_new_student_page__WEBPACK_IMPORTED_MODULE_1__.NewStudentPage]
    })
], NewStudentPageModule);



/***/ }),

/***/ 4589:
/*!*************************************************!*\
  !*** ./src/app/new-student/new-student.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewStudentPage": () => (/* binding */ NewStudentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-student.page.html?ngResource */ 1195);
/* harmony import */ var _new_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-student.page.scss?ngResource */ 8637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/student.service */ 4339);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








let NewStudentPage = class NewStudentPage {
    constructor(studentService, fb, alertController, toastController) {
        this.studentService = studentService;
        this.fb = fb;
        this.alertController = alertController;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            carrera: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])],
            controlnumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[0-9]+$')])],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])],
            curp: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$")])],
            age: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(17), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[0-9]+')])],
            nip: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(9999)])],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z0-9-]{2,}$")])],
            photo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/https?:\/\/[\w\-\.]+\.\w{2,5}\/?\S*/)])]
        });
        this.validatorsMessages = {
            'controlnumber': [
                { type: 'required', message: "Número de control obligatorio" },
                { type: 'minlength', message: "Número de control debe ser de 8 dígitos" },
                { type: 'maxlength', message: "Número de control debe ser de 8 dígitos" },
                { type: 'pattern', message: "Número de control mal formado" }
            ],
            'name': [
                { type: 'required', message: "Nombre obligatorio" }
            ],
            'curp': [
                { type: 'required', message: "CURP obligatorio" },
                { type: 'pattern', message: "CURP mal formado" } //PATTERN
            ],
            'age': [
                { type: 'required', message: "Edad obligatoria" },
                { type: 'min', message: "Debes tener 17 años o más" },
                { type: 'pattern', message: "Ingresa sólo dígitos" }
            ],
            'nip': [
                { type: 'required', message: "NIP obligatorio" },
                { type: 'min', message: "Tu NIP debe tener mínimo 2 digitos" },
                { type: 'max', message: "Tu NIP debe tener máximo 4 digitos" }
            ],
            'email': [
                { type: 'required', message: "Email obligatorio" },
                { type: 'pattern', message: "Email mal formado" }
            ],
            'photo': [
                { type: 'required', message: "Foto obligatoria" },
                { type: 'pattern', message: "Foto mal formada" } //PATTERN
            ]
        };
    }
    presentAlertError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alerta',
                subHeader: 'Aviso: ',
                message: 'NO se guardo, ingrese todos los campos!',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    presentToast(position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'GUARDADO CORRECTAMENTE!',
                duration: 1500,
                position,
                color: 'success'
            });
            yield toast.present();
        });
    }
    newStudent() {
        if (this.myForm.get('name').value !== '') {
            this.student = {
                controlnumber: this.myForm.get('controlnumber').value,
                name: this.myForm.get('name').value,
                curp: this.myForm.get('curp').value,
                age: this.myForm.get('age').value,
                nip: this.myForm.get('nip').value,
                email: this.myForm.get('email').value,
                career: this.myForm.get('carrera').value,
                photo: this.myForm.get('photo').value,
            };
            this.studentService.newStudent(this.student);
            //this.presentAlert();
            this.presentToast("top");
            console.log(this.student);
        }
        else {
            console.log(this.student);
            this.presentAlertError();
        }
    }
};
NewStudentPage.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
NewStudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-new-student',
        template: _new_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewStudentPage);



/***/ }),

/***/ 8637:
/*!**************************************************************!*\
  !*** ./src/app/new-student/new-student.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".errormessage {\n  color: red;\n  text-align: right;\n  padding-right: 10px;\n  font-style: italic;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1zdHVkZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoibmV3LXN0dWRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ybWVzc2FnZXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 1195:
/*!**************************************************************!*\
  !*** ./src/app/new-student/new-student.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Nuevo estudiante</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <form [formGroup]=\"myForm\"> <!--este es el enlace -->\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Número de control</ion-label>\r\n            <ion-input formControlName=\"controlnumber\"></ion-input>\r\n          </ion-item>\r\n          <div>\r\n            <ng-container *ngFor=\"let item of validatorsMessages['controlnumber']\">\r\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('controlnumber').dirty || myForm.get('controlnumber').touched) && myForm.get('controlnumber').hasError(item.type)\">\r\n                {{item.message}}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre</ion-label>\r\n            <ion-input formControlName=\"name\"></ion-input>\r\n          </ion-item>\r\n          <div>\r\n            <ng-container *ngFor=\"let item of validatorsMessages['name']\">\r\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('name').dirty || myForm.get('name').touched)\r\n              &&myForm.get('name').hasError(item.type)\">\r\n                {{item.message}}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">CURP</ion-label>\r\n            <ion-input formControlName=\"curp\"></ion-input>\r\n          </ion-item>\r\n          <div>\r\n            <ng-container *ngFor=\"let item of validatorsMessages['curp']\">\r\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('curp').dirty || myForm.get('curp').touched)\r\n              &&myForm.get('curp').hasError(item.type)\">\r\n                {{item.message}}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Edad</ion-label>\r\n            <ion-input formControlName=\"age\"></ion-input>\r\n          </ion-item>\r\n          <div>\r\n            <ng-container *ngFor=\"let item of validatorsMessages['age']\">\r\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('age').dirty || myForm.get('age').touched)\r\n              &&myForm.get('age').hasError(item.type)\">\r\n                {{item.message}}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">NIP</ion-label>\r\n            <ion-input formControlName=\"nip\"></ion-input>\r\n          </ion-item>\r\n          <div>\r\n            <ng-container *ngFor=\"let item of validatorsMessages['nip']\">\r\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('nip').dirty || myForm.get('nip').touched)\r\n              &&myForm.get('nip').hasError(item.type)\">\r\n                {{item.message}}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Email</ion-label>\r\n            <ion-input formControlName=\"email\"></ion-input>\r\n          </ion-item>\r\n          <div>\r\n            <ng-container *ngFor=\"let item of validatorsMessages['email']\">\r\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('email').dirty || myForm.get('email').touched)\r\n              &&myForm.get('email').hasError(item.type)\">\r\n                {{item.message}}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-select formControlName=\"carrera\" placeholder=\"Selecciona carrera:\">\r\n                <ion-select-option value=\"IC\">Ingeniería civil</ion-select-option>\r\n                <ion-select-option value=\"IM\">Ingeniería mecatrónica</ion-select-option>\r\n                <ion-select-option value=\"ISC\">Ingenieria en sistemas computacionales</ion-select-option>\r\n                <ion-select-option value=\"IE\">Ingeniería eléctrica</ion-select-option>\r\n                <ion-select-option value=\"IBQ\">Ingeniería bioquímica</ion-select-option>\r\n                <ion-select-option value=\"IQ\">Ingenieria química</ion-select-option>\r\n                <ion-select-option value=\"IGE\">Ingeniería en gestión empresarial</ion-select-option>\r\n                <ion-select-option value=\"LA\">Licenciatura en administración</ion-select-option>\r\n                <ion-select-option value=\"ARQ\">Licenciatura en arquitectura</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Foto</ion-label>\r\n            <ion-input formControlName=\"photo\"></ion-input>\r\n          </ion-item>\r\n          <div>\r\n            <ng-container *ngFor=\"let item of validatorsMessages['photo']\">\r\n              <div class=\"errormessage\" *ngIf=\"(myForm.get('photo').dirty || myForm.get('photo').touched)\r\n              &&myForm.get('photo').hasError(item.type)\">\r\n                {{item.message}}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-button class=\"ion-margin\"  (click)=\"newStudent()\" expand=\"block\" fill=\"clear\" shape=\"round\" [routerLink]=\"['/home']\">\r\n        Agregar Estudiante\r\n      </ion-button>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_new-student_new-student_module_ts.js.map