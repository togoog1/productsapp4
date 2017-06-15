namespace productsapp.Controllers {

    export class HomeController {
        public products;

        constructor(productService:productsapp.Services.ProductService) {
          this.products = productService.list();
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
