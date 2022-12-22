import ListCharacter from "../components/ListCharacter"
import { getCharacterFromApi } from "../utils/Api"

const ListOfCharacter = async (firstParam, secondParam) => {
  const res = await getCharacterFromApi()
  
  const data = res.map((element) => ({
    textName: `${element.name}`,
    src: element.image
  }))
  return ListCharacter(data)
}

export default ListOfCharacter