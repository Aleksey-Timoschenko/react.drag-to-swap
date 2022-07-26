import { useState } from "react";
import styled from "styled-components";

import Actions from "../actions";
import { PrintPageDndWrapper } from "./printPageDnd/printPageDndWrapper";
import { PrintPageItems } from "./printPageItems";

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
  color: #585858;
`;

const PrintWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

export default function PrintPage({ data: initialPrintItems }) {
  const [printItems, setPrintItems] = useState(initialPrintItems);

  return (
    <PrintPageDndWrapper
      printItems={printItems}
      setPrintItems={setPrintItems}
    >
      <Wrapper>
        {printItems.map((printItem, printItemsContainerId) => {
          return (
            <PrintWrapper key={printItemsContainerId}>
              <Header>
                <Title>{printItem.title}</Title>
                <Actions />
              </Header>
              <PrintPageItems
                printItemsContainerId={printItemsContainerId}
                printItems={printItem.images}
              />
            </PrintWrapper>
          );
        })}
      </Wrapper>
    </PrintPageDndWrapper>
  );
}
