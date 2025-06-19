import Knowledge from "./component/Knowledge";
import MainPage from "./component/Mainpage";
import Pitch from "./component/Pitch";
import Evcycle from "./component/Evcycle";
import Broker from "./component/Broker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { createContext, useEffect, useState } from "react";
import AskPitchORInvest from "./component/AskPitchORInvest";
import Investorlogin from "./component/Investorlogin";
import Investorsignup from "./component/Investorsignup";
import Pitchidea from "./component/Pitchidea";
import Showidea from "./component/Showidea";
import ToggleTRY from "./component/ToggleTRY";
import Charts from "./Charts";

const jwttoken = createContext();

function App() {
  const [islogin, setislogin] = useState(true)
  const [arr, setarr] = useState([])

  const tokenstoreftn = (values) => {
    localStorage.setItem('token', values.token)

    const name = values.user.firstname
    localStorage.setItem('name', name)

    const useremail=values.user.email
    localStorage.setItem('email', useremail)

    setislogin(true)

  }
  const pitchideadata = (data) => {
   
    setarr(data)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    setislogin(false)
    return;
  }

  
  return (
    <>
      <jwttoken.Provider value={{ tokenstoreftn, logout, islogin, arr, pitchideadata}}>

        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<ToggleTRY />} /> */}
            <Route path="/" element={<MainPage />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/pitch" element={<Pitch />} />
            <Route path="/evcycle" element={<Evcycle />} />
            <Route path="/broker" element={<Broker />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/askpitchorinvest" element={<AskPitchORInvest />} />
            <Route path="/investlogin" element={<Investorlogin />} />
            <Route path="/investsignup" element={<Investorsignup />} />
            <Route path="/pitchidea" element={<Pitchidea />} />
            <Route path="/showidea" element={<Showidea />} />


            <Route path="/charts" element={<Charts />} />
          </Routes>
        </BrowserRouter>

      </jwttoken.Provider>
    </>
  );
}

export default App;
export { jwttoken };