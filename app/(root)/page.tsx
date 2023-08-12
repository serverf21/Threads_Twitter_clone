//app/page.tsx

import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { userAgent } from "@/node_modules/next/server";
import {currentUser} from '@clerk/nextjs';

export default async function Home() {
  const results = await fetchPosts(1, 30);
  // console.log(results);
  const user = await currentUser();
  
  return (
    <>
      {/* <UserButton afterSignOutUrl="/"/> */}
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
      {results.posts.length === 0 ? (
          <p className='no-result'>No threads found</p>
        ) : (
          <>
            {results.posts.map((post: any) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </>
  )
}