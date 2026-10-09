// Client-safe blog data (for blog listing page)
import { BLOG_POSTS } from "./blog-data";

export function getAllBlogPosts() {
  return BLOG_POSTS;
}

// Featured post helper
export function getFeaturedPost() {
  return BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0] || null;
}