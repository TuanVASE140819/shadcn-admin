import { createBrowserRouter } from 'react-router-dom'
import GeneralError from './pages/errors/general-error'
import NotFoundError from './pages/errors/not-found-error'
import MaintenanceError from './pages/errors/maintenance-error'



function isLoggedIn() {
  const user = localStorage.getItem('user')
  return user !== null

  console.log('user', user)
}
const router = createBrowserRouter([
  // Auth routes
  {
    path: '/',
    lazy: async () => {
      const AppShell = await import('./components/app-shell')
      return { Component: AppShell.default }
    },
    errorElement: <GeneralError />,
    children: [
      {
        index: true,
        lazy: async () => {
          // Check if user is logged in
          if (!isLoggedIn()) {
            // If not, redirect to sign-in page
            return { Component: (await import('./pages/auth/sign-in')).default }
          }
          // If logged in, proceed to dashboard
          return { Component: (await import('./pages/dashboard')).default }
        },
      },
      {
        path: 'tasks',
        lazy: async () => {
          // Check if user is logged in
          if (!isLoggedIn()) {
            // If not, redirect to sign-in page
            return { Component: (await import('./pages/auth/sign-in')).default }
          }
          // If logged in, proceed to tasks
          return { Component: (await import('@/pages/tasks')).default }
        },
      },
      {
        path: '/sign-in',
        lazy: async () => ({
          Component: (await import('./pages/auth/sign-in')).default,
        }),
      },
      {
        path: '/sign-in-2',
        lazy: async () => ({
          Component: (await import('./pages/auth/sign-in-2')).default,
        }),
      },
      {
        path: '/sign-up',
        lazy: async () => ({
          Component: (await import('./pages/auth/sign-up')).default,
        }),
      },
      {
        path: '/forgot-password',
        lazy: async () => ({
          Component: (await import('./pages/auth/forgot-password')).default,
        }),
      },
      {
        path: '/otp',
        lazy: async () => ({
          Component: (await import('./pages/auth/otp')).default,
        }),
      },

      // Profile
      {
        path: '/profile',
        lazy: async () => ({
          Component: (await import('./pages/settings/profile')).default,
        }),
      },
    ],
  },

  // Main routes

  // Error routes
  { path: '/500', Component: GeneralError },
  { path: '/404', Component: NotFoundError },
  { path: '/503', Component: MaintenanceError },

  // Fallback 404 route
  { path: '*', Component: NotFoundError },
])

export default router
