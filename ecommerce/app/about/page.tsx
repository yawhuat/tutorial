import Link from "next/link";

// Static route
export default function About(){
    return(
        <div>
            <h1>About</h1>
            <p>This is going to the the about us page</p>       
            <Link href="/">Home</Link>
            
        </div>
    )
}