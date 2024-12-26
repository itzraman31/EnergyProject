import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwttoken } from '../App';

const MainPage = () => {
    let { islogin, logout } = useContext(jwttoken);
    const name = localStorage.getItem('name');

    if (name === null) {
        islogin = false;
    }

    return (
        <>
            <div className="outerdiv">
                <div className='Addiv'>
                    <img className='Adimg' src='Pimages/y.png' alt='youtube img' />
                    <img className='Adimg' src='Pimages/f.png' alt='youtube img' />
                    <img className='Adimg' src='Pimages/insta.webp' alt='youtube img' />
                </div>
                <div className='innerdiv'>
                    <div className="flex1">
                        <div className="flex">
                            <input type='text' placeholder=' SEARCH... ' />
                            <img className='searchimg' src='Pimages/search.png' alt='not found'></img>
                        </div>

                        <div className="flex2">
                            <img className="loginimg" src="Pimages/usericon.jpeg" alt="not found" />
                            {

                                islogin ? <h3 className='login'>Hey, {name}</h3> : <NavLink title='login' className="login" to="/login">Login</NavLink>
                            }
                            {
                                islogin ? <button className='logoutbtn' onClick={logout}>Logout</button> : <></>
                            }
                        </div>
                    </div>

                    <div>
                        <h1 style={{ textAlign: "center", marginTop: "20px", fontFamily: "Fenix,serif" }}>Sustainable-EnergySpot</h1>
                    </div>

                    <ToastContainer style={{ marginTop: "40px" }} />

                    <div>
                        <nav>
                            <ul className="nav">
                                <li><NavLink to="/knowledge" >Knowledge</NavLink></li>
                                <li><NavLink to="/askpitchorinvest" >Pitch/Invest</NavLink></li>
                                <li><NavLink to="/evcycle" >EV Cycle</NavLink></li>
                                <li><NavLink to="/broker" >Broker/Employment</NavLink></li>
                            </ul>
                        </nav>
                    </div>

                    <div className='slides'>
                    </div>

                </div>
                <footer >
                    <h2>Lets's Connect</h2>
                    <p style={{ marginBottom: '10px' }}>Renewable energy offers reducing carbon emissions</p>
                    <div>
                        <input type="text" placeholder=' Enter Email' />
                        <button>Submit</button>
                    </div>

                    <div className='lastdivfooter'>
                        <p>All rights are reserved for this website</p>

                        <div style={{ marginRight: '180px' }}>
                            <img className='Adimg' src='Pimages/insta.webp' alt='youtube img' />
                            <img className='Adimg' src='Pimages/y.png' alt='youtube img' />
                            <img className='Adimg' src='Pimages/f.png' alt='youtube img' />
                        </div>

                        <p>T&C Apply</p>

                    </div>

                </footer>

            </div>

        </>
    )
}

export default MainPage