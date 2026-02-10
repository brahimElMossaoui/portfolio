
import { Link } from "react-router-dom";
import type { Post } from "../data/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="card post-card">
      {post.coverImage ? (
        <div className="post-cover">
          <img src={post.coverImage} alt={post.title} />
        </div>
      ) : null}

      <div className="post-body">
        <span className="post-meta">{new Date(post.date).toLocaleDateString("nl-BE")}</span>
        <h3 className="post-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="row">
          <Link className="link" to={`/blog/${post.slug}`}>
            Read more -&gt;
          </Link>
        </div>
        <div className="tags">
          {post.tags.map((t) => (
            <span key={t} className="tag tag-static">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
