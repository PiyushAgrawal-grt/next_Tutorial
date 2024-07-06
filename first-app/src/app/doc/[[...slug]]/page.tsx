export default function Doc({params}:{
    params:{
        slug:string[]
    };
}){
    if(params.slug?.length==2)
        {
            return(
                <h1>Vewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
            )
        }
    else if(params.slug?.length==1){
    return (
        <h1>Vewing doc for feature {params.slug[0]}</h1>
    )
   
}
    else
    return(
    <h1>Docs file</h1>
    )
}