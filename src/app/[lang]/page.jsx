import MainMenu from "@/app/[lang]/components/MainMenu";
import HappyHour from "@/app/[lang]/components/HappyHour";
import {
  requestMainMenu,
  requestCurrentSelection,
  requestHappyHour,
} from "@/app/spreadsheet-api";
import CurrentSelection from "@/app/[lang]/components/CurrentSelection";

export default async function Home({ params: { lang } }) {
  const mainMenuData = await requestMainMenu();
  const currentSelectionData = await requestCurrentSelection();
  const happyHourData = await requestHappyHour();

  return (
    <main className="p-10 mx-auto container-full">
      <MainMenu lang={lang} data={mainMenuData} />
      <CurrentSelection lang={lang} data={currentSelectionData} />
      <HappyHour lang={lang} data={happyHourData} />
    </main>
  );
}
