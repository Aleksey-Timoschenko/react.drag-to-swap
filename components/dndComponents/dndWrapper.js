import {useState} from "react";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {sortableKeyboardCoordinates} from "@dnd-kit/sortable";

export const DndWrapper = ({ handleDragEnd: customHandleDragEnd, children }) => {
  const [activeDragItem, setActiveDragItem] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    const { active: activeDragItem } = event;

    setActiveDragItem(activeDragItem.data.current);
  }

  const handleDragEnd = (event) => {
    customHandleDragEnd(event)

    setActiveDragItem(null);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      { children(activeDragItem) }
    </DndContext>
  )
}