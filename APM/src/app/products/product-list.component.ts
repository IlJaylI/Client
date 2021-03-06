import { Component , OnInit, Input } from "@angular/core";
import { IProduct } from "./product";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";



@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})


export class ProductList implements OnInit{
    /**getTitle():string{return 'ProductList';}*/
    pageTitle: string = 'ProductList'
    _listFilter :string;
    filteredProducts : IProduct[];
    showImage:boolean = false;

    //onNotify(message:string):void{}
    onRatingClicked(message:string){
        this.pageTitle='Product List: ' + message;
    }

    constructor(){
        this.filteredProducts =this.products;
    }

    getlistFilter():string{
            return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter= value;
        this.filteredProducts=this._listFilter ? this.performFilter(this._listFilter):this.products;
    }


    toggleImage(){
        this.showImage = !this.showImage;
    }

    //#region Product interface
    products: IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2016",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "https://images.homedepot-static.com/productImages/6469a9d9-f363-46e9-91e4-06615f491bb4/svn/hdx-leaf-rakes-2915400-64_1000.jpg"
      },
      {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2016",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      },
      {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2016",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      },
      {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2016",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
      },
      {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
      }
      ];
      //#endregion

    performFilter(filterBy : string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }


      ngOnInit() : void {
          console.log('I am working master.');
      }
}