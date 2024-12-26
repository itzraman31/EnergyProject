import React, { useState } from 'react'

const ToggleTRY = () => {
  const [toggle, settoggle] = useState(true)

  const [togglecss,settogglecss]=useState({
    width: "14%",
    height: "100vh",
    border: "1px solid red",
    backgroundColor: "aqua"
  })

  const changetoggle = () => {
    // toggle=!toggle
    console.log(toggle)
    settoggle(!toggle)

    if (toggle === true) {
      settogglecss({
        width: "14%",
        height: "100vh",
        border: "1px solid red",
        backgroundColor: "aqua"
      })
    }
    else {
      settogglecss({
          width: "5%",
          height: "100vh",
          border: "1px solid red",
          backgroundColor: "aqua"
        })
    }
  }
  // useEffect(()=>{

  // },[changetoggle])
  return (

    <>
      <div className="toggletry">

        <div style={ togglecss }>
        {/* className="firsttoggle" */}

          {toggle ?
            <img src="/images/threebarWB.png" alt="not found" className='imgs' onClick={changetoggle} />

            : <div >
              <img src="/images/crossWB.png" alt="not found" className='imgs' onClick={changetoggle} title='toggle' />
              <ul>
                <li>Feeds</li>
                <li>Messages</li>
                <li>Friends</li>
                <li>Setting</li>
              </ul>
            </div>
          }
          {/* <ul>
             <li>Feeds</li>
             <li>Messages</li>
             <li>Friends</li>
             <li>Setting</li>
           </ul> */}

        </div>

        <div className="sectoggle">
          <h2>SecDiv</h2>
        </div>

      </div>
    </>
  )
}

export default ToggleTRY
