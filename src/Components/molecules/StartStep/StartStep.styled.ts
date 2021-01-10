import colors from "styles/Colors";
import styled from "styled-components";
import Button from "Components/atoms/Button";
import PageTemplate from "templates/PageTemplate";
import Paragraph from "Components/atoms/Paragraph";
import { AbbreviateText, BoxShadow, FlexCenter } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TestIcon } from "assets";

export const StyledPageTemplate = styled(PageTemplate)`
  position: relative;
  justify-content: flex-start;
  overflow: auto;
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  justify-content: space-evenly;
  flex-direction: column;
  padding: 5px 10px;

  :first-of-type {
    justify-content: space-between;
    flex-direction: row;
    background-color: ${colors.Gray80};
    flex-basis: 60px;
    ${BoxShadow};
  }
  :nth-of-type(2) {
    flex: 6;
    justify-content: center;
    flex-direction: row;
  }
  :nth-of-type(3) {
    flex: 1;
    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const StyledIconWrapper = styled.div`
  ${FlexCenter};
  background-color: ${colors.Gray20};
  width: 50px;
  height: 50px;
  border-radius: 5px;
  padding: 0 5px;
  :nth-of-type(2) {
    width: auto;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: ${colors.Gray80};
`;

export const StyledCounter = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.White};
  margin-left: 5px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  z-index: 2;
  @media (min-width: 600px) {
    width: 180px;
    margin: 5px;
  }
`;

export const StyledPhoto = styled(TestIcon)`
  display: none;
  @media (min-width: 600px) {
    display: unset;
    min-width: 300px;
    min-height: 300px;
  }
  @media (min-width: 900px) {
    display: unset;
    min-width: 400px;
    min-height: 400px;
  }
`;

export const StyledTextWrapper = styled.div`
  ${FlexCenter};
  max-width: 300px;
  flex-direction: column;
  @media (min-width: 600px) {
    align-items: flex-start;
  }
`;

export const StyledTitle = styled.span`
  ${AbbreviateText};
  font-size: 36px;
  font-weight: bold;
  color: ${colors.BasicGreen};
  text-align: center;
  z-index: 2;
  @media (min-width: 600px) {
    text-align: left;
  }
  @media (min-width: 900px) {
    font-size: 42px;
    text-align: left;
  }
`;

export const StyledAuthor = styled(Paragraph)`
  font-size: 18px;
  color: ${colors.Gray20};
  z-index: 2;
  @media (min-width: 600px) {
    font-size: 28px;
  }
`;
