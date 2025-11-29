
// Wait, I should check what toast library is actually being used or if it's custom.
// Based on previous file reads, it's a custom ToastProvider.
// I'll just return standard error objects and let the component handle the toast for now, 
// or I can import the Toast type if needed, but usually api.ts shouldn't depend on UI components directly if possible.
// Actually, the plan said "Create a handleApiError function that extracts a user-friendly message".

export interface ApiError {
    statusCode: number
    message: string | string[]
    error?: string
}

export function getErrorMessage(error: unknown): string {
    if (typeof error === 'string') return error

    if (error && typeof error === 'object' && 'message' in error) {
        const apiError = error as ApiError
        if (Array.isArray(apiError.message)) {
            return apiError.message.join(', ')
        }
        return apiError.message
    }

    return 'An unexpected error occurred'
}

// Real API Client (Backend Integration)
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export const api = {
    auth: {
        login: async (email: string, password: string): Promise<{ token: string }> => {
            // TODO: Replace with real backend call
            // const res = await fetch(`${API_URL}/auth/login`, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email, password }),
            // })
            // if (!res.ok) throw await res.json()
            // return res.json()

            // Temporary placeholder for frontend dev
            console.log('Login attempt:', { email, password })
            return { token: 'mock-jwt-token' }
        },
        register: async (data: any): Promise<{ id: string }> => {
            // TODO: Replace with real backend call
            // const res = await fetch(`${API_URL}/auth/register`, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data),
            // })
            // if (!res.ok) throw await res.json()
            // return res.json()

            // Temporary placeholder for frontend dev
            console.log('Register attempt:', data)
            return { id: 'new-user-id' }
        }
    }
}
