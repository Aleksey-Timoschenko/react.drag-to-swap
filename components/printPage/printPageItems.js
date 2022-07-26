import styled from "styled-components";

import { SortableWrapper } from "../dndComponents/sortableWrapper";
import { PrintPageItem } from "./printPageItem";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  background: #2778a5;
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
`;

export const PrintPageItems = ({ printItemsContainerId, printItems }) => {
  return (
    <Wrapper>
      <SortableWrapper
        id={printItemsContainerId}
        items={printItems}
      >
        {printItems.map((image, index) => {
          return (
            <PrintPageItem
              key={image}
              image={image}
              itemId={index}
              itemsContainerId={printItemsContainerId}
            />
          );
        })}
      </SortableWrapper>
    </Wrapper>
  )
}