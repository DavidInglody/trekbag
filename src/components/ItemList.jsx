import {useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  {
    label: "sort by default",
    value: "default",
  },
  {
    label: "sort by packed",
    value: "packed",
  },
  {
    label: "sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  const items = useItemsStore((state) => state.items)
  const deleteItem = useItemsStore((state) => state.deleteItem)
  const toggleItem = useItemsStore((state) => state.toggleItem)

  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(() => [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }
    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }
    return;
  }), [items, sortBy])

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}
      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          checked={item.packed}
          type="checkbox"
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
