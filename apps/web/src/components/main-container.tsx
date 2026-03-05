export const MainContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-5xl mx-auto ${className || ''}`}>{children}</div>
  );
};
