'use client'

import React, { startTransition, useActionState, useRef } from 'react'
import { signupAction } from '@/actions/common'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { signupSchema } from '@/lib/validations/common'

import { Icons } from './icons'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Label } from './ui/label'

function SignUpForm() {
    const [state, action] = useActionState(signupAction, undefined)
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            fullname: '',
            confirmPassword: '',
        },
    })

    const formRef = useRef<HTMLFormElement>(null)

    return (
        <div className="pt-8">
            <Form {...form}>
                <form
                    ref={formRef}
                    action={action}
                    onSubmit={(evt) => {
                        evt.preventDefault()
                        form.handleSubmit(() => {
                            startTransition(() =>
                                action(
                                    new FormData(
                                        formRef.current as HTMLFormElement
                                    )
                                )
                            )
                        })(evt)
                    }}
                    className="flex flex-col gap-4"
                >
                    <FormField
                        name="username"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label className="flex flex-col items-start gap-2 text-white">
                                    <span className="font-bold">Username</span>
                                </Label>

                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter your username"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="fullname"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label className="flex flex-col items-start gap-2 text-white">
                                    <span className="font-bold">Full name</span>
                                </Label>

                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter your username"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label className="flex flex-col items-start gap-2 text-white">
                                    <span className="font-bold">email</span>
                                </Label>

                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter your username"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label className="flex flex-col items-start gap-2 text-white">
                                    <span className="font-bold">Password</span>
                                </Label>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter your password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="confirmPassword"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <Label className="flex flex-col items-start gap-2 text-white">
                                    <span className="font-bold">
                                        Confirm password
                                    </span>
                                </Label>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter your password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {state?.message && (
                        <FormMessage className="flex items-center gap-0.5">
                            <Icons.circleAlert className="text-destructive size-4" />
                            {state.message}
                        </FormMessage>
                    )}
                    <Button className="h-fit rounded-full py-4">
                        <span className="text-base font-bold">Login</span>
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SignUpForm
