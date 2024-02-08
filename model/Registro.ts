export class Registro{
    
        constructor(
            public Name: string,
            public lastNameOne: string,
            public email: string,
            public Input: string,
            public lastNametwo?: string,
        ) {}
    
        toString(): string {
            return `Name: ${this.Name}\nlastNameOne: ${this.lastNameOne}\nEmail: ${this.email}\nPassword: ${this.Input}`;
        }
    
}