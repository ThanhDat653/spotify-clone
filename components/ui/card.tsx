import React from 'react'
import Link from 'next/link'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

type CardProps = {
    orientation?: 'horizontal' | 'vertical'
    href: string
}

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ className, href, children, orientation = 'vertical' }, ref) => (
    <Link
        href={href}
        className={cn(
            'group/track rounded-md p-3 hover:bg-white/10',
            {
                'flex flex-col gap-2': orientation === 'vertical',
                'flex-row gap-4': orientation === 'horizontal',
            },
            className
        )}
    >
        {children}
    </Link>
))
Card.displayName = 'Card'

const cardImageVariants = cva('relative overflow-hidden', {
    variants: {
        variant: {
            rounded: 'rounded-full',
            squared: 'rounded-md',
        },
        size: {
            xs: 'size-10',
            sm: 'size-12',
            md: 'size-24',
            lg: 'size-[157px]',
        },
    },
    defaultVariants: {
        variant: 'squared',
        size: 'lg',
    },
})

export interface CardImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement>,
        VariantProps<typeof cardImageVariants> {}
const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
    ({ className, variant, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(cardImageVariants({ variant }), className)}
        >
            <img className="bg-center object-cover" {...props} />
            {children}
        </div>
    )
)

CardImage.displayName = 'CardImage'

const CardTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'line-clamp-2 leading-none font-semibold tracking-tight',
            className
        )}
        {...props}
    />
))
CardTitle.displayName = 'CardTitle'

const CardSubTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'mt-3 line-clamp-2 w-full text-sm font-normal text-gray-500',
            className
        )}
        {...props}
    />
))
CardSubTitle.displayName = 'CardSubTitle'

export { Card, CardImage, CardTitle, CardSubTitle }
