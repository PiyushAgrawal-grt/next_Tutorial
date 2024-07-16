import { Metadata } from "next"

export  const metadata:Metadata ={
    title:"blog"
    
        // absolute is used when u don't wanna use any predefined template
        // title:{
        // absolute: "blog"
        // } 
    
}

export default function blog() {
    return(
        <h1>Blog page </h1>
    )
    
}