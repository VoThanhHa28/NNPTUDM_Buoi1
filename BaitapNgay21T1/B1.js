//1. Khai báo Constructor function Product để tạo đối tượng sản phẩm.  
let Product = function (id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

//2. Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau.
let products = [
    new Product(1, "Laptop", 35000000, 10, "Electronics", true),
    new Product(2, "Smartphone", 15000000, 25, "Electronics", true),
    new Product(3, "Desk Chair", 1200000, 15, "Furniture", false),
    new Product(4, "Book", 200000, 50, "Accessories", true),
    new Product(5, "Headphones", 5000000, 30, "Accessories", true),
    new Product(6, "Coffee Maker", 2000000, 5, "Appliances", false)
];

//3. Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm.
let productSummaries = products.map(product => ({
    name: product.name,
    price: product.price
}));

//4. Lọc ra các sản phẩm còn hàng trong kho (quantity > 0).
let availableProducts = products.filter(product => product.quantity > 0);

//5. Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không.
let hasExpensiveProduct = products.some(product => product.price > 30000000);

//6. Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không.
let accessories = products.filter(p => p.category === "Accessories");
let isAllAccessoriesAvailable = accessories.every(p => p.isAvailable === true);

//7. Tính tổng giá trị kho hàng. Giá trị kho = price * quantity.
let totalInventoryValue = products.reduce((total, product) => total + (product.price * product.quantity), 0);

//8. Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái.
for (const product of products) {
    console.log(`${product.name} - ${product.category} - ${product.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}
// Câu 9: Dùng for...in để: In ra tên thuộc tính và In ra giá trị tương ứng 
for (const product of products) { 
    console.log("--- Thông tin sản phẩm ---");
    for (const key in product) {
        console.log(`${key}: ${product[key]}`);
    }
}

//10. Lấy danh sách tên các sản phẩm đang bán và còn hàng.
let activeProductsNames = products
    .filter(product => product.isAvailable && product.quantity > 0)
    .map(product => product.name);