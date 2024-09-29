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


async function searchUsuario(data) {
    const { data: usuarios, error } = await supabase
        .from('usuario')
        .select('*')
        .eq('email', data.email)
        .eq('senha', data.senha);

    if (error) {
        throw error;
    }

    return usuarios?.[0];
    
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

function createUsuario(data) {
    return createPalavra('usuario', data);
}



async function update(resource, id, data) {}

async function remove(resource, id) {}
 
export default { createPalavra, read, update, remove, readPartidas, createUsuario, searchUsuario };
