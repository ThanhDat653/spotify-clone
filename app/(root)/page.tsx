/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense } from 'react'
import { landing_playlist } from '@/service/common'

import { FacetContent, FacetTabs } from '@/components/facet-tab/facet-tab'

export default async function HomePage() {
    const data = await landing_playlist()
    console.log(data)

    return (
        <div className="bg-base relative rounded-md p-4 pt-0">
            <FacetTabs />
            <div className="mt-6">
                <Suspense fallback={<div>Loading...</div>}>
                    <FacetContent data={data} />
                </Suspense>
            </div>
        </div>
    )
}
