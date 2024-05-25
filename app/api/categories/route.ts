import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server"


// ?fetching all actegories
export const GET =async()=>{
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories), {status:200});

    } catch (error) {
        console.log(error);
        
        return new NextResponse(JSON.stringify({message:"something went wrong"}), {status:400});
    }
   
}

export const POST= ()=>{
    return new NextResponse("Posted", {status:200})
}