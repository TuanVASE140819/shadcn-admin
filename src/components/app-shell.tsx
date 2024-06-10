import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './sidebar'
import useIsCollapsed from '@/hooks/use-is-collapsed'

export default function AppShell() {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  const location = useLocation()
  // localstorage is used to store the user's data
  // if the user is not logged in, they will be redirected to the sign-in page
  if (!localStorage.getItem('user') && location.pathname !== '/sign-in') {
    location.pathname = '/sign-in'
  }
  return (
    <div className='relative h-full overflow-hidden bg-background'>
      {location.pathname !== '/sign-in' && (
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      )}
      <main
        id='content'
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
      >
        <Outlet />
      </main>
    </div>
  )
}
