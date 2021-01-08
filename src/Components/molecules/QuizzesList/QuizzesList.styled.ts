import styled from "styled-components";
import colors from "styles/Colors";

export const StyledContainer = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;
  height: calc(100vh - 2 * 60px);
  padding: 10px;
  background-color: ${colors.Gray120};
`;

export const StyledList = styled.ul<{isScroll: boolean | undefined}>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  width: 100%;
  max-height: 100%;
  list-style: none;
  overflow: auto;
  padding-right: ${({ isScroll }) => isScroll ? '2.5px': '0'};
  @media (min-width: 600px) { grid-template-columns: 1fr 1fr };
  @media (min-width: 900px) { 
    padding-right: ${({ isScroll }) => isScroll ? '10px': '0'}; 
  };
`;

export const StyledListItem = styled.li`
  width: 100%;
  max-height: 140px;
  cursor: pointer;
`;
