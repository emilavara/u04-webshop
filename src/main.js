export async function fetchProducts() {
    //check if products key exists in ls
    if (localStorage.getItem('products') === null) {
        //fetch if null is returned
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        //set products in localstorage
        localStorage.setItem('products', JSON.stringify(data))

        //then return it when done
        return JSON.parse(localStorage.getItem('products'))
    } else {
        //else parse products and return them
        return JSON.parse(localStorage.getItem('products'))
    }
}