import ListEpisode from "../components/ListEpisode"
import { getEpisodeFromApi } from "../utils/Api"
import { getSingleCharacterFromApi } from "../utils/Api"

const ListOfEpisode = async (firstParam, secondParam) => {
  const res = await getEpisodeFromApi()

  const data = res.map((element) => ({
    textTitle: `${element.episode} - ${element.name}`,
    textDate: `${element.air_date}`,
  }))

  // console.log(data)
  return ListEpisode(data)
}

export default ListOfEpisode