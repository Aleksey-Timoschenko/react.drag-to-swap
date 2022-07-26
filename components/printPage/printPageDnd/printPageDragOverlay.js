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

const DROP_ANIMATION = {
  duration: 0,
}

export const PrintPageDragOverlay = ({ activeDragItem }) => (
  <DragOverlay
    activeDragItem={activeDragItem}
    dropAnimation={DROP_ANIMATION}
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