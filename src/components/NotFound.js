import createElement from "../utils/createElement";

const NotFound = () => createElement(
  {
    tagName: 'div',
    classList: ['notFound'],
    attributes: {
      id: 'notFound',
    },
    children: [
      {
        tagName: 'p',
        classList: ['number404'],
        text: '404'
      },
      {
        tagName: 'p',
        classList: ['message404'],
        text: 'Votre personnage n\'a pas été trouvé'
      }
    ]
  }
)

export default NotFound