// Centralized route constants for the app.
// Use these to avoid hard-coded path strings across the codebase.

export const ROUTES = {
  home: '/',
  auth: {
    base: '/auth',
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    verify: '/auth/verify',
    verifyEmail: '/auth/verify-email',
  },
  clients: '/clients',
  dashboard: '/dashboard',
  landing: '/landing',
  leads: '/leads',
  projects: '/projects',
  settings: '/settings',
}

export default ROUTES;
