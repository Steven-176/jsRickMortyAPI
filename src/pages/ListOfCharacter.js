import ListCharacter from "../components/ListCharacter"
import SingleCharacterModal from "../components/SingleCharacterModal"
import { getCharacterFromApi } from "../utils/Api"

const ListOfCharacter = async (searchCharacter, Param) => {
  
  if (searchCharacter) {
    searchCharacter = `?name=${searchCharacter}`
  }
  const res = await getCharacterFromApi(searchCharacter)

  if (res) {
    const data = res.map((element) => ({
      textName: `${element.name}`,
      src: element.image,
      characterId: `character${element.id}`
    }))

    // const divCharacter = document.querySelector('.characterCard')
    // console.log(divCharacter)

    // console.log(data[0].characterId)

    const element = ListCharacter(data)

    /**
     * Single Character modal display
     */
   
    const allCharacterCard = element.querySelectorAll('.characterLinks')
    allCharacterCard.forEach((characterCard) => {
      characterCard.addEventListener('click', async function(e) {
        const app = document.querySelector('#app')
        app.innerHTML = ''
        const singleRes = await getCharacterFromApi(e.target.id.slice(9))
        // console.log(singleData)
        app.appendChild(SingleCharacterModal(singleRes))
      })
    })

    return element

  } else {
    return Error;
  }
}

export default ListOfCharacter