import ListOfEpisode from './src/pages/ListOfEpisode'
import TabManager from './src/utils/TabManager'

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfEpisode,
    params: ['https://rickandmortyapi.com/api/episode']
  }
})


document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

tabManager.openTabById('page1')
