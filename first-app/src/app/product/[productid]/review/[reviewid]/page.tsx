"use client";
import { error } from "console";
import {notFound} from "next/navigation";

function getRandomInt(count: number){
    return Math.floor(Math.random()*count);
}

export default function ReviewID({params}:{
    params:{
        productid:string,
        reviewid:string,
    }}
){
    const random=getRandomInt(2);

    if(random==1)
        throw new Error("Error loading review");
    
    if(parseInt(params.reviewid)>1000)
        notFound();

    return(
        <div>
            <h1>Review {params.reviewid} for Product ID {params.productid}</h1>
        </div>
    )
}