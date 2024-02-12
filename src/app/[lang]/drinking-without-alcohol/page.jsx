import DividerTitle from "@/app/[lang]/components/DividerTitle";
import List from "@/app/[lang]/components/List";
import ListItem from "@/app/[lang]/components/ListItem";
import { requestDrinks } from "@/app/spreadsheet-api";
import ListPage from "@/app/[lang]/components/ListPage";

export default async function DrinkingNoAlcohol({ params: { lang } }) {
  return (
    <main className="pb-12">
      <ListPage lang={lang} sheetName="drinking-without-alcohol" />
    </main>
  );
}
