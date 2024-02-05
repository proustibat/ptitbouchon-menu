export default function DividerTitle({ title }) {
  return (
    <div className="sticky top-[104px] mt-10 bg-gray-100">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-slate-400" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-xl font-semibold leading-6 text-gray-900 p-3 rounded-xl w-[200px] text-center border-slate-400 border">
          {title}
        </span>
      </div>
    </div>
  );
}
