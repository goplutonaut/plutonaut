import { cn } from '@plutonaut/web/src/lib/utils';

export const SectionBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'bg-card p-6 rounded-xl border border-border space-y-4 shadow-sm',
        className,
      )}
    >
      {children}
    </div>
  );
};
