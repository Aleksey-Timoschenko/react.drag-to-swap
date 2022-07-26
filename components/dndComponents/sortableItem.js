import { useSortable } from "@dnd-kit/sortable";

export const SortableItem = ({ id, data, width = '50%', children }) => {
  const {
    active,
    over,
    attributes,
    listeners,
    setNodeRef,
    transition,
    ...dragProps
  } = useSortable({
    id: id,
    data
  });

  const style = {
    transition,
    width
  };

  const isTheSameItem = active?.id === over?.id
  const isActive = active?.id === id

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      { children({ ...dragProps, isTheSameItem, isActive }) }
    </div>
  );
}