import styled from "styled-components";

import { SortableItem } from "../dndComponents/sortableItem";

const PrintPhoto = styled.div`
  opacity: ${({ isOver, isActive }) => isActive || isOver ? 0.5 : 1};

  margin: auto;
  cursor: grab;
  
  img {
    max-width: 100%;
  }
`;

export const PrintPageItem = ({ image, itemsContainerId, itemId }) => (
  <SortableItem
    id={image}
    data={{
      image: image,
      itemsContainerId,
      itemId,
    }}
  >
    {
      ({ isOver, isActive }) => (
        <PrintPhoto
          isOver={isOver}
          isActive={isActive}
        >
          <img src={image} alt="" />
        </PrintPhoto>
      )
    }
  </SortableItem>
)