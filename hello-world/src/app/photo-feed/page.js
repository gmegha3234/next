import Link from "next/link"
import wonders from "./wonders.js"
import Image from "next/image"
export default function Home(){
    return <main className="container mx-auto">
        <h1 className="text-centre font-bold text-3xl my-4 ">Contact Form Images</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {wonders.map(({id,src,name})=>{
              return   <Link key={id} href={`/photo-feed/${id}`}>
                  <Image src={src} alt={name}  priority className="w-full object-cover aspect-square"/>
                </Link>
            })}
        </div>
    </main>
}