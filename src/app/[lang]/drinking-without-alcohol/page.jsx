"use client";
import MainTitle from "@/app/[lang]/components/MainTitle.jsx";
import DividerTitle from "@/app/[lang]/components/DividerTitle";
import List from "@/app/[lang]/components/List";
import ListItem from "@/app/[lang]/components/ListItem";

export default function DrinkingNoAlcohol() {
  return (
    <main className="pb-12">
      <DividerTitle title="Mocktails" />
      <List>
        <ListItem title="Bora bora" prices={["XX€"]} />
        <ListItem title="XXXXXX" prices={["XX€"]} />
      </List>
      <DividerTitle title="Softs" />
      <List>
        <ListItem title="Jus de tomate" prices={["XX€"]} />
        <ListItem title="Jus d'ananas" prices={["XX€"]} />
        <ListItem title="Jus de pomme" prices={["XX€"]} />
        <ListItem title="Jus d'orange" prices={["XX€"]} />
        <ListItem title="Perrier" prices={["XX€"]} />
        <ListItem title="Coca" prices={["XX€"]} />
        <ListItem title="Coca Zero" prices={["XX€"]} />
        <ListItem title="Club mate" prices={["XX€"]} />
        <ListItem title="Ginger beer" prices={["XX€"]} />
        <ListItem title="Limonade" prices={["XX€"]} />
        <ListItem title="Diabolo" prices={["XX€"]} />
      </List>
      <DividerTitle title="Nos sirops" />
      <List>
        <ListItem title="Jasmin" prices={[]} />
        <ListItem title="Noisette" prices={[]} />
        <ListItem title="Grenadine" prices={[]} />
        <ListItem title="Menthe" prices={[]} />
        <ListItem title="Cerise" prices={[]} />
        <ListItem title="..." prices={[]} />
      </List>
    </main>
  );
}
