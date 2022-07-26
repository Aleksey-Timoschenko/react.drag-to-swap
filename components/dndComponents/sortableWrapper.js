import { SortableContext, rectSwappingStrategy } from "@dnd-kit/sortable";

export const SortableWrapper = ({ id, items, children }) => {
  return (
    <SortableContext
      id={id}
      items={items}
      strategy={rectSwappingStrategy}
    >
      { children }
    </SortableContext>
  )
}