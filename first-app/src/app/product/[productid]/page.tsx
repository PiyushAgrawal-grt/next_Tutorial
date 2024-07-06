export default function ProductID({params}:{
    params:{
        productid:string
    };
}){
    return (
        <h1>Product {params.productid}</h1>
    )
}