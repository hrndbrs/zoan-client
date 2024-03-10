type SectionHeaderPropType = {
  title: string;
  subtitle: string;
  description: string;
};

export default function SectionHeader({ title, subtitle, description }: SectionHeaderPropType) {
  return (
    <div className="flex flex-col mb-12 gap-4 md:items-center">
      <p className="uppercase font-bold">{subtitle}</p>
      <div className="flex flex-col gap-6 md:items-center">
        <h3 className="text-h3 uppercase font-bold max-md:text-h4">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
