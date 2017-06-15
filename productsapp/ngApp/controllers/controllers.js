var productsapp;
(function (productsapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(productService) {
                this.products = productService.list();
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = productsapp.Controllers || (productsapp.Controllers = {}));
})(productsapp || (productsapp = {}));
