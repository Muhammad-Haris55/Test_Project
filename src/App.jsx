import './App.css'
import Mainpage from './Page/Mainpage'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
function App() {

  // Smooth scrolling library
  const lenis = useLenis(({ scroll }) => {
    // called on every scroll
  })
  return (
    <>
      <ReactLenis root>
        <Mainpage />
      </ReactLenis>

    </>
  )
}

export default App
