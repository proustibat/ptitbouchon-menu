import DividerTitle from "@/app/[lang]/components/DividerTitle.jsx";
import ListItem from "@/app/[lang]/components/ListItem";
import List from "@/app/[lang]/components/List";
import { requestDrinks } from "@/app/spreadsheet-api";
import ListPage from "@/app/[lang]/components/ListPage";

export default async function DrinkingAlcohol({ params: { lang } }) {
  return (
    <main className="pb-12">
      <ListPage lang={lang} sheetName="drinking-with-alcohol" />
    </main>
  );
}
