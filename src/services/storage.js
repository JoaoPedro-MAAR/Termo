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


async function searchPalavra(palavra) {
    const { data: palavras, error } = await supabase
        .from('palavra')
        .select('*')
        .eq('palavra_text', palavra);

    if (error) {
        throw error;
    }

    return palavras;
    
}


async function readPartidas(id) {
    

    let { data: palavras, error } = await supabase
        .from('partida')
        .select('*')
        .eq('palavra', id);
    
    if (error) {
        throw error;
    }
    if (palavras.length === 0) {
        palavras = await searchPalavra(id);
        return palavras.length === 0 ? false : palavras;
    }

    return palavras;
}

async function createPartida(data) {
    const { data: createdData, error } = await supabase
    .from('partida')
    .insert(data)
    .select();

    if (error) {
        throw error;
    }

    return createdData?.[0];
}

async function update(resource, id, data) {}

async function remove(resource, id) {}
 
export default { createPalavra, read, update, remove, readPartidas };