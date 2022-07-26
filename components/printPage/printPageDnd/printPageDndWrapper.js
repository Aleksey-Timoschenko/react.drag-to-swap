import { DndWrapper } from "../../dndComponents/dndWrapper";
import { PrintPageDragOverlay } from "./printPageDragOverlay";

export const PrintPageDndWrapper = ({ printItems, setPrintItems, children }) => {
  const handleDragEnd = (event) => {
    const { active: activeDragItem, over: overDragItem } = event;

    if (activeDragItem.id !== overDragItem.id) {
      const updatedPrintItems = [ ...printItems ];

      const { itemsContainerId: activeItemsContainerId, itemId: activeItemId } = activeDragItem.data.current;
      const { itemsContainerId: overItemsContainerId, itemId: overItemId } = overDragItem.data.current;

      [
        updatedPrintItems[activeItemsContainerId].images[activeItemId],
        updatedPrintItems[overItemsContainerId].images[overItemId]
      ] = [
        printItems[overItemsContainerId].images[overItemId],
        printItems[activeItemsContainerId].images[activeItemId]
      ];

      setPrintItems(updatedPrintItems)
    }
  }

  return (
    <DndWrapper handleDragEnd={handleDragEnd}>
      {
        (activeDragItem) => (
          <>
            { children }

            <PrintPageDragOverlay
              activeDragItem={activeDragItem}
            />
          </>
        )
      }
    </DndWrapper>
  )
}