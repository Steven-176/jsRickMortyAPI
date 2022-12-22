import ListOfPost from './src/pages/ListOfPost'
import ListOfUser from './src/pages/ListOfUser'
import ListOfEpisode from './src/pages/ListOfEpisode'
import TabManager from './src/utils/TabManager'

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfUser,
    params: [1, 'hello']
  },
  page2: {
    component: ListOfPost,
    params: ['https://jsonplaceholder.typicode.com/posts']
  },
  page3: {
    component: ListOfEpisode,
    params: []
  }
})


document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

tabManager.openTabById('page1')
