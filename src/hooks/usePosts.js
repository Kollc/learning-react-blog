import {
  useMemo
} from 'react'

const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((prevPost, nextPost) => prevPost[sort].localeCompare(nextPost[sort]))
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchPotst = useMemo(() => sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase())), [sortedPosts, query,])

  return sortedAndSearchPotst;
}