import {IProduct} from "../type/product";
import instance from "./instance";


export const list = () => {
    const url = `/products`;
    return instance.get(url);
}

export const read = (id : any) => {
    const url = `/product/${id}`;
    return instance.get(url);
}

export const update = (products:IProduct) => {
    const url = `/products/${products._id}`;
    return instance.patch(url,products);
}

export const remove = (id : any) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const create = (products : IProduct) =>{
    const url = "/products";
    return instance.post(url,products)
};