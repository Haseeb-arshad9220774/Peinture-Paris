import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Herosection from './Component/Herosection'
import Footerherosection from './Component/Footerherosection'
import Mainhero from './Component/Mainhero'
import Paintdesign from './Component/Exploreproject/Paintdesign'
import Custompaint from './Component/Exploreproject/Custompaint'
import Ourproducts from './Component/Exploreproject/Ourproducts'
import Explorepaint from './Component/Exploreproject/Explorepaint'
import Mainproject from './Component/Mainproject'
import Dulux from './Component/Paintproduction/Dulux'
import Customer from './Component/Ourcustomer/Customer'
import Letstalk from './Component/Talks/Letstalk'
import Footer from './Component/footer/Footer'
import Haseeb from './Component/Talks/Haseeb'
import Login from './Component/NavbarContent/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Herosection/> */}
   {/* <Footerherosection/> */}
   {/* <Mainhero/> */}
   {/* <Paintdesign/>
   */}
   {/* <Custompaint/>
<Ourproducts/>
<Explorepaint/> */}
<Mainproject/>
<Dulux/>
<Customer/>
<Letstalk/>
<Footer/> 
{/* <Haseeb/>
{/* <Login/> */}
    </>
  )
}

export default App
