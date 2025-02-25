import { Injectable } from "@angular/core";
import { IProduct } from "../products/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";
//Services/Dependency Module
@Injectable ({
    providedIn: 'root'
})
export class ProductService { //In component class, constructor(private dataService: DataService). Chu y private
    private productUrl = 'api/products/products.json';
    // getProducts(): IProduct[] {
    //     return [
    //         {
    //             "productId": 1,
    //             "productName": "Leaf Rake",
    //             "productCode": "GDN-0011",
    //             "releaseDate": "March 19, 2021",
    //             "description": "Leaf rake with 48-inch wooden handle.",
    //             "price": 19.95,
    //             "starRating": 3.2,
    //             "imageUrl": "assets/images/leaf_rake.png"
    //           },
    //           {
    //             "productId": 2,
    //             "productName": "Garden Cart",
    //             "productCode": "GDN-0023",
    //             "releaseDate": "March 18, 2021",
    //             "description": "15 gallon capacity rolling garden cart",
    //             "price": 32.99,
    //             "starRating": 4.2,
    //             "imageUrl": "assets/images/garden_cart.png"
    //           },
    //           {
    //             "productId": 5,
    //             "productName": "Hammer",
    //             "productCode": "TBX-0048",
    //             "releaseDate": "May 21, 2021",
    //             "description": "Curved claw steel hammer",
    //             "price": 8.9,
    //             "starRating": 4.8,
    //             "imageUrl": "assets/images/hammer.png"
    //           },
    //           {
    //             "productId": 8,
    //             "productName": "Saw",
    //             "productCode": "TBX-0022",
    //             "releaseDate": "May 15, 2021",
    //             "description": "15-inch steel blade hand saw",
    //             "price": 11.55,
    //             "starRating": 3.7,
    //             "imageUrl": "assets/images/saw.png"
    //           },
    //           {
    //             "productId": 10,
    //             "productName": "Video Game Controller",
    //             "productCode": "GMG-0042",
    //             "releaseDate": "October 15, 2020",
    //             "description": "Standard two-button video game controller",
    //             "price": 35.95,
    //             "starRating": 4.6,
    //             "imageUrl": "assets/images/xbox-controller.png"
    //           }
    //     ];
    // }
    constructor(private http: HttpClient) {}
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe( //get data from product.json with HttpClient
          //tap(data => console.log('All: ', JSON.stringify(data))), //print data into console to check for getting data from JSON 
          //catchError(this.handleError)
        );
    }
    private handleError(err: HttpErrorResponse) {
      let errorMassage = '';
      if(err.error instanceof ErrorEvent) {
        errorMassage = `An error occurred: ${err.error.message}`;
      } else {
        errorMassage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMassage);
      return throwError(()=>errorMassage);
    }
}