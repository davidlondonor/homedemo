import React from 'react'
import { Flex } from '@rebass/grid'
import { Header } from '../Header'
import { Content } from '../Content'
import { Footer } from '../Footer'

export function Layout() {
    return (
        <>
            <Header />
            <Content>
                <Flex justifyContent='space-evenly' flexDirection={['column', 'row', 'row']}>
                    
                </Flex>
            </Content>
            <Footer color='blue' />
        </>
    )
}