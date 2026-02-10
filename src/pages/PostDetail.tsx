import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../data/posts";

export default function PostDetail() {
  const { slug } = useParams();

  const post = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug]);

  if (!post) {
    return (
      <div className="stack">
        <h1>Post niet gevonden</h1>
        <Link className="btn btn-secondary" to="/blog">
          Terug naar blog
        </Link>
      </div>
    );
  }

  return (
    <div className="stack">
      <Link className="link" to="/blog">
        &lt;- Terug naar blog
      </Link>

      <header className="stack">
        <h1>{post.title}</h1>
        <div className="row space-between">
          <span className="muted">{new Date(post.date).toLocaleDateString("nl-BE")}</span>
          <div className="tags">
            {post.tags.map((t) => (
              <span key={t} className="tag tag-static">
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      <article className="card prose">
        {post.content.map((block, idx) => {
          if (block.type === "p") return <p key={idx}>{block.text}</p>;
          if (block.type === "h2") return <h2 key={idx}>{block.text}</h2>;
          if (block.type === "ul")
            return (
              <ul key={idx}>
                {block.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            );
          if (block.type === "img")
            return (
              <figure key={idx}>
                <img src={block.src} alt={block.alt} />
                <figcaption className="muted">{block.alt}</figcaption>
              </figure>
            );
          return null;
        })}
      </article>
    </div>
  );
}
