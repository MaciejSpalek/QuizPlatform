import React from "react";
import CategoryItem from "./CategoryItem";
import {
  StyledTopWrapper,
  StyledContainer,
  StyledHeading,
} from "../PopularQuizBanner/PopularQuizBanner.styled";
import { ICategoryBanner } from "./CategoryBanner.model";
import { QuizIcons } from "helpers/constants";
import { StyledCategoryList } from "./CategoryBanner.styled";
import { StyledStrong } from "Components/organisms/QuizzesList/QuizzesList.styled";
import { useHistory } from "react-router";

const CategoryBanner = ({}: ICategoryBanner): JSX.Element => {
  const history = useHistory();
  const openCategory = (category: string) => history.push(`/categories/${category}`);
  
  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledHeading>
          Categories (<StyledStrong>{QuizIcons.length}</StyledStrong>)
        </StyledHeading>
      </StyledTopWrapper>
      <StyledCategoryList>
        {QuizIcons.map(({ icon, id, title }) => (
          <li key={id} onClick={() => openCategory(title)}>
            <CategoryItem icon={icon} title={title} />
          </li>
        ))}
      </StyledCategoryList>
    </StyledContainer>
  );
};

export default CategoryBanner;
