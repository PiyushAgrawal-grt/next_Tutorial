import {notFound} from "next/navigation";
export default function ReviewID({params}:{
    params:{
        productid:string,
        reviewid:string,
    }}
){
    if(parseInt(params.reviewid)>1000)
        notFound();

    return(
        <div>
            <h1>Review {params.reviewid} for Product ID {params.productid}</h1>
        </div>
    )
}