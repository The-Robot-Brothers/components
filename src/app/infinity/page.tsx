'use client'

import { useIntersection } from '@mantine/hooks'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'
import { Button } from '~/components/Button'

const posts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
  { id: 4, title: 'Post 4' },
  { id: 5, title: 'Post 5' },
  { id: 6, title: 'Post 6' },
  { id: 7, title: 'Post 7' },
  { id: 8, title: 'Post 8' },
  { id: 9, title: 'Post 9' },
  { id: 10, title: 'Post 10' }
]

const fetchPosts = async (page: number) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return posts.slice((page - 1) * 2, page * 2)
}

export default function InfinityPage () {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['posts'],
    async ({ pageParam = 1 }) => {
      const response = await fetchPosts(pageParam)
      return response
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1
      },
      initialData: {
        pages: [posts.slice(0, 2)],
        pageParams: [1]
      }
    }
  )

  const lastPostRef = useRef<HTMLElement>(null)

  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1
  })

  const _posts = data?.pages.flatMap(page => page)

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage()
  }, [entry])

  return (
    <div className='flex justify-center'>
      <div className='grid gap-2 w-96'>
        posts:
        {_posts?.map((post, i) => {
          if (i === _posts.length - 1) {
            return (
              <div key={post.id} ref={ref} className='border bg-primary-900 border-primary-50 p-2 rounded h-80 flex items-center justify-center'>
                {post.title}
              </div>
            )
          }
          return (
            <div key={post.id} className='border bg-primary-900 border-primary-50 p-2 rounded h-80 flex items-center justify-center'>
              {post.title}
            </div>
          )
        })}

        <Button.Root loading={isFetchingNextPage} onClick={() => fetchNextPage()}>
          {
          (data?.pages.length ?? 0) < 3
            ? 'Load more'
            : 'Nothing more to load'
        }
        </Button.Root>
      </div>
    </div>
  )
}
