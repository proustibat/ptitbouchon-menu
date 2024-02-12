import { requestDrinks } from "@/app/spreadsheet-api";
import DividerTitle from "@/app/[lang]/components/DividerTitle";
import ListItem from "@/app/[lang]/components/ListItem";
import List from "@/app/[lang]/components/List";

const ListPage = async ({ lang, sheetName }) => {
  const listData = await requestDrinks(sheetName);
  return (
    <>
      {listData.map((item) => {
        let hasSeveralPrices = item.list[0].length === 5;
        let drinksList = item.list;
        let pricesTitles;
        if (hasSeveralPrices) {
          pricesTitles = lang === "fr" ? item.list[0] : item.list[1];
          drinksList = drinksList.slice(2, drinksList.length);
        }
        return (
          <>
            <DividerTitle key={item.range} title={item[lang]} />
            {hasSeveralPrices && (
              <ListItem
                title=""
                prices={[
                  `${pricesTitles[2]}&nbsp;`,
                  `${pricesTitles[3]}&nbsp;`,
                ]}
                className="px-4 text-sm"
              />
            )}
            <List>
              {drinksList.map((drink) => {
                return (
                  <ListItem
                    key={`${item[lang]}-${drink[lang === "fr" ? 0 : 1]}`}
                    title={drink[lang === "fr" ? 0 : 1]}
                    prices={
                      drink.length === 5 ? [drink[2], drink[3]] : [drink[2]]
                    }
                    info={drink.length === 5 ? drink[4] : drink[3]}
                  />
                );
              })}
            </List>
          </>
        );
      })}
    </>
  );
};

export default ListPage;
