import createElement from "../utils/createElement";

const Episode = ({ textTitle = 'Bonjour', textDate = 'Inconnu', tagName = 'div' } = {}) => createElement(
  {
    tagName,
    children: [
      {
        tagName: 'table',
        children: [
          {
            tagName: 'tr',
            children: [
              {
                tagName: 'h2',
                text: textTitle
              }
            ]
          },
          {
            tagName: 'tr',
            text: textDate
          }
        ]
      },
    ]
  }
)

export default Episode