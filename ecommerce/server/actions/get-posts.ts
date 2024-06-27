'use server'

import { db } from '@/server/index';

export async function getPosts() {
    const posts = await db.query.posts.findMany();  
    
    if (!posts) {
        return {error:'No Post'}
    }
    return{success: posts}
}
