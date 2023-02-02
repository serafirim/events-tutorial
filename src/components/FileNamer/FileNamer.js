/*
::::::::::::::::::[ NOTES ]:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
* event in the input name is not the native browser event but the SyntheticEvent provided by React.
* You could also use "event.target.name" instead of "event.target.value"; which would be useful if you were
  using the same event handler across multiple inputs since name would match the name attribute of the 
  component. 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

import React, { useEffect, useState } from 'react'
import './FileNamer.css'

export default function FileNamer() {
    const [ name, setName ] = useState('') // destructured useState into a variable name to hold input and a function called setName to update the data
    const [ alert, setAlert ] = useState(false) // to alert if an invalid character is used

    // Basically the same as "window.addEventListener('click', () => setAlert(false))"
    // For some reason mine doesn't work, anything?
    // This only closes the open popup. Maybe not the best here. 
    useEffect(() => {
        const handleWindowClick = () => setAlert(false)

        // Add the event listener every time you trigger the pop-up and remove it everytime the pop-up is closed
        if (alert) {
            window.addEventListener('click', handleWindowClick)
        } else {
            window.removeEventListener('click', handleWindowClick)
        }

        // Return the function that will remove the event listener
        return () => window.removeEventListener('click', handleWindowClick)
    }, [alert, setAlert])

    // -------------[ Variables ]-----------------------------------------------------------------
    const validate = event => {
        if(/\*/.test(name)) {
            event.preventDefault()
            setAlert(true)
            return
        } else {
            setAlert(false)
        }
    }
    // -------------------------------------------------------------------------------------------

    return(
        <div className="wrapper">
          <div className="preview">
            <h2>Preview: {name}.js</h2>
          </div>
          <form>
            <label>
              <p>Name:</p>
              <input
                autoComplete="off"
                name="name"
                onChange={event => setName(event.target.value) }
              />
            </label>
            <div className="information-wrapper">
              <button
                className="information"
                onClick={() => setAlert(true)}
                type="button"
              >
                more information
              </button>
             {alert &&
               <div className="popup">
                 <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
                 <br />
                 <span role="img" aria-label="not allowed">⛔️</span> *
               </div>
             }
            </div>
            <div>
              <button onClick={validate}>Save</button>
            </div>
          </form>
        </div>
      )
}