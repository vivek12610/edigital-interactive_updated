const rows = [
  { keyword: "best project management software", from: 34, to: 3 },
  { keyword: "ai visibility for saas brands", from: 61, to: 5 },
  { keyword: "enterprise seo agency", from: 28, to: 2 },
  { keyword: "personal injury lawyer chicago", from: 47, to: 4 }
];

export default function RankTicker() {
  return (
    <div className="card w-full max-w-sm overflow-hidden">
      <div className="flex items-center justify-between border-b border-line bg-paper px-4 py-3">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink/50">Live rank tracker</p>
        <span className="flex h-2 w-2 rounded-full bg-signal-light animate-pulse" />
      </div>
      <ul className="divide-y divide-line">
        {rows.map((r, i) => (
          <li key={r.keyword} className="flex items-center justify-between gap-3 px-4 py-3" style={{ animationDelay: `${i * 120}ms` }}>
            <span className="truncate text-xs text-ink/70">{r.keyword}</span>
            <span className="flex items-center gap-2 font-mono text-xs shrink-0">
              <span className="text-ink/30 line-through">#{r.from}</span>
              <span className="font-bold text-signal animate-tick" style={{ animationDelay: `${i * 200}ms` }}>#{r.to}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
