let cart = [];
let total = 0;

function order(name, price){
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart(){
    const cartList = document.getElementById("cart-list");
    const totalEl = document.getElementById("total");
    cartList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rs.${item.price}`;
        cartList.appendChild(li);
    });
    totalEl.textContent = total.toFixed(2);
}