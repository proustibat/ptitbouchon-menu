import IconWithAlcohol from "@/app/[lang]/components/icons/IconWithAlcohol.jsx";
import IconWithoutAlcohol from "@/app/[lang]/components/icons/IconWithoutAlcohol.jsx";
import IconEating from "@/app/[lang]/components/icons/IconEating.jsx";
import MainButton from "@/app/[lang]/components/Mainbutton.jsx";

const iconClassName = "w-10 h-10 block flex-none";

const getIcon = (slug) => {
  const icons = {
    eating: <IconEating className={iconClassName} />,
    "drinking-with-alcohol": <IconWithAlcohol className={iconClassName} />,
    "drinking-without-alcohol": (
      <IconWithoutAlcohol className={iconClassName} />
    ),
  };
  return icons[slug];
};

const MainMenu = ({ data, lang }) => {
  const sections = data.map(({ slug, fr, en }) => {
    return {
      slug,
      category: lang === "fr" ? fr : en,
      icon: getIcon(slug),
      href: `/${lang}/${slug}`,
    };
  });
  return (
    <div role="list" className="space-y-5">
      {sections.map((section) => (
        <MainButton key={section.slug} section={section} />
      ))}
    </div>
  );
};
export default MainMenu;
