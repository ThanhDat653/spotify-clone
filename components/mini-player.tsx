'use client'

import {
    ButtonHTMLAttributes,
    HTMLAttributes,
    useCallback,
    useEffect,
    useState,
} from 'react'
import { createPortal } from 'react-dom'

import { useRedux } from '@/hooks/use-redux'

import { Icons } from './icons'
import { Button } from './ui/button'

function cloneStyles(sourceDoc: Document, targetDoc: Document) {
    const styleSheets = sourceDoc.styleSheets

    for (let i = 0; i < styleSheets.length; i++) {
        const styleSheet = styleSheets[i]
        try {
            if (styleSheet.cssRules) {
                const newStyleEl = targetDoc.createElement('style')
                for (let j = 0; j < styleSheet.cssRules.length; j++) {
                    newStyleEl.appendChild(
                        targetDoc.createTextNode(styleSheet.cssRules[j].cssText)
                    )
                }
                targetDoc.head.appendChild(newStyleEl)
            }
        } catch (e) {
            if (styleSheet.href) {
                const newLinkEl = targetDoc.createElement('link')
                newLinkEl.rel = 'stylesheet'
                newLinkEl.href = styleSheet.href
                targetDoc.head.appendChild(newLinkEl)
            }
        }
    }
}

function MiniPlayerTrigger({
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="" {...props}>
            Test
        </button>
    )
}

interface MiniPlayerContainerProps extends HTMLAttributes<HTMLDivElement> {
    pipWindow?: Window | null
}

function MiniPlayerContainer({
    pipWindow,
    children,
}: MiniPlayerContainerProps) {
    useEffect(() => {
        if (pipWindow) {
            cloneStyles(window.document, pipWindow.document)
        }
    }, [pipWindow])

    return pipWindow ? createPortal(children, pipWindow.document.body) : null
}

function MiniPlayer() {
    const [pipWindow, setPiPWindow] = useState<Window | null>(null)
    const handleClick = useCallback(async () => {
        if (!('documentPictureInPicture' in window)) {
            alert('documentPictureInPicture is not supported in this browser.')
            return
        }
        if (pipWindow) {
            pipWindow.close()
        } else {
            //@ts-expect-error Yup there is a documentPictureInPicture API
            const newWindow = await documentPictureInPicture.requestWindow()
            setPiPWindow(newWindow)
        }
    }, [pipWindow])

    useEffect(() => {
        const handleWindowClose = (): void => {
            setPiPWindow(null)
        }

        pipWindow?.addEventListener('pagehide', handleWindowClose)

        return () => {
            pipWindow?.removeEventListener('pagehide', handleWindowClose)
        }
    }, [pipWindow])

    const { appSelector, dispatch } = useRedux()
    const { isPlaying } = appSelector((state) => state.app)

    return (
        <>
            <MiniPlayerTrigger onClick={handleClick} />
            <MiniPlayerContainer pipWindow={pipWindow}>
                <div className="flex min-h-screen flex-col gap-4 px-4 pb-4">
                    <div className="">
                        <Icons.resize className="size- absolute right-2 bottom-2 text-white" />
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="aspect-square max-w-[388px] overflow-hidden rounded-lg shadow-[0_12px_32px_0_rgba(0,0,0,.3)]">
                            <img
                                className="w-full"
                                src="/nadtt-canva.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-5 text-neutral-400">
                        <button>
                            <Icons.shuffle className="size-4 hover:cursor-pointer hover:text-white" />
                        </button>
                        <button>
                            <Icons.skipBack className="size-4 hover:cursor-pointer hover:text-white" />
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:scale-105">
                            {isPlaying ? (
                                <Icons.playerPause className="size-5" />
                            ) : (
                                <Icons.playerPlay className="size-5" />
                            )}
                        </button>
                        <button>
                            <Icons.skipForward className="size-4 hover:cursor-pointer hover:text-white" />
                        </button>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div className="overflow-hidden">
                            <p className="text-2xl leading-6 font-bold text-nowrap">
                                Như Cách Anh Đã Từng Thôi
                            </p>
                            <span className="text-subdued text-[15px] leading-0 font-bold">
                                HURRYKNG
                            </span>
                        </div>
                        <div className="flex items-center">
                            <button className="opacity-0 transition-all delay-100 ease-in group-hover/panel:mr-4 group-hover/panel:opacity-100">
                                <Icons.share className="size-6 text-[#656565]" />
                            </button>
                            <button>
                                <Icons.circleCheck className="size-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </MiniPlayerContainer>
        </>
    )
}

export { MiniPlayer }
