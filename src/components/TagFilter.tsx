
type Props = {
  tags: string[];
  selected: string[];
  onToggle: (tag: string) => void;
  onClear: () => void;
};

export default function TagFilter({ tags, selected, onToggle, onClear }: Props) {
  return (
    <div className="card">
      <div className="row space-between">
        <div>
          <h3 className="card-title">Filter op tags</h3>
          <p className="muted">Klik om tags aan/uit te zetten.</p>
        </div>
        <button className="btn btn-secondary" onClick={onClear} disabled={selected.length === 0}>
          Reset
        </button>
      </div>

      <div className="tags">
        {tags.map((t) => {
          const active = selected.includes(t);
          return (
            <button
              key={t}
              className={`tag ${active ? "tag-active" : ""}`}
              onClick={() => onToggle(t)}
              type="button"
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
