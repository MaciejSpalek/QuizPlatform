import React, { useEffect } from 'react';
import {
  StyledToast,
  StyledText,
  StyledIcon
} from './Toast.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { setToastParameters } from 'redux/Actions/toastActions';

const Toast = ({ ...props }): JSX.Element => {
  const isActive = useSelector<RootState>(state => state.toast.isActive);
  const icon = useSelector<RootState, string>(state => state.toast.icon);
  const description = useSelector<RootState, string>(state => state.toast.description);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        dispatch(setToastParameters(false));
      }, 3000)
    }
  }, [isActive]);

  if (!isActive) return <></>;
  
  return (
    <StyledToast {...props}>
      <StyledIcon icon={icon as IconName} />
      <StyledText>
        {description}
      </StyledText>
    </StyledToast>
  )
};

export default Toast;
