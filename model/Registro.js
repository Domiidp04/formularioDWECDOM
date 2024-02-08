"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
var Registro = /** @class */ (function () {
    function Registro(Name, lastNameOne, email, Input, lastNametwo) {
        this.Name = Name;
        this.lastNameOne = lastNameOne;
        this.email = email;
        this.Input = Input;
        this.lastNametwo = lastNametwo;
    }
    Registro.prototype.toString = function () {
        return "Name: ".concat(this.Name, "\nlastNameOne: ").concat(this.lastNameOne, "\nEmail: ").concat(this.email, "\nPassword: ").concat(this.Input);
    };
    return Registro;
}());
exports.Registro = Registro;
