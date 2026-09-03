import { supabase, type NewQueryInput, type QueryRecord } from "../supabase";
import { getStoredAttribution, trackCustomEvent } from "../tracking/utm";

export const addQuery = async (payload: NewQueryInput) => {
  try {
    if (!supabase) {
      return { data: null, error: new Error('Supabase not initialized') };
    }

    // Attach stored attribution metadata
    const attr = getStoredAttribution();
    const attributionTag = attr.utm_source 
      ? `\n\n[Attribution: Source=${attr.utm_source || 'direct'} | Campaign=${attr.utm_campaign || 'none'} | Landing=${attr.landing_page || '/'}]`
      : '';

    const enrichedPayload = {
      ...payload,
      message: `${payload.message || ''}${attributionTag}`.trim(),
    };

    const { error } = await supabase.from("queries").insert([enrichedPayload]);

    if (error) {
      console.error("Error adding query:", error);
      return { data: null, error };
    }

    // Dispatch conversion event to Google Analytics & Meta
    trackCustomEvent('generate_lead', {
      service: payload.service,
      source: attr.utm_source || 'organic_direct',
      campaign: attr.utm_campaign || 'none',
      landing_page: attr.landing_page || '/',
    });

    return { data: null, error: null };
  } catch (error) {
    console.error("Error adding query:", error);
    return { data: null, error };
  }
};

// Get all queries (for admin purposes)
export const getAllQueries = async () => {
  try {
    if (!supabase) {
      return { data: [], error: new Error('Supabase not initialized') };
    }

    const { data, error } = await supabase
      .from('queries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { data: (data as QueryRecord[]) || [], error: null };
  } catch (error) {
    console.error('Error fetching all queries:', error);
    return { data: [], error };
  }
};

// Delete a query (for admin purposes)
export const deleteQuery = async (id: number) => {
  try {
    if (!supabase) {
      return { error: new Error('Supabase not initialized') };
    }

    const { error } = await supabase
      .from('queries')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    return { error: null };
  } catch (error) {
    console.error('Error deleting query:', error);
    return { error };
  }
};

// Update a query (for admin purposes)
export const updateQuery = async (id: number, updates: Partial<QueryRecord>) => {
  try {
    if (!supabase) {
      return { error: new Error('Supabase not initialized') };
    }

    const { error } = await supabase
      .from('queries')
      .update(updates)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return { error: null };
  } catch (error) {
    console.error('Error updating query:', error);
    return { error };
  }
};
