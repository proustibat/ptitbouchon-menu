import Link from "next/link";
import IconArrowRight from "@/app/[lang]/components/icons/IconArrowRight.jsx";

const Mainbutton = ({ section }) => {
  return (
    <Link
      href={section.href}
      type="button"
      className="block w-full overflow-hidden bg-white px-5 py-5 shadow rounded-md cursor-pointer flex items-center border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-none hover:border-transparent hover:ring-0 hover:outline-none"
    >
      {section.icon}
      <span className="block text-left flex-initial uppercase ml-4">
        {section.category}
      </span>
      <IconArrowRight className="w-8 h-8 ml-auto" />
    </Link>
  );
};

export default Mainbutton;
