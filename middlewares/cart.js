module.exports = (req, res, next) => {
    // Step 1 ACA VA A GENERAR EN SESSION UN CARRITO VACIO 
    //inicialmente en caso de que el carrito no exits y luego enviarlo a las vistas:
    // midlewares que se usa a nivel de aplicacion y no a nivel de rutas

    if (req.session && !req.session.cart) {
        req.session.cart = []
    }
    res.locals.cart = req.session.cart
    next();
}