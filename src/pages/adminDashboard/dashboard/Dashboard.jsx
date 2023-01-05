import React from 'react'
import SideBarLayout from '../layouts/SideBarLayout'
import DashboardContent from './components/DashboardContent'

export default function Dashboard() {
    return (
        <SideBarLayout title={'Hey, Chris!'}>
            <DashboardContent />
        </SideBarLayout>
    )
}
