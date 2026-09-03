const LoadingSkeleton = ({ type = 'card' }) => {
  if (type === 'card') {
    return (
      <div className="bg-[var(--surface-2)] rounded-3xl overflow-hidden border border-[var(--surface-3)] animate-pulse">
        <div className="aspect-[4/3] bg-[var(--surface-4)]" />
        <div className="p-6 space-y-3">
          <div className="h-4 bg-[var(--surface-4)] rounded w-1/3" />
          <div className="h-6 bg-[var(--surface-4)] rounded w-3/4" />
          <div className="h-4 bg-[var(--surface-4)] rounded w-full" />
          <div className="h-4 bg-[var(--surface-4)] rounded w-2/3" />
        </div>
      </div>
    );
  }

  if (type === 'hero') {
    return (
      <div className="aspect-video bg-[var(--surface-4)] animate-pulse rounded-2xl" />
    );
  }

  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 bg-[var(--surface-4)] rounded w-3/4" />
      <div className="h-4 bg-[var(--surface-4)] rounded w-full" />
      <div className="h-4 bg-[var(--surface-4)] rounded w-2/3" />
    </div>
  );
};

export default LoadingSkeleton;
