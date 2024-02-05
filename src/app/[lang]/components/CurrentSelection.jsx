const CurrentSelection = ({ data, lang }) => {
  return (
    <div className="bg-slate-200 px-5 py-10 mt-10 text-center rounded-lg shadow-xl">
      <h1 className="uppercase mb-1 border-2 border-y">{data.title[lang]}</h1>
      <p dangerouslySetInnerHTML={{ __html: data.content[lang] || "" }} />
    </div>
  );
};
export default CurrentSelection;
