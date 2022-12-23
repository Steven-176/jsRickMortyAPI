import Character from "./Character";

export default function ListCharacter(arrayOfElement) {
  const template = document.querySelector('#listOfElement')
  const element = template.content.cloneNode(true)

  element.querySelector('div').classList = 'characterCards'
  
  arrayOfElement.forEach(e => {
    element.querySelector('div').appendChild(Character(e))
  });

  return element
}