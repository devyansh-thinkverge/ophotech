const STATS = [
  { value: "20+", label: "AI Products Developed" },
  { value: "10+", label: "Data Scientists & AI/ML Engineers" },
  { value: "9+", label: "Government Agencies Served" },
  { value: "20+", label: "Years of Experience" },
  { value: "10M+", label: "Lines of Code Written" },
];

export function StatsSection() {
  return (
    <section className="border-y border-[#FEEFDF] bg-white py-10 px-4">
      <div className="mx-auto max-w-6xl">
        <dl className="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1">
              <dt className="text-4xl font-semibold text-[#E45412] font-poppins">{stat.value}</dt>
              <dd className="text-sm leading-snug text-[#454545] max-w-[120px]">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
