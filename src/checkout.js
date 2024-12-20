var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
    var node;
    for (var i = 0; i < this.childNodes.length-1; i++)
        node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
        node.classList.add('visible');
        activeDropdown = node; 
    };
})

window.onclick = function(e) {
    console.log(e.target.tagName)
    console.log('dropdown');
    console.log(activeDropdown)
    if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
        document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
                e.target.innerHTML = document.getElementById('current-card').innerHTML;
        document.getElementById('current-card').innerHTML = 'Master Card';
    }
else if (e.target.innerHTML === 'American Express') {
        document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
                e.target.innerHTML = document.getElementById('current-card').innerHTML;
        document.getElementById('current-card').innerHTML = 'American Express';      
    }
else if (e.target.innerHTML === 'Visa') {
        document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
                e.target.innerHTML = document.getElementById('current-card').innerHTML;
        document.getElementById('current-card').innerHTML = 'Visa';
    }
}
else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
}
}

let cart = JSON.parse(localStorage.getItem('cart'))
console.log(cart)
let orderInfoElement = document.querySelector('.order-info-content')

orderInfoElement.innerHTML = cart.map(item =>
    `<table class='order-table'>
            <tbody>
                <tr>
                <td><img src='${item.image}' class='full-width'></img>
                </td>
                <td>
                    <br> <span class='thin'>${item.title}</span>
                </td>
            </tr>
            <tr>
                <td>
                <div class='price'>$${item.price}</div>
                </td>
            </tr>
            </tbody>
        </table>
        <div class='line'></div>`
).join('')

let orderTotalPrice = document.getElementById('totalPrice')

const array1 = [1, 2, 3, 4];

const sumWithInitial = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price, 0,
);

console.log(sumWithInitial)

orderTotalPrice.innerHTML = `<h3 style = ""> Total Price <span>$${sumWithInitial.toFixed(2)}</span></h3>`

gtag('event', 'loaded_page', {
    'app_name': 'shopshopshop',
    'page_name': 'checkout'
  });