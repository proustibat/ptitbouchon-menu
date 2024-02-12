"use client";
import { useState } from "react";

const ListItem = ({ title, prices, info, className = "" }) => {
  const hint = info === "-" ? null : info;

  const [isHintOpen, setIsHintOpen] = useState(false);

  const handleClickOnInfo = () => {
    setIsHintOpen(!isHintOpen);
  };

  const iconOpen = (
    <svg
      viewBox="0 0 580 1000"
      fill="currentColor"
      height="1.3em"
      width="1.3em"
      className="inline ml-2 mb-1"
    >
      <path d="M564 428L330 652c-12 12-25.333 18-40 18-14.667 0-28-6-40-18L16 428C5.333 417.333 0 403.667 0 387s5.333-30.333 16-41c25.333-25.333 51.333-25.333 78 0l196 188 196-188c26.667-25.333 52.667-25.333 78 0 10.667 10.667 16 24.333 16 41s-5.333 30.333-16 41" />
    </svg>
  );

  const iconClose = (
    <svg
      viewBox="0 0 580 1000"
      fill="currentColor"
      height="1.3em"
      width="1.3em"
      className="inline ml-2 mb-1 rotate-180"
    >
      <path d="M564 428L330 652c-12 12-25.333 18-40 18-14.667 0-28-6-40-18L16 428C5.333 417.333 0 403.667 0 387s5.333-30.333 16-41c25.333-25.333 51.333-25.333 78 0l196 188 196-188c26.667-25.333 52.667-25.333 78 0 10.667 10.667 16 24.333 16 41s-5.333 30.333-16 41" />
    </svg>
  );
  return (
    <li className={`flex justify-between pt-5 ${className}`}>
      <p
        className={prices.length > 1 ? "w-[200px]" : ""}
        onClick={handleClickOnInfo}
      >
        <span>
          {title}
          {hint && (
            <>
              {isHintOpen ? iconClose : iconOpen}
              {isHintOpen && (
                <span className="block text-sm italic">{hint}</span>
              )}
            </>
          )}
        </span>
      </p>
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
