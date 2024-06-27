import Image from "next/image";
import { getPosts } from "@/server/actions/get-posts";
import { revalidatePath } from "next/cache";
import createPost  from "@/server/actions/create_posts";



export default async function Home() {
  createPost();
  revalidatePath('/');

  const {error,success} = await getPosts();

if(error) {
  throw new Error(error)
}
if (success) {
  console.log(success)


  return (
    <main>
      <h1>Welcome to Next JS</h1>
      {success.map((post) => (
        <div key={post.id}>
        <h2>Value:{post.title}</h2>
          
        </div>
      ))}
     
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </main>
    
  );
}
}
