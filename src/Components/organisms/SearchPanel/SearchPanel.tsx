import React, { useRef, useState } from 'react';
import ToggleButton from 'Components/atoms/ToggleButton';
import Input from 'Components/atoms/Input';
import Label from 'Components/atoms/Label';
import SearchList from 'Components/molecules/SearchList';
import { StyledContainer, StyledInputWrapper } from './SearchPanel.styled';
import { clearInput, isInputTextMatch } from 'helpers/input';
import { ISearchPanel, IUsers } from './SearchPanel.model';
import { IQuizTemplate } from 'Interfaces/quizInterfaces';
import { getQuizzes, getUsers } from './helpers';
import { useOutsideClick } from 'hooks';

const SearchPanel = ({ quizzes, users }: ISearchPanel) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isSelect, select] = useState(true);
    const [mutableUsers, setMutableUsers] = useState<IUsers[]>([]);
    const [mutableQuizzes, setMutableQuizzes] = useState<IQuizTemplate[]>([]);

    const resetParameters = () => {
        setMutableQuizzes([]);
        setMutableUsers([]);
        clearInput(inputRef);
    };

    useOutsideClick(inputRef, () => {
        resetParameters();
    });

    const toggle = () => {
        select(prev => !prev);
        resetParameters();
    };

    const filterQuizzes = (quizzes: IQuizTemplate[], e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const filteredQuizzes = quizzes.filter(item => isInputTextMatch(inputValue, item.title));
        inputValue ?
            setMutableQuizzes(filteredQuizzes) :
            setMutableQuizzes([]);
    };

    const filterUsers = (users: IUsers[], e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const filteredUsers = users.filter(item => isInputTextMatch(inputValue, item.name));
        inputValue ?
            setMutableUsers(filteredUsers) :
            setMutableUsers([]);
    };

    return (
        <StyledContainer>
            <Label forText='search-label' />
            <StyledInputWrapper>
                <Input
                    _ref={inputRef}
                    id='search-label'
                    type='text'
                    ariaLabel="Search input"
                    placeholder={isSelect ? 'Search quiz' : 'Search user'}
                    onChange={(e) => isSelect ? filterQuizzes(quizzes, e) : filterUsers(users, e)}
                />
                {!!mutableUsers.length && <SearchList children={getUsers(mutableUsers)} />}
                {!!mutableQuizzes.length && <SearchList children={getQuizzes(mutableQuizzes)} />}
            </StyledInputWrapper>
            <ToggleButton
                isSelect={isSelect}
                onClick={toggle}
            />
        </StyledContainer>
    );
};

export default SearchPanel;
