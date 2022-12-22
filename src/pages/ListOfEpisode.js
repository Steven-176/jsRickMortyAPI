import ListEpisode from "../components/ListEpisode"
import { getEpisodeFromApi } from "../utils/Api"

const ListOfEpisode = async (firstParam, secondParam) => {
  const res = await getEpisodeFromApi()
  const data = res.map((element) => ({
    text: `${element.name}`
  }))

  // console.log(data)
  return ListEpisode(data)
}

export default ListOfEpisode