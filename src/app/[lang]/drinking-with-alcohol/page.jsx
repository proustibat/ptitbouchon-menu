import ListPage from "@/app/[lang]/components/ListPage";

export default async function DrinkingAlcohol({ params: { lang } }) {
  return (
    <main className="pb-12">
      <ListPage lang={lang} sheetName="drinking-with-alcohol" />
    </main>
  );
}
