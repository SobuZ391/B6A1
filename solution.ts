const formatValue =(input: string |number| boolean)=>{
    if(typeof input ==='string'){
            return input.toUpperCase();
    }
    else if(typeof input ==="number"){
        return input * 10;
    }
    else if(typeof input ==="boolean"){
        return !input;
    }
}

const getLength=(input: string | any[])=>{
    if(typeof input ==="string"){
        return input.length;
    }
    if(Array.isArray(input)){
        return input.length;
    }
}

class Person{
    name:string;
    age:number;
    
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getDetails(){
        return (`'Name: ${this.name}, Age: ${this.age}'`)
    }
}

type BookRating = {
  title: string;
  rating: number;
};

const filterByRating=(booksRating: BookRating[]): BookRating[] => {
  return booksRating.filter(book => book.rating >= 4);
}

type activeUser={
    id:number,
    name:string,
    email:string,
    isActive:boolean
}

function filterActiveUsers(users:activeUser[]):activeUser[]{
    return users.filter(user=>user.isActive=== true);
}

interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

const printBookDetails=(book:Book)=>{
    if(book.isAvailable ===true){
        console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: Yes`)
    }
    else{
         console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: No`)
    }
}




function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {

  const result: (string | number)[] = [];
  let i = 0;


  const isDuplicate = (value: string | number): boolean => {
    for (const existing of result) {    
      if (existing === value) {          
        return true;
      }
    }
    return false;
  };


  for (const item of arr1) {
    if (!isDuplicate(item)) {
      result[i] = item;
      i++;
    }
  }


  for (const item of arr2) {
    if (!isDuplicate(item)) {
      result[i] = item;
      i++;
    }
  }

  return result;
}




type Product={
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}

const calculateTotalPrice=(products:Product[]):number=>{
    return products.reduce((total,product)=>{
        let productTotal=product.price *product.quantity;
        if(product.discount){
            productTotal = productTotal - (productTotal * product.discount / 100);
        }
        return total + productTotal;
    },0)

}
