import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";


export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(state => state.markAllAsIncomplete)
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    { text: "Mark all as complete", onClick: markAllAsComplete },
    { text: "Mark all as incomplete", onClick: markAllAsIncomplete },
    { text: "Reset to initial", onClick: resetToInitial },
    { text: "Remove all items", onClick: removeAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button
          key={text}
          btnType="secondary"
          onClick={onClick}
        >
          {text}
        </Button>
      ))}
      {/* <Button btnType="secondary" onClick={handleMarkAllAsComplete}>
        Mark all as complete
      </Button>
      <Button btnType="secondary" onClick={handleMarkAllAsIncomplete}>
        Mark all as incomplete
      </Button>
      <Button btnType="secondary" onClick={handleResetToInitial}>
        Reset to initial
      </Button>
      <Button btnType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button> */}
    </section>
  );
}
