import { Metadata } from "next";
type props={params:{
    productid:string,
}}

// export const generateMetadata = ({params}:props):Metadata=>{
//     return {
//         title:`Product ${params.productid}`
//     }
// }

export const generateMetadata =async ({params}:props):Metadata =>{
    const title=await new Promise ((k)=>{
        setTimeout(()=>{
            k(`iPhone ${params.productid}`);
        },100);
    });
    return {
        title:`Product ${title}`
    }
}

export default function ProductID({params}:props){
    return (
        <h1>Product {params.productid}</h1>
    )
}