import React, { useRef } from 'react';
import { routes } from 'routes/index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { logout } from 'Auth/requests';
import { setHamburgerStatus } from 'redux/Actions/statusesActions';
import { useOutsideClick } from 'hooks';
import { resetParameters } from 'helpers/reduxHandlers';
import { useWindowSize } from 'hooks';
import {
    StyledList,
    StyledIcon,
    StyledItem,
    StyledNavLink,
    StyledBackground,
    StyledContainer
} from './Menu.styled';
import { StyledLink } from 'Components/atoms/Link/Link.styled';


const Menu = () => {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.statuses.hamburgerStatus);
    const user = useSelector<RootState, string | null>(state => state.user.loggedUser);
    const menuRef = useRef<HTMLUListElement>(null);
    const dispatch = useDispatch();
    const width = useWindowSize();

    useOutsideClick(menuRef, () => {
        width <= 800 && dispatch(setHamburgerStatus(false));
    });

    const handleOnClick = () => {
        width <= 800 && dispatch(setHamburgerStatus(!hamburgerStatus));
        resetParameters(dispatch);
    };

    return (
        <StyledContainer>
            <StyledList ref={menuRef}>
                <StyledItem>
                    <StyledNavLink
                        text='Home'
                        to={routes.home}
                        isNavLink={true}
                        onClick={handleOnClick}
                        children={<StyledIcon icon='home' />}
                    />
                </StyledItem>
                {!isAuthenticated &&
                    <StyledItem>
                        <StyledNavLink
                            text='Log in'
                            isNavLink={true}
                            to={routes.login}
                            onClick={handleOnClick}
                            children={<StyledIcon icon='sign-in-alt' />}
                        />
                    </StyledItem>}
                {isAuthenticated &&
                    <StyledItem>
                        <StyledNavLink
                            text={`${user}`}
                            to={`/${user}`}
                            isNavLink={true}
                            onClick={handleOnClick}
                            children={<StyledIcon icon='user' />}
                        />
                    </StyledItem>}
                {isAuthenticated &&
                    <StyledItem>
                        <StyledLink
                            to={routes.home}
                            onClick={() => {
                                handleOnClick();
                                logout(dispatch);
                            }}>
                            <StyledIcon icon='sign-out-alt' />
                            <span> Log out </span>
                        </StyledLink>
                    </StyledItem>}
            </StyledList>
            <StyledBackground />
        </StyledContainer>
    );
};

export default Menu;
