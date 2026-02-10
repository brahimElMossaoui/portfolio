export type Post = {
  slug: string;
  title: string;
  date: string; // ISO: "2026-02-03"
  excerpt: string;
  tags: string[];
  coverImage?: string; // "/images/..."
  content: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "img"; src: string; alt: string }
  >;
};

export const posts: Post[] = [];

export const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

export function getLatestPosts(limit = 3) {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
