import createElement from "../utils/createElement";

const Episode = ({ text = 'Bonjour', src, tagName = 'div' } = {}) => createElement(
  {
    tagName,
    children: [
      {
        tagName: 'h2',
        text,
      }
    ]
  }
)

export default Episode