import ClientLayout from '@/components/global/ClientLayout'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <ClientLayout>
                {children}
            </ClientLayout>
        </div>
    )
}

export default layout