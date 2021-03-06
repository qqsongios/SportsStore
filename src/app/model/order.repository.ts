import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Order} from "./order.model";
import {StaticDataSource} from "./static.datasource";

@Injectable()
export class OrderRepository{
    private order:Order[]=[];
    constructor(private dataSource:StaticDataSource){}

    getOrder():Order[]{
        return this.order;
    }
    saveOrder(order:Order):Observable<Order>{
        return this.dataSource.saveOrder(order);
    }
}