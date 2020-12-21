import RadioButton from "Components/atoms/RadioButton";
import styled from "styled-components";
import colors from "styles/colors";
import { AbbreviateText, FlexCenter } from "styles/Mixins";

export const StyledAnswer = styled.div<{ isSelect: boolean, outlineColor: string | null }>`
  position: relative;
  ${FlexCenter};
  justify-content: flex-start;
  align-self: center;
  width: 100%;
  min-height: 65px;
  padding: 0 18px;
  border: ${({ isSelect }) => isSelect ? '3px' : '2px'} solid ${({ isSelect }) => isSelect ? colors.BasicGreen : colors.Gray60};
  border: ${({ outlineColor }) => outlineColor && `3px solid ${outlineColor}`};
  cursor: inherit;
`;

export const StyledLegend = styled.span<{ isSelect: boolean, outlineColor: string | null }>`
  position: absolute;
  top: -12px;
  left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ isSelect }) => (isSelect ? colors.BasicGreen : colors.Gray20)};
  color: ${({ outlineColor }) => outlineColor};
  background-color: ${colors.Gray100};
  padding: 0 10px;
  pointer-events: none;
`;

export const StyledContent = styled.span`
  ${AbbreviateText};
  color: ${colors.Gray20};
  font-weight: normal;
  font-size: 16px;
`;

export const StyledRadioButton = styled(RadioButton)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  label {
  cursor: inherit;
    width: 100%;
    height: 100%;
    ::before, ::after {
      display: none;
      border: none;
    }
  }
`;
