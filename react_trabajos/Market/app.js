const products=[
    {  
        name:"Meat",
        price:"1$",
        quantity:10,
        image:"./Images/Meat.jpeg",
    },
    {  
        name:"Potato",
        price:"1$",
        quantity:10,
        image:"./Images/potato.jpeg",
    },
    {  
        name:"Rice",
        price:"1$",
        quantity:10,
        image:"./Images/rice.jpeg",
    },
    {  
        name:"Milk",
        price:"1$",
        quantity:10,
        image:"./Images/milk.jpeg",
    }
];
const header = document.getElementById("header");
const mainContent = document.getElementById("main-container");

//*******Header*****



// name, price, quantity, image 

const createCard = (product)=>{
    const cardProduct = document.createElement("div");
    const nameProduct = document.createElement("h2");
    const priceProduct = document.createElement("p");
    const quantityProduct = document.createElement("p");
    const imageProduct = document.createElement("img");
    const btnAddToCard = document.createElement("button");


    nameProduct.textContent = product.name;
    priceProduct.textContent = `Price: ${product.price}`;
    quantityProduct.textContent = `Quantity: ${product.quantity}` ;
    imageProduct.setAttribute("src", product.image);
    imageProduct.setAttribute("alt", product.image);
    btnAddToCard.textContent = "Add to Cart"

    mainContent.classList.add("main-container");
    cardProduct.classList.add("card");
    imageProduct.classList.add("image-product");  
    priceProduct.classList.add("price-product");
    quantityProduct.classList.add("quantity-product");
    btnAddToCard.classList.add("btnAddToCard");

    cardProduct.appendChild(nameProduct);
    cardProduct.appendChild(imageProduct);
    cardProduct.appendChild(priceProduct);
    cardProduct.appendChild(quantityProduct);
    cardProduct.appendChild(btnAddToCard);
    
    
    mainContent.appendChild(cardProduct);
}


function renderCards(){
    products.forEach((element,i)=>{
        createCard(element)
    })
}

window.addEventListener("DOMContentLoaded", renderCards)
