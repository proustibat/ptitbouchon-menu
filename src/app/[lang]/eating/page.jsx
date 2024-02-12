import ListPage from "@/app/[lang]/components/ListPage";

export default async function Eating({ params: { lang } }) {
  return (
    <main className="pb-12">
      <ListPage lang={lang} sheetName="eating" />
    </main>
  );
}
