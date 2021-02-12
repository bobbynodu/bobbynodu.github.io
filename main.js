const productpageNav = document.querySelector('productpagenav');
const cartpageNav = document.querySelector('cartpagenav');
const cartButton = document.querySelector('fa-shopping-cart')



function createProductItem() {
    return `<div class="container">
    <div>
        <img class="item" src="vibegg.jpg">
    </div>
    <div class="item">
        <h2>10X Silicone Vibrating Egg Black</h2>
        <span style="color:red"><b>&#8364 49.40</b></span> <br>
        <span style="color:green">In stock</span>
        <p>
            This powerful vibrating egg features a deep indentation to provide a satisfying edge meant to enhance the strong buzzing from this silky smooth delight! Enjoy 10 powerful vibrating functions, controllable with the included wireless remote control. The
            small size of this vibe hides its remarkable strength, perfect for a solo sesh to end your day or with your lover to add some exciting buzzing to your intimate moments together! The included wireless remote controller lets you play from
            a distance - stuff your partners pants with this velvety egg and buzz them when they least expect it! Play around the home, in the car, or even in public if you dare. The wireless controller lets you control the egg during sex with ease
            and even makes solo play a breeze if it's just you tonight. Safe and convenient, this silicone egg from Bang! features a sturdy pull cord for easy retrieval, and is constructed with phthalate-free silicone for a body-safe experience. The
            IPX5 waterproof design also makes this egg shower friendly and easy to clean with warm water and mild soap. USB rechargeable so the fun never ends plug in the included USB charging cable for a quick charge so you can play as soon as the
            mood strikes!
        </p>
        <div class="qty">Quantity:</div>
        <input id="numbercount" type="number" name="quantity" min="1" value="0" max="10"><br>
        <button onclick="document.location='Productcart.html'" id="addcart" type="button" title="add to cart"><span>Add To Cart</span></button> <br>
        <button id="saveitem" type="button" title="Save Item"><span>Save Item</span></button>
    </div>
</div>`;

}

function onclick() {
    productpageNav.innerHTML = createProductItem();
}