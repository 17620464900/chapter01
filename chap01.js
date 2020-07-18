function factorial (n) {
    var i, product=1;
    for(i=2; i<=n; i++) {
        product *= i;
        console.log(product);
    }
        return product;
    
}
var dom = document.getElementById('number');
var num = factorial(5)
dom.innerHTML= num;