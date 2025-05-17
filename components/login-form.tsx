'use client'

import { startTransition, useActionState, useEffect, useRef } from 'react'
import { loginAction } from '@/actions/common'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { loginSchema } from '@/lib/validations/common'

import { Icons } from './icons'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Label } from './ui/label'

function LoginForm() {
    const [state, action] = useActionState(loginAction, undefined)
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',
        },
        mode: 'onBlur',
    })
    const formRef = useRef<HTMLFormElement>(null)
    useEffect(() => {
        form.reset({ ...(state?.fields ?? {}) })
    }, [state, form])
    return (
        <div className="pt-8">
            <Form {...form}>
                <form
                    action={action}
                    ref={formRef}
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

export default LoginForm
