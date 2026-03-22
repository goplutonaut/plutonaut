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
        'bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600 space-y-4 shadow-sm',
        className,
      )}
    >
      {children}
    </div>
  );
};
