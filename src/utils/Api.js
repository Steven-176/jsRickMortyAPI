export const getCharacterFromApi = async (filter = '') => {
  const req = await fetch(`https://rickandmortyapi.com/api/character/${filter}`)
  const res = await req.json()

  if (filter) {
    return res
  } 
  return res.results
}