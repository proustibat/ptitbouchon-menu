import DividerTitle from "@/app/[lang]/components/DividerTitle.jsx";
import ListItem from "@/app/[lang]/components/ListItem";
import List from "@/app/[lang]/components/List";
import { requestDrinksWithAlcohol } from "@/app/spreadsheet-api";

export default async function DrinkingAlcohol({ params: { lang } }) {
  const listData = await requestDrinksWithAlcohol();

  listData.forEach((item) => {
    console.log(item.list);
  });

  return (
    <main className="pb-12">
      {listData.map((item) => {
        return (
          <>
            <DividerTitle key={item.range} title={item[lang]} />
            <List>
              {item.list.map((drink) => {
                return (
                  <ListItem
                    key={drink[lang === "fr" ? 0 : 1]}
                    title={drink[lang === "fr" ? 0 : 1]}
                    prices={[drink[2]]}
                  />
                );
              })}
            </List>
          </>
        );
      })}

      <DividerTitle title="Bieres" />
      <ListItem
        title=""
        prices={["Demi&nbsp;", "Pinte&nbsp;"]}
        className="px-4 text-sm"
      />
      <List>
        <ListItem title="Moretti (blonde lager)" prices={["5,00€", "7,00€"]} />
        <ListItem title="Lagunitas (IPA session)" prices={["7,00€", "9,00€"]} />
        <ListItem title="Blonde + sirop" prices={["XXX€", "XXX€"]} />
        <ListItem title="Blonde + picon" prices={["XXX€", "XXX€"]} />
        <ListItem title="Panache" prices={["XXX€", "XXX€"]} />
        <ListItem title="Monaco" prices={["XXX€", "XXX€"]} />
      </List>

      <DividerTitle title="Vins" />
      <h2 className="text-lg px-4 text-center uppercase mt-5">Rouges :</h2>
      <ListItem
        title=""
        prices={["Verre&nbsp;&nbsp", "Blle&nbsp;&nbsp;"]}
        className="px-4 text-sm pt-0"
      />
      <List>
        <ListItem
          title="Les demoiselles de Rochefort (Castellas)"
          prices={["XXX€", "XXX€"]}
        />
        <ListItem
          title="Les 6 Petits Gars (Castellas)"
          prices={["XXX€", "XXX€"]}
        />
        <ListItem title="Pinot Noir" prices={["XXX€", "XXX€"]} />
        <ListItem title="Bio" prices={["XXX€", "XXX€"]} />
        <ListItem title="Mignaberry" prices={["-", "XXX€"]} />
      </List>

      <h2 className="text-lg px-4 text-center uppercase mt-5">Blancs :</h2>
      <ListItem
        title=""
        prices={["Verre&nbsp;&nbsp", "Blle&nbsp;&nbsp;"]}
        className="px-4 text-sm pt-0"
      />
      <List>
        <ListItem title="Sauvignon" prices={["XXX€", "XXX€"]} />
        <ListItem title="Bourgogne" prices={["XXX€", "XXX€"]} />
        <ListItem title="Maubert" prices={["XXX€", "XXX€"]} />
      </List>

      <DividerTitle title="Aperitif" />

      <DividerTitle title="Digestifs" />

      <DividerTitle title="Spiritueux" />

      <DividerTitle title="Shots" />

      <DividerTitle title="Champagne" />
    </main>
  );
}
