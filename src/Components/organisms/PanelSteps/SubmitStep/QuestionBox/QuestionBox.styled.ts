import styled from "styled-components";
import Paragraph from "Components/atoms/Paragraph/Paragraph";
import { AbbreviateText, FlexCenter } from "styles/Mixins";
import IconButton from "Components/atoms/IconButton";
import colors from "styles/Colors";

export const StyledContainer= styled.div`
  border-radius: 5px;
  margin-bottom: 20px;
  border: 2px solid ${colors.Gray80};
  background-color: ${colors.White};
`;

export const StyledHeading = styled.h3`
  ${AbbreviateText};
  color: ${colors.Gray40};
  font-size: 16px;
  font-weight: bold;
  padding: 20px 10px;
  text-align: center;
  margin: 0;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  list-style: none;
`;

export const StyledListItem = styled.li<{ isCorrect: boolean }>`
  border-bottom: 1px solid ${colors.Gray80};
  border-top: 1px solid ${colors.Gray80};
  padding: 10px;
  margin: 0;

  :last-of-type {
    border-bottom: none;
  }
`;

export const StyledParagraph = styled(Paragraph)<{ isCorrect: boolean }>`
  ${AbbreviateText};
  font-size: 16px;
  text-align: left;
  color: ${({ isCorrect }) =>
    isCorrect ? colors.BasicGreen : colors.Gray40};
  margin: 0;
`;

export const StyledTopBar = styled.div`
  ${FlexCenter};
  justify-content: space-between;
  padding: 5px;
  background-color: ${colors.Gray80};
  border-bottom: 1px solid ${colors.Gray80};
  margin: 0;
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  width: auto;
`;

export const StyledIconButton = styled(IconButton)`
  margin-left: 5px;
`;

export const StyledNumber = styled.span`
  ${FlexCenter};
  min-height: 35px;
  width: 35px;
  background-color: ${colors.BasicGreen};
  border-radius: 5px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
