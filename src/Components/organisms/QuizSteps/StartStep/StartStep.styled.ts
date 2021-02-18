import colors from "styles/colors";
import styled from "styled-components";
import Button from "Components/atoms/Button";
import PageTemplate from "templates/UniversalTemplate";
import Paragraph from "Components/atoms/Paragraph";
import { AbbreviateText, FlexCenter } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TestIcon } from "assets";
import { twinkleScale } from "styles/Animations";

export const StyledPageTemplate = styled(PageTemplate)`
  justify-content: flex-start;
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  justify-content: space-evenly;
  flex-direction: column;
  padding: 5px 10px;

  :first-of-type {
    justify-content: space-between;
    flex-direction: row;
    flex-basis: 60px;
    border-bottom: 2px solid ${colors.Gray100};
  }
  :nth-of-type(2) {
    flex: 6;
    justify-content: center;
    flex-direction: row;
    padding: 30px 0;
  }
  :nth-of-type(3) {
    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const StyledIconWrapper = styled.div`
  ${FlexCenter};
  background-color: ${colors.BasicGreen};
  width: 50px;
  height: 50px;
  border-radius: 5px;
  padding: 0 5px;
  
  :nth-of-type(2) {
    width: auto;
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

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: ${colors.DarkGreen};
`;

export const StyledCounter = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.White};
  margin-left: 7.5px;
  animation: ${twinkleScale} .5s ease-in;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  @media (min-width: 600px) {
    width: 180px;
    margin: 5px;
  }
`;

export const StyledPhoto = styled(TestIcon)`
  display: none;
  @media (min-width: 600px) {
    display: unset;
    width: 300px;
    height: 300px;
    min-width: 300px;
    min-height: 300px;
  }
  @media (min-width: 900px) {
    display: unset;
    width: 400px;
    height: 400px;
    min-width: 400px;
    min-height: 400px;
  }
`;

export const StyledTitle = styled.span`
  position: relative;
  ${AbbreviateText};
  font-size: 36px;
  font-weight: bold;
  color: ${colors.BasicGreen};
  text-align: center;

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
  @media (min-width: 600px) {
    font-size: 24px;
  }
`;

export const StyledViews = styled(Paragraph)`
  font-size: 10px;
  color: ${colors.White};
`;
