'use client'

import React, { useRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { signupSchema } from '@/lib/validations/common'

import { Form } from './ui/form'

function SignUpForm() {
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    const formRef = useRef<HTMLFormElement>(null)
    return (
        <div className="pt-8">
            <Form {...form}>
                <form action="" className="flex flex-col gap-4"></form>
            </Form>
        </div>
    )
}

export default SignUpForm
