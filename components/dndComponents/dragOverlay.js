import {snapCenterToCursor} from "@dnd-kit/modifiers";
import { DragOverlay as Overlay } from "@dnd-kit/core"

export const DragOverlay = ({ activeDragItem, dropAnimation, children }) => {
  return (
    <Overlay
      dropAnimation={dropAnimation}
      modifiers={[snapCenterToCursor]}
    >
      {activeDragItem ? children(activeDragItem) : null}
    </Overlay>
  )
}