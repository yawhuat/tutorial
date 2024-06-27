"use server";

import { db } from '@/server/index';
import { posts } from '@/server/schema';


export default async function createPost() {

    const data = await db.insert(posts).values({
         title: 'Just want to eat rojak' 
      })
    return {success:posts};
} 
