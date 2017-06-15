var productsapp;
(function (productsapp) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService($resource) {
                this.ProductResource = $resource('/api/products');
            }
            ProductService.prototype.list = function () {
                return this.ProductResource.query();
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
        angular.module('productsapp').service('productService', ProductService);
    })(Services = productsapp.Services || (productsapp.Services = {}));
})(productsapp || (productsapp = {}));
