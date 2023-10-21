import {useState} from 'react'
import Navbar from '../utilities/Navbar'
import BuyProductInformation from '../buyProduct/BuyProductInformation';
import PersonalInformation from '../personalInformation/PersonalInformation';

const View = () => {
    const [view, setView] = useState(0);

    const handleBuyProduct = () =>{
        console.log("buy")
    }
    const handlePrev =()=>{
       console.log("prev")
    }
  return (

    <div>
        <Navbar/>
        <div>{view === 0  && <BuyProductInformation handleBuyProduct ={handleBuyProduct}/> }</div>
        <div>{view === 1 && <PersonalInformation handlePrev ={handlePrev}/>}</div>
      
    </div>
  )
}

export default View
