import React from 'react'
import { Flex } from '@rebass/grid'
import { Logo } from '../Logo'
import { LoginForm } from '../LoginForm'
import { HeaderContainer } from './Container'
import './style.css'

export const Header = ({ isLogged }) => {
    return (
        <HeaderContainer>
            <Flex justifyContent='space-between'>
                <Logo size={50} src='./logo192.png'  />
                <LoginForm />
            </Flex>
        </HeaderContainer>
    )
}