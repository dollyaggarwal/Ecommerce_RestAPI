export default class ProductModel{
    constructor(id, name, desc, imageUrl, category, price, sizes){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.category = category;
        this.price = price;
        this.sizes = sizes;
    }

    static get(id){
        const product = products.find(i => i.id == id);
        return product;

    }
    static getAll(){
        return  products;
    }
    static add(product){
        product.id = products.length + 1;
        products.push(product);
        return product;
    }

    static filter(minPrice, maxPrice, category) {
        const result = products.filter((product) =>{
            return(
                (!minPrice || product.price >= minPrice) &&
                (!maxPrice || product.price <= maxPrice)&&
                (!category || product.category == category)
            );
        });
        return result;
    }
}

var products =
[ new ProductModel(1,'Product1', 'Description for Product1','https://m.media-amazon.com/images/I/81+GIkwqLIL._SX679_.jpg', 'Category1',185, ['M','XL']
),
 
new ProductModel(2,'Product2', 'Description for Product2', 'https://m.media-amazon.com/images/I/41QAcck4dfL._SX300_SY300_QL70_FMwebp_.jpg', 'Category2',20, ['S','XL']
),
 
new ProductModel(3,'Product3', 'Description for Product3', 'https://m.media-amazon.com/images/I/61B84NiWabL._SY522_.jpg', 'Category3',30, ['S','M','L']
),
 
new ProductModel(4,'Product4', 'Description for Product4', 'https://m.media-amazon.com/images/I/611bwwXTx7L._SY879_.jpg','Category4',50, ['S','XL']
),
];