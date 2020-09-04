import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { routes } from '../routes'
import { RootState } from '../redux/store'

interface Props {
    component?: any
    path: string
    exact: boolean
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...props }): any => {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);

    return (
        <Route
            {...props}
            render={props => (
                isAuthenticated ?
                    <Component {...props} /> :
                    <Redirect 
                        to={{ 
                            pathname: `${routes.login}`, 
                            state: { 
                                from: props.location.pathname 
                            } 
                        }} 
                    />
            )}
        />
    )
}


export default PrivateRoute; 