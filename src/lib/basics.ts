// declaring a variable with a type
// we add the type next to the variable name using a colon : and then the type
let myName: string = "Daniel";
let myAge: number = 26;
let isBritish: boolean = false;
// the any type is used so the value can have any data type
let favThing: any = "biscuits";

let myArray: number[] = [1, 2, 3, 4, 5];
let myArray2: Array<number> = [1, 2, 3, 4, 5];
let myOtherArray: string[] = ["a", "b", "c", "d", "e"];

//declaring object types
let myIdentity: {
  name: string;
  age: number;
  isBritish: boolean;
  favBiscuits: string[]; // Array<string>
} = {
  name: "Daniel",
  age: 26,
  isBritish: false,
  favBiscuits: ["bourbon", "custard cream"],
};

//reusable types
// the keyword is type
type Identity = {
  name: string;
  age: number;
  isBritish: boolean;
  favBiscuits: string[];
  favThings: (string | number)[]; // Array<string | number>
  // optional chaining --> in case the workplace is missing in the object it will not throw an error when accessing the properties it will return undefined
  workPlace?: {
    name: string;
    location: string;
  };
};

let myIdentity2: Identity = {
  name: "Daniel",
  age: 26,
  isBritish: false,
  favBiscuits: ["bourbon", "custard cream"],
  favThings: ["biscuits", "tea", 25],
  workPlace: {
    name: "Prezzo",
    location: "Hull",
  },
};

//declaring functions
// we add the type next to the function name using a colon : and then the type
function add(a: number, b: number) {
  return a + b;
}

let result: number = add(1, 2); // 3
//! typescript will infer a data type, if you have not specified the type with annotation

let number = 1; // number
let string = "hello"; // string
let result2 = number + string;
console.log(result2); // 1hello
