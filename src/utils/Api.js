
export const getCharacterFromApi = async () => {
  const req = await fetch(`https://rickandmortyapi.com/api/character`)
  const res = await req.json()

  return res.results
}

export const getSingleCharacterFromApi = async (id) => {
  // console.log(id)

  const req = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const res = await req.json()

  return res
}