function formatString(input: string, toUpper?: boolean): string {
    if(toUpper === true || toUpper == undefined){
        return input.toLocaleUpperCase();
    }
    else{
        return input.toLocaleLowerCase();
    }
}
const result = formatString("HELLO",false);
console.log(result);





function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(u => u.rating>=4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

const result2 = filterByRating(books)
console.log(result2);




function concatenateArrays<T>(...arrays: T[][]): T[]{
  const restul:T[]=[];
  for(const arr of arrays){
    restul.push(...arr)
  }
  return restul;
}

const result3= concatenateArrays([1, 2], [3, 4], [5]); 
console.log(result3);




class Vehicle {
   private make:string;
   public year:number;
    constructor(make: string, year: number) {
       this.make = make;
       this.year = year;
   }
   getInfo(){
    console.log(`Make: ${this.make}, Year: ${this.year}`);
   }
}

class Car extends Vehicle{
    private model:string;
    constructor(make:string, year:number,model:string){
        super(make,year)
        this.model=model
    }
    getModel(){
        console.log(`Model: ${this.model}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();




function processValue(value: string | number): string | number{
    if(typeof value === 'number'){
        return value*2;
    }
    else{
        return value.length;
    }
}
const retult5=processValue(10);
console.log(retult5);




interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null;
    }
    let mostexpensive = products[0]
    for(let i=1;i<products.length;i++){
        if(products[i].price>mostexpensive.price){
            mostexpensive=products[i]
        }
    }
    return mostexpensive;
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];
const result6 = getMostExpensiveProduct(products); 
console.log(result6);




enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend"
    }
    else{
        return "Weekday"
    }
}

console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));




async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

squareAsync(4).then(console.log);  
squareAsync(-3).catch(console.error); 