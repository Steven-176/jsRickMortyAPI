import createElement from "../utils/createElement";

const SingleCharacter = (character) => createElement(
  {
    tagName: 'div',
    classList: ['singleCard'],
    attribute: {
      id: 'singleCharacter',
    },
    children: [
      {
        tagName: 'img',
        classList: ['card-img-top'],
        attributes: {
          src: character.image || 'https://via.placeholder.com/150',
        }
      },
      {
        tagName: 'div',
        classList: ['card-body'],
        children: [
          {
            tagName: 'h5',
            classList: ['card-title'],
            text: character.name
          }
        ]
      },
      {
        tagName: 'ul',
        classList: ['list-group', 'list-group-flush'],
        children: [
          {
            tagName: 'li',
            classList: ['list-group-item'],
            text: `Espèce : ${character.species}`
          },
          {
            tagName: 'li',
            classList: ['list-group-item'],
            text: `Statut : ${character.status}`
          },
          {
            tagName: 'li',
            classList: ['list-group-item'],
            text: `Genre : ${character.gender}`
          },
          {
            tagName: 'li',
            classList: ['list-group-item'],
            text: `Planète d'origine : ${character.origin.name}`
          },
          {
            tagName: 'li',
            classList: ['list-group-item'],
            text: `Localisation actuelle : ${character.location.name}`
          },
        ]
      }
    ]
  }
)

export default SingleCharacter