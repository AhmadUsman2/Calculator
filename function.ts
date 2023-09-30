// export function sum (a:number , b:number) {
//     return a + b;
// }
// export function sub (a:number , b:number) {
//     return a - b;
// }
// export function mul (a:number , b:number) {
//     return a * b;
// }
// export function div (a:number , b:number) {
//     return a / b;
// }

let obj1 = {
    firstName:"Ali",
    display(){
        console.log(this.firstName);
        
    }
}

obj1.display();

class User {
    firstName: string
    lastName: string="Khan"
    constructor(aa:string){
        this.firstName=aa;
        
    }
    display(){
        console.log(this.firstName);
        console.log(this.lastName);

        
    }
}

const obj2 = new User ("Ahmad");
obj2.display()

const obj3 = new User ("Basit");
obj2.display()


console.log("Ali");
console.log("Ahmad");
console.log("Basit");
