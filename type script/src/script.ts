//1-vazifa
interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    grade: number;
}

interface Teacher extends Person {
    subject: string;
}


const student: Student = {
    name: 'Yunus',
    age: 16,
    grade: 3
};

const teacher: Teacher = {
    name: 'Ms. Dilmurod',
    age: 35,
    subject: 'Programme'
};

console.log('Student:', student);
console.log('Teacher:', teacher);

//2-vazifa

type ID = number | string;
type Status = "active" | "inactive" | "pending";

type Account = {
    id: ID;
    status: Status;
};

const account1: Account = {
    id: 1,
    status: "active"
};

const account2: Account = {
    id: "A123",
    status: "pending"
};

console.log('Account 1:', account1);
console.log('Account 2:', account2);
//3-vazifa
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

function calculateDiscountedPrice(product: Product, discountPercentage: number): number {
    const discount = (product.price * discountPercentage) / 100;
    return product.price - discount;
}

const product: Product = {
    name: 'Laptop',
    price: 1000,
    inStock: true
};

const discountedPrice = calculateDiscountedPrice(product, 10); 
console.log(`Original Price: $${product.price}`);
console.log(`Discounted Price: $${discountedPrice}`);
