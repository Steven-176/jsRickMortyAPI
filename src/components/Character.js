import createElement from "../utils/createElement";

const Character = ({ textName = 'Not Found', src,  characterId = 'NotFound', characterDetails = 'Not Found', tagName = 'div' } = {}) => createElement(
  {
    tagName: 'div',
    classList: ['card'],
    attributes: {
      style: 'width: 18rem;margin:50px;'
    },
    children: [
      {
        tagName: 'img',
        classList: ['card-img-top'],
        attributes: {
          src: src || 'https://via.placeholder.com/150',
          alt: 'Image représentant le personnage'
        }
      },
      {
        tagName: 'div',
        classList: ['card-body'],
        children: [
          {
            tagName: 'h5',
            classList: ['characterLinks'],
            text: textName,
            attributes: {
              id: characterId
            }
          }
        ]
        
      }
    ]
  }
)

export default Character

