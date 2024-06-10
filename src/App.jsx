
import './App.css'
import Header from './components/header/Header'
import Admin from './components/admin/Admin'
import Main from './components/main/Main'
import BlockImg from './components/BlockImg/BlockImg'
import BlockAbout from './components/BlockAbout/BlockAbout'
import AddPrice from './components/AddPrice/AddPrice'
import FaqBlock from './components/FaqBlock/FaqBlock'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <Header />
      <Admin />
      <Main />
      <BlockImg/>
      <BlockAbout/>
      <AddPrice/>
      <FaqBlock/>
      <Footer/>
    </>
  )
}

export default App
