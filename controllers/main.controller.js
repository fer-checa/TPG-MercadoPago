const {index,one} = require('../models/product.model');

module.exports ={
    index: (req,res) => res.render('home',{
        products:index(),
        styles:['home']
    }),
    // Step 3 - AQUI SE VAN AGREGAR PRODUCTOS AL CARRITO:
    addCart: (req,res) => {
        // Find Product in DB
        let product = one(req.body.id)
        // Check product exist in cart

        // Case 1: Exist and update quantity
        if (req.session.cart.find(item => item.id == product.id)) {
            req.session.cart= req.session.cart.map(item => {
                if (item.id == product.id) {
                    item.quantity = item.quantity + 1
                }
                return item
            })
        // Case 2: Add cart and set quantity
        }else{
            req.session.cart.push({...product, quantity:1})
        }
        
       
        return res.redirect('/')
    },
    // Step 5
    updateCart: (req,res) => {
        // Check quantity
        // Case 1: Is equal to zero then remove product
        // Case 2: Update all cart items setting quantity in product selected
        return res.send("Update quantity")
    }, 
    // Step 6
    removeCart: (req,res) =>{
        return res.send("Remove a product from the cart")
    }
}