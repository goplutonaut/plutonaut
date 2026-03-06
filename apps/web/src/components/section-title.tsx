export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
      {title}
    </h2>
  );
};
