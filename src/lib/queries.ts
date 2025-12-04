import { supabase, type NewQueryInput } from "./supabase"

export const addQuery = async (payload: NewQueryInput) => {
  try {
    if (!supabase) {
      return { data: null, error: new Error('Supabase not initialized') }
    }

    const { error } = await supabase.from("queries").insert([payload])

    if (error) {
      console.error("Error adding query:", error)
      return { data: null, error }
    }

    return { data: null, error: null }
  } catch (error) {
    console.error("Error adding query:", error)
    return { data: null, error }
  }
}
