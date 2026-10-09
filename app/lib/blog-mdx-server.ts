import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  featured?: boolean;
  seoKeywords?: string;
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readTime: data.readTime,
        author: {
          name: data.author,
          role: data.role,
          avatar: data.avatar,
        },
        category: data.category,
        tags: data.tags,
        featured: data.featured,
        seoKeywords: data.seoKeywords,
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return allPosts;
}

export function getBlogPost(slug: string): BlogPost | null {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    readTime: data.readTime,
    author: {
      name: data.author,
      role: data.role,
      avatar: data.avatar,
    },
    category: data.category,
    tags: data.tags,
    featured: data.featured,
    seoKeywords: data.seoKeywords,
    content,
  };
}

export function getFeaturedPost(): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((post) => post.featured) || posts[0] || null;
}