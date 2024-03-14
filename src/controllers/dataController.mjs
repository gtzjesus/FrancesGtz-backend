import supabase from '../services/supabase.mjs';

export async function getHouses() {
  // Query all columns from the 'houses' database
  const { data: houses, error } = await supabase.from('houses').select('*');
  if (error) {
    throw new Error('Houses could not be fetched');
  }

  return houses;
}
