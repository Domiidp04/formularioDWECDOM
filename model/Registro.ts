export class Registro{
    
        constructor(
            public Name: string,
            public lastNameOne: string,
            public email: string,
            public Input: string,
            public lastNameTwo?: string,
        ) {}
    
        toString(): string {
            return `Name: ${this.Name}\nlastNameOne: ${this.lastNameOne}\nlastNameTwo: ${this.lastNameTwo}\nEmail: ${this.email}\nPassword: ${this.Input}`;
        }
    
}