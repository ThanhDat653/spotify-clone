/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense } from 'react'

import CardTitle from '@/components/card/card-title'
import { FacetContent, FacetTabs } from '@/components/facet-tab/facet-tab'
import TrackItem from '@/components/track-item'

export default function HomePage() {
    return (
        <div className="bg-base relative rounded p-4 pt-0">
            <FacetTabs />
            <div className="mt-6">
                <Suspense fallback={<div>Loading...</div>}>
                    <FacetContent />
                </Suspense>
            </div>
        </div>
    )
}
