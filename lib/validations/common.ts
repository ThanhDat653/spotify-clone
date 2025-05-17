import { z } from 'zod'

export const loginSchema = z.object({
    username: z.string().nonempty({ message: 'Username is required' }),
    password: z
        .string()
        .min(1, { message: 'Password must be at least 8 characters long' })
        .nonempty({ message: 'Password is required' }),
})

export const signupSchema = z
    .object({
        username: z.string().nonempty({ message: 'Username is required' }),
        email: z.string().email({ message: 'Invalid email address' }),

        password: z
            .string()
            .min(1, { message: 'Password must be at least 8 characters long' })
            .nonempty({ message: 'Password is required' }),
        confirmPassword: z.string().nonempty({
            message: 'Confirm password is required',
        }),
    })
    .refine((data) => data.confirmPassword === data.password, {
        message: 'Passwords must match!',
        path: ['confirmPassword'],
    })
