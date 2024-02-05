const List = ({ children, className = "" }) => {
  return (
    <ul className={`divide-y divide-dashed divide-slate-400 px-4`}>
      {children}
    </ul>
  );
};

export default List;
