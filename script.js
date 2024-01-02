fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {
    let products = json.products;
    products.forEach((product) => {
        console.log(product);
        let productCard = document.createElement('div');
        let title = document.createElement('h1');
        let brand = document.createElement('h3');
        let description = document.createElement('p');
        let price = document.createElement('div');
        let img = document.createElement('img');
        title.innerHTML=`${product.title}`
        brand.innerHTML=`${product.brand}`
        description.innerHTML=`${product.description}`
        price.innerHTML=`${product.price}`
        img.setAttribute('src', product.thumbnail);
        img.style.width = '250px';
        img.style.height = '250px';
        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(brand);
        productCard.appendChild(price);
        productCard.appendChild(description);
        productsContainer.appendChild(productCard);
    });
}).catch(error=>{
    console.log(error);
})
function names(name){
    var nem = document.getElementById("name").value;
    var nowname = document.getElementById("nome");
    nowname.innerText = nem;
}
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculateResult() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  function validateInput(value) {
    document.getElementById('display').value = value.replace(/[^0-9+\-*/().]/g, '');
  }