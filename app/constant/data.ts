import { title } from "process";

type Product = {
    id:number;
    title:string;
    desc?:string;
    img?:string;
    price:number;
    options?: {title:string; additionalPrice:number}[];
}

type Products = Product[];

export const featuredProducts:Products = [
    {
        id:1,
        title:'Product 1',
        desc:"Ham Burger",
        img:"/temp/item1.png",
        price:150,
        options:[
            {
                title:"small",
                additionalPrice:0
            },
        ]
    },
    {
        id:2,
        title:'MOMO',
        desc:"new momo",
        img:"/temp/momo.jpg",
        price:150,
        options:[
            {
                title:"small",
                additionalPrice:0
            },
        ]
    },
    {
        id:3,
        title:'Noodles',
        desc:"new noodles",
        img:"/temp/noodles.jpeg",
        price:150,
        options:[
            {
                title:"small",
                additionalPrice:0
            },
        ]
    },
    {
        id:4,
        title:'Noodles',
        desc:"new noodles",
        img:"/temp/noodles.jpeg",
        price:150,
        options:[
            {
                title:"small",
                additionalPrice:0
            },
        ]
    },
    {
        id:5,
        title:'Noodles',
        desc:"new noodles",
        img:"/temp/noodles.jpeg",
        price:150,
        options:[
            {
                title:"small",
                additionalPrice:0
            },
        ]
    },
    {
        id:6,
        title:'Noodles',
        desc:"new noodles",
        img:"/temp/noodles.jpeg",
        price:150,
        options:[
            {
                title:"small",
                additionalPrice:0
            },
        ]
    },
]
