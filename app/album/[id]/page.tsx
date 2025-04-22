import React from 'react'

import { Card, CardImage, CardTitle } from '@/components/ui/card'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import PlayTrackButton from '@/components/button/play-track-button'
import { Icons } from '@/components/icons'

function Page() {
    return (
        <div className="flex flex-col">
            <div className=""></div>
            <div className="flex flex-col pb-10">
                <div className="flex gap-6 px-6 pt-6">
                    <div className="">
                        <img
                            className="shadow-[0_4px_60px_rgba(0,0,0,.5)]"
                            src="/nadtt-canva.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-end gap-2">
                        <span className="text-sm">Single </span>
                        <p className="text-5xl font-bold">
                            Như Cách Anh Đã Từng Thôi
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <img
                                    src="/2thuhieu.jpg"
                                    className="size-6 rounded-full"
                                    alt=""
                                />
                                <p className="text-sm font-bold">HURRYKNG</p>
                            </div>
                            <p className="text-subdued text-sm font-semibold opacity-90">
                                • 2023 • 1 song, 3 minutes
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-6">
                            <PlayTrackButton />
                            <Icons.plusCircle className="text-subdued size-9" />
                            <Icons.ellipsis className="text-subdued size-9" />
                        </div>
                        <div className="">
                            <span className="text-subdued text-sm">List</span>
                        </div>
                    </div>
                </div>
                <div className="px-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">#</TableHead>
                                <TableHead className="text-left">
                                    Title
                                </TableHead>
                                <TableHead className="w-[50px]">
                                    <Icons.clock3 className="size-4" />
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="w-[50px]">1</TableCell>
                                <TableCell className="flex flex-col gap-1 text-[16px] text-white">
                                    <p className="text-[16px]">
                                        Như Anh Đã Từng Thôi
                                    </p>
                                    <span className="text-subdued text-[13px] font-semibold">
                                        HURRYKNG
                                    </span>
                                </TableCell>
                                <TableCell className="w-[50px]">
                                    <p className="text-subdued">3:00</p>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="text-subdued mt-6 mb-6 flex flex-col gap-1 px-6 text-sm">
                    <p>December 16, 2024</p>

                    <p>© 2024 HUSTLANG Robber/12 trái lê</p>

                    <p>℗ 2024 HUSTLANG Robber/12 trái lê</p>
                </div>
                <div className="flex flex-col gap-4 px-6 pt-6">
                    <p className="text-2xl font-bold text-white">
                        More by HURRKNG
                    </p>
                    <div className="flex gap-4">
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                        <Card>
                            <CardImage src="/2thuhieu.jpg" />
                            <CardTitle>HIEUTHUHAI</CardTitle>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
