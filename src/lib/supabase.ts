import { createClient } from '@supabase/supabase-js'

// Supabase configuration for Next.js
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate credentials in browser context only
if (typeof window !== 'undefined') {
  if (!supabaseUrl || !supabaseUrl.startsWith('http')) {
    console.warn('⚠️ Invalid or missing Supabase URL')
  }

  if (!supabaseAnonKey) {
    console.warn('⚠️ Missing Supabase Anonymous Key')
  }

  if (supabaseUrl && supabaseAnonKey) {
    console.log('✅ Supabase configured successfully')
  }
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

// Reviews table type
export type Review = {
  id: number
  created_at: string
  name: string
  company?: string
  position: string
  comment: string
  rating: number
}

// Queries table type
export type QueryRecord = {
  id: number
  created_at: string
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export type NewQueryInput = Omit<QueryRecord, "id" | "created_at">
