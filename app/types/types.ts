export type MenuType ={
    id:string;
    slug:string;
    title:string;
    description?:string;
    image?:string;
    color:string;
}[];


export type ProductType = {
    id:string;
    title:string;
    description?:string;
    image?:string;
    price:number;
    options?: {title:string; additionalPrice:number}[];
};

