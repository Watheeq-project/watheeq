export default function LoginHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center font-cairo">
      <h2 className="text-2xl mt-1 font-bold text-[#071638]">{title}</h2>
      <p className="mt-3 mx-auto max-w-[468px] px-[30px] text-[#A5A5A5] text-sm leading-6">
        {subtitle}
      </p>
    </div>
  );
}
