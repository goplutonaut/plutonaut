export const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent mb-4">
      {title}
    </h1>
  );
};
