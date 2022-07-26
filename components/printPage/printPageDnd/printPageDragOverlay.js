import styled from "styled-components";

import { DragOverlay } from "../../dndComponents/dragOverlay";

const DragPreview = styled.div`
  border: 5px white solid;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  max-width: 160px;
  overflow: hidden;

  cursor: grabbing;
  margin: auto;

  img {
    object-fit: cover;
    height: 100px;
    width: 100px;
  }
`;

const dropAnimation = {
  duration: 0,
}

export const PrintPageDragOverlay = ({ activeDragItem }) => {
  return (
    <DragOverlay
      activeDragItem={activeDragItem}
      dropAnimation={dropAnimation}
    >
      {
        ({ image }) => (
          <DragPreview>
            <img src={image} alt="" />
          </DragPreview>
        )
      }
    </DragOverlay>
  )
}