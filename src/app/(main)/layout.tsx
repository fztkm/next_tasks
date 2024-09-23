import SideMenu from '@/components/SideMenu/SideMenu';
import React from 'react'

const MainLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="flex h-screen">
        <SideMenu />
        <div className='bg-red-300 flex-1 overflow-auto'>{children}</div>
    </div>
  )
}

export default MainLayout