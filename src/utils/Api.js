
export const getEpisodeFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/episode')
  const res = await req.json()

  // console.log(res)

  return res.results
}

export const getSingleCharacterFromApi = async (id) => {
  // console.log(id)

  const req = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const res = await req.json()

  return res
}