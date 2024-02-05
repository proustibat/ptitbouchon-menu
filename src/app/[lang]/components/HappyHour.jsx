const HappyHour = ({ data, lang }) => {
  return (
    <div className="bg-slate-200 py-10 mt-10 text-center rounded-2xl">
      <h1 className="uppercase">{data.title[lang]}</h1>
      <p>{data.description[lang]}</p>
      <ul className="w-full text-left mt-5 mx-10 list-item">
        {data.content.map((item) => {
          return (
            <li key={item[lang]}>
              {item[lang]} - {item.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HappyHour;
