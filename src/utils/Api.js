
export const getCharacterFromApi = async () => {
  const req = await fetch(`https://rickandmortyapi.com/api/character`)
  const res = await req.json()

  return res.results
}