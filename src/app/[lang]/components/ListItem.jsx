const ListItem = ({ title, prices, className = "" }) => {
  return (
    <li className={`flex justify-between pt-5 ${className}`}>
      <p className={prices.length > 1 ? "w-[200px]" : ""}>{title}</p>
      {prices.map((price) => (
        <p
          key={`${title}-${price}`}
          dangerouslySetInnerHTML={{ __html: price }}
        />
      ))}
    </li>
  );
};

export default ListItem;
