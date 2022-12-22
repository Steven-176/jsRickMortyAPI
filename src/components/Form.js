import createElement from "../utils/createElement";

const Card = ({ text = 'Bonjour', tagName = 'form' } = {}) => createElement(
  {
    tagName,
    children: [
      {
        tagName: 'input',
        attributes: {
          type: 'text',
          name: 'epName'
        }
      },
      {
        tagName: 'button',
        text,
        attributes: {
            type: 'submit',
        }
      },
    ]
  }
)

export default Form