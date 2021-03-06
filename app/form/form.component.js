"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var shared_service_1 = require('../services/shared.service');
var FormComponent = (function () {
    function FormComponent(fb, sharedService) {
        this.fb = fb;
        this.sharedService = sharedService;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.regexPatterns = this.sharedService.getRegexPatterns();
        this.user = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.regexPatterns.email)]]
        });
    };
    FormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
    };
    FormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "reactive-form",
            templateUrl: "form.component.html",
            styleUrls: ["form.component.css"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, shared_service_1.SharedService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map