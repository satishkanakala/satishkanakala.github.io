const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDom = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDom = document.querySelector(".products-center");

let cart = [];
let buttonsDOM = [];

class Products {
    async getProducts() {
        try {
            let result = await fetch('Cart.json');
            let data = await result.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

class UI {
    displyProducts(products) {
        let result = '';
        products.forEach(product => {
            result += `
            <article class="product">
              <div class="img-container">
                  <img src=${product.img_url} class="product-img" alt="item">
              </div>
              <h3>${product.name}</h3>
              <h4>$${product.price}</h4>
              <button class="item-btn" data-id=${product.id}>
                <i class="fas fa-shopping-cart">Add to Cart</i>
            </button>
          </article>` ;
        });
        productsDom.innerHTML = result;
    }
    getBagButtons() {
        const buttons = [...document.querySelectorAll(".item-btn")];
        buttonsDOM = buttons;
        buttons.forEach((button) => {
            let id = button.dataset.id;
            console.log(id)
            let inCart = cart.find(item => item.id === id);
            if (inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener("click", event => {
                event.target.innerText = "In Cart";
                event.target.disabled = true;
                //get product from products
                let cartItem = { ...Storage.getProducts(id), amount: 1 };
                //add product to cart
                cart = [...cart, cartItem]
                //save cart in local storage
                Storage.saveCart(cart);
                //set cart values
                this.setCartValues(cart)
                //display cart item
                this.addCartItem(cartItem);
                // show the cart
                this.showCart();
            })
        })
    }
    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }
    addCartItem(cartItem) {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<img src=${cartItem.img_url} alt="item">
      <div>
          <h4>${cartItem.name}</h4>
          <h5>$${cartItem.price}</h5>
          <span class="remove-item" data-id=${cartItem.id}>remove</span>
      </div>
      <div>
          <i class="fas fa-chevron-up" data-id=${cartItem.id}></i>
          <p class="item-amount">${cartItem.amount}</p>
          <i class="fas fa-chevron-down" data-id=${cartItem.id}></i>
      </div>`;
      cartContent.appendChild(div);
    }
    showCart(){
        cartOverlay.classList.add('transparentBcg');
        cartDom.classList.add('showCart');
    }
    setUpApp(){
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);
        cartBtn.addEventListener('click',this.showCart);
        closeCartBtn.addEventListener('click',this.hideCart);
    }
    populateCart(cart){
    cart.forEach(item => this.addCartItem(item));
    }
    hideCart(){
        cartOverlay.classList.remove('transparentBcg');
        cartDom.classList.remove('showCart');
    }
    cartLogic(){
        clearCartBtn.addEventListener("click",  ()=> {
            this.clearCart();
        })
        cartContent.addEventListener("click", event => {
           if(event.target.classList.contains('remove-item')){
               let removeItem = event.target
               let id = removeItem.dataset.id;
               cartContent.removeChild(removeItem.parentElement.parentElement);
               this.removeItem(id);
           }
           else if(event.target.classList.contains('fa-chevron-up')){
               let addAmount = event.target;
               let id = addAmount.dataset.id;
               let tempItem = cart.find(item => item.id === id);
               tempItem.amount = tempItem.amount + 1;
               Storage.saveCart(cart);
               this.setCartValues(cart);
               addAmount.nextElementSibling.innerText = tempItem.amount;
           }
           else if(event.target.classList.contains('fa-chevron-down')){
            let lowerAmount = event.target;
            let id = lowerAmount.dataset.id;
            let tempItem = cart.find(item => item.id === id);
            tempItem.amount = tempItem.amount - 1;
            if(tempItem.amount > 0){
              Storage.saveCart(cart);
              this.setCartValues(cart);
              lowerAmount.previousElementSibling.innerText = tempItem.amount;
            }else{
               cartContent.removeChild(lowerAmount.parentElement.parentElement);
               this.removeItem(id);
            }
        }
        })
    }
    clearCart(){
        let cartItems = cart.map(item => item.id);
        cartItems.forEach(id => this.removeItem(id));
        while(cartContent.children.length>0){
            cartContent.removeChild(cartContent.children[0]);
        }
        this.hideCart();
    }
    removeItem(id){
     cart = cart.filter(item => item.id !== id);
     this.setCartValues(cart);
     Storage.saveCart(cart);
     let button = this.getSingleButton(id);
     button.disabled = false;
     button.innerHTML = `<i class="fas fa-shopping-cart"></i>Add to Cart`
    }
    getSingleButton(id){
     return buttonsDOM.find(button => button.dataset.id === id);
    }
}

//Local storage
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products))
    }
    static getProducts(id) {
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id);
    }
    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    ui.setUpApp();
    //get all products
    products.getProducts().then(products => {
        ui.displyProducts(products);
        Storage.saveProducts(products);
    }).then(() => {
        ui.getBagButtons();
        ui.cartLogic();
    });

})