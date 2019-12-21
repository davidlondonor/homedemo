import React, { useState } from 'react'
import { Form, Input, Submit } from './styles'

export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmitForm = e => {
        e.preventDefault()
        console.log(username, password)
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <Input
                placeholder='Usuario' 
                value={username} 
                onChange={e => setUsername(e.target.value)}
            />
            <Input 
                placeholder='Contraseña'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Submit type='submit' />
        </Form>
    )
}