"use client";
import List from "@/app/[lang]/components/List";
import ListItem from "@/app/[lang]/components/ListItem";
import DividerTitle from "@/app/[lang]/components/DividerTitle";

export default function Eating() {
  return (
    <main className="pb-12">
      <DividerTitle title="Nos tapas faites maison" />
      <List>
        <ListItem title="Houmous" prices={["10€"]} />
        <ListItem title="Caviar d'aubergines" prices={["10€"]} />
        <ListItem title="Rillettes de thon au st Moret" prices={["10€"]} />
        <ListItem title="Le trio" prices={["10€"]} />
      </List>

      <DividerTitle title="Les planches" />
      <ListItem
        title=""
        prices={["Petite&nbsp;&nbsp", "Grande&nbsp;&nbsp;"]}
        className="px-4 text-sm"
      />
      <List>
        <ListItem title="Fromages" prices={["10€", "20€"]} />
        <ListItem title="Mixte" prices={["10€", "20€"]} />
      </List>
    </main>
  );
}
