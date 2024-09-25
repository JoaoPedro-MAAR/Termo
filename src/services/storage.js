import { createClient } from '@supabase/supabase-js';
 
const API_KEY = import.meta.env.VITE_APP_SUPABASE_KEY;
const API_URL = import.meta.env.VITE_APP_SUPABASE_URL;
 
const supabase = createClient(API_URL, API_KEY);
 
async function create(resource, data) {}

async function read(resource, id) {
    const { data, error } = id
    ? await supabase.from(resource).select('*').eq('id', id)
    : await supabase.from(resource).select('*');

    if (error) {
        throw error;
    }

    return data;
}

async function update(resource, id, data) {}

async function remove(resource, id) {}
 
export default { create, read, update, remove };