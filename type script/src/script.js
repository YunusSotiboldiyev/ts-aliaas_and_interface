var student = {
    name: 'Yunus',
    age: 16,
    grade: 3
};
var teacher = {
    name: 'Ms. Dilmurod',
    age: 35,
    subject: 'Programme'
};
console.log('Student:', student);
console.log('Teacher:', teacher);
var account1 = {
    id: 1,
    status: "active"
};
var account2 = {
    id: "A123",
    status: "pending"
};
console.log('Account 1:', account1);
console.log('Account 2:', account2);
function calculateDiscountedPrice(product, discountPercentage) {
    var discount = (product.price * discountPercentage) / 100;
    return product.price - discount;
}
var product = {
    name: 'Laptop',
    price: 1000,
    inStock: true
};
var discountedPrice = calculateDiscountedPrice(product, 10);
console.log("Original Price: $".concat(product.price));
console.log("Discounted Price: $".concat(discountedPrice));
