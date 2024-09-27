import { createClient } from '@supabase/supabase-js';

 
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
 
const supabase = createClient(supabaseUrl, supabaseKey);
 
async function createPalavra(resource, data) {
    const { data: createdData, error } = await supabase
    .from(resource)
    .insert(data)
    .select('*');

    if (error) {
        throw error;
    }

    return createdData?.[0];
}

async function read(resource, id) {
    const { data: dados, error } = id
    ? await supabase.from(resource).select('*').eq('id', id)
    : await supabase.from(resource).select('*');

    if (error) {
        throw error;
    }

    return data;
}
async function readPartidas(id) {
    

    const { data: palavras, error } = await supabase
        .from('partida')
        .select('*')
        .eq('palavra', id);
    
    if (error) {
        throw error;
    }

    return palavras;
}

async function update(resource, id, data) {}

async function remove(resource, id) {}
 
export default { createPalavra, read, update, remove, readPartidas };