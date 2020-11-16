import React, { useEffect } from 'react'
import PageTemplate from '../../templates/PageTemplate/PageTemplate'
import AuthForm from '../../templates/FormTemplate/FormTemplate'
import Link from '../../Components/atoms/Link/index'
import FormField from '../../templates/FormFieldTemplate/FormFieldTemplate'
import Input from '../../Components/atoms/Input/index'
import Label from '../../Components/atoms/Label/index'
import ErrorMessage from '../../Components/atoms/ErrorMessage/ErrorMessage'
import ErrorHandler from '../../helpers/ErrorHandler'
import * as yup from "yup"
import { routes } from '../../routes/index'
import { useDispatch, useSelector } from 'react-redux' 
import { RootState } from '../../redux/store'
import { Formik } from "formik"
import { authRequest } from '../../Auth/requests'
import { setRequestStatus } from '../../redux/Actions/sessionActions'
import { RouteComponentProps } from 'react-router-dom'
import { StyledButton } from './AuthPage.styled'

const validationSchema = yup.object({
    name: yup.string()
        .required('Required')
        .min(3, 'Name must be at least 3 characters')
        .max(15, 'Name can be maximum 15 characters'),

    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(24, 'Password can be maximum 24 characters')
        .required('Required')
});    



const AuthPage = ({ history }: RouteComponentProps) => {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);
    const requestMessage = useSelector<RootState, string>(state => state.session.errorMessage)
    const requestStatus = useSelector<RootState, boolean>(state => state.session.requestStatus)
    const user = useSelector<RootState, string | null>(state => state.user.loggedUser)

    const dispatch = useDispatch()

    const inputFunctionsHandler = (handleOnFunction: any, e: Event) => {
        handleOnFunction(e)
        dispatch(setRequestStatus(true))
    }

    const isLoginRoute = ()=> {
        return history.location.pathname === routes.login
    }

    useEffect(() => {
        let timeout: number
        if (isAuthenticated) {
            timeout = setTimeout(() => {
                history.push(`/${user}`);
            });
        }
        
        return () => {
          clearTimeout(timeout);
        }
      }, [isAuthenticated, history]);

    return (
        <PageTemplate>
            <Formik
                validationSchema={validationSchema}
                validateOnChange={true}
                initialValues={{
                    name: "",
                    password: ""
                }}
                onSubmit={(data, {setSubmitting, resetForm}) => {
                    isLoginRoute() ? 
                        authRequest('login', data, dispatch) : 
                        authRequest('register', data, dispatch);
                    setSubmitting(true);
                    setTimeout(() => {
                        resetForm();
                        setSubmitting(false)
                    }, 2000)
                }}>
                {({ 
                    isSubmitting,
                    handleSubmit,
                    handleChange, 
                    handleBlur,
                    touched, 
                    values, 
                    errors
                }) => (
                    <AuthForm handleSubmit={handleSubmit}>
                        <FormField>
                            <Label 
                                text="Name"
                                forText="name"
                            />
                            <Input
                                id="name" 
                                type="text"
                                name="name"
                                value={values.name}
                                ariaInvalid={true}
                                ariaDescribedBy="err_1"
                                onChange={(e: Event)=> inputFunctionsHandler(handleChange, e)}
                                onBlur={(e: Event)=> inputFunctionsHandler(handleBlur, e)}
                                isRequired={true}
                            />
                            <ErrorHandler 
                                id="err_1"
                                value="name"
                                requestMessage={requestMessage}
                                requestStatus={requestStatus}
                                touched={touched}
                                errors={errors}
                            />
                        </FormField>
                        <FormField>
                            <Label 
                                text="Password"
                                forText="password"
                            />
                            <Input 
                                id="password"
                                type="password"
                                name="password"
                                value={values.password}
                                ariaInvalid={true}
                                ariaDescribedBy="err_2"
                                onChange={(e: Event)=> inputFunctionsHandler(handleChange, e)}
                                onBlur={(e: Event)=> inputFunctionsHandler(handleBlur, e)}
                                isRequired={true}
                            />
                            {errors.password && touched.password ? (
                                <ErrorMessage id="err_2" text={errors.password} />
                            ) : null}
                        </FormField>
                        <StyledButton 
                            type="submit" 
                            text={isLoginRoute() ? "Log in": "Register"} 
                            isDisabled={isSubmitting}
                        />
                        <Link 
                            text={isLoginRoute() ? "Create an acconut" : "Do you have an account ?"}
                            to={isLoginRoute() ? routes.register : routes.login}
                            type="Link"
                            />
                    </AuthForm>
                )}
            </Formik>
        </PageTemplate>
    )
}

export default AuthPage