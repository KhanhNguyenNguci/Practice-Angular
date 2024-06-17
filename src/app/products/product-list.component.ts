import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { IProduct } from "./product";
import { Subscription, filter} from "rxjs";
import { ProductService } from "../services/product.service";
// Injection
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    private _listFilter: string = '';
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];
    errorMassage: string = '';
    //sub: Subscription | undefined;
    sub!: Subscription; // Subscription | undefined
    toggleImage(): void{
        this.showImage =!this.showImage;
    }
    ngOnInit():void{ //check instructor in console. 
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMassage = err
        });
        // this.filteredProducts = this.products; //default before filtering products
        this.listFilter = '';
    }
    ngDestroy(): void {
        this.sub.unsubscribe();
    }
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        // console.log('In setter:', this.listFilter)
        this.filteredProducts = this.performFilter(value);
    }

    performFilter(filterBy: string):IProduct[] {
        //filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter, 
        //includes return True or False: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        filterBy = filterBy.toLocaleLowerCase(); //khong phan biet HOA, thuong
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
    }

    onNotify(message: string): void {
        // alert(message);
        this.pageTitle = 'Product List ' + message;
    }

    constructor(private productService: ProductService) {}
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }

}