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
];

type Menu ={
    id:number;
    slug:string;
    title:string;
    desc?:string;
    img?:string;
    color:string;
}[];

export const menu: Menu =[
    {
        id:1,
        slug:"burgers",
        title:"burgers",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quo accusamus voluptatibus veniam? Vel magnam, esse eum doloremque et, quod impedit necessitatibus velit ut consequatur quos maxime. Laborum, non ex?",
        img:"/temp/b2.png",
        color:"white"
    },
    {
        id:2,
        slug:"pizza",
        title:"Pizza",
        desc:"Pizza Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quo accusamus voluptatibus veniam? Vel magnam, esse eum doloremque et, quod impedit necessitatibus velit ut consequatur quos maxime. Laborum, non ex?",
        img:"/temp/c1.png",
        color:"black"
    },{
        id:3,
        slug:"momo",
        title:"Momo",
        desc:"Pizza Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quo accusamus voluptatibus veniam? Vel magnam, esse eum doloremque et, quod impedit necessitatibus velit ut consequatur quos maxime. Laborum, non ex?",
        img:"/temp/c3.png",
        color:"white"
    },

]
