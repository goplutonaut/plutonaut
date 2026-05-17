export const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-3xl md:text-5xl font-bold mb-10 text-primary">
      {title}
    </h1>
  );
};
