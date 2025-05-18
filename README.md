What are the differences between interface and type in TypeScript?

=> interface and type are used to describe the shape of data, like what properties an object should have. But there are some key differences:
interface:
  1. Used to describe the shape of an object or a class.
  2. Can use extends to build on other interfaces
  3. We can declare the same interface more than once, and TypeScript will merge them

type:
  1. Used to describe any kind of type, like object, union, primitive, etc.
  2. Can combine with other types using & (and)
  3. We cannot declare the same type twice


 Example:
interface Person {
  name: string;
}

type Animal = {
  name: string;
}



 What is keyof in TypeScript?
 
 => keyof is a TypeScript keyword that gives you all the keys (property names) of an object as a type.
 
 Example:
type Car = {
  brand: string;
  year: number;
};

type CarKeys = keyof Car;
