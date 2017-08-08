import { Component } from '@angular/core';

@Component ({
  selector: 'my-app',
  template: '<product-form></product-form>'
})

export class AppComponent {}

// @Component ({
//   selector: 'my-app',
//   template: `
//   <ul>
//     <li><a [routerLink] = "['/Product']">Product</a></li>
//     <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
//   </ul>
//   <router-outlet></router-outlet>`
// })
// export class AppComponent {}


// import { Component } from '@angular/core';
// import { IProduct } from './products';
// import { ProductService } from './products.service';
// import { appService } from './app.service';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

// @Component({
//   selector: 'my-app',
//   template: '<div>Hello</div>',
//   providers: [ProductService]

  // templateUrl: 'app/app.component.html'

  // example of an "inline template":
  // template: `
  // <h1>Hello {{name}}</h1>
  // <h1>{{appTitle}}</h1>
  // <div>To Tutorials Point</div>
  // `,
// })

// export class AppComponent  {
//   iproducts: IProduct[];
//   constructor(private _product: ProductService) {}
//   ngOnInit(): void {
//     this._product.getproducts()
//     .subscribe(iproducts => this.iproducts = iproducts);
//   }

  // name = 'World';
  // appTitle: string = 'Welcome';
  // appStatus: boolean = true;
  // appList: any[] = [
  //   {
  //     'ID': '1',
  //     'Name': 'One',
  //     'url': 'app/Images/image1.jpg'
  //   },
  //   {
  //     'ID': '2',
  //     'Name': 'Two',
  //     'url': 'app/Images/image2.jpg'
  //   }
  // ];
// }
