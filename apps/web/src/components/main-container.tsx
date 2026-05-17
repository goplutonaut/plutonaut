import { cn } from '@plutonaut/web/src/lib/utils';

export const MainContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('max-w-5xl mx-auto px-4', className)}>{children}</div>
  );
};
