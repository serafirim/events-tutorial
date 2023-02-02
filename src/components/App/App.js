/*
::::::::::::::::::[ NOTES ]:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
* DOM = Document Object Model
* you can use event handlers to update state data, trigger prop changes, or prevent default browser actions.
* React uses a SyntheticEvent wrapper instead of a native Event interface. This closely emulates the standard
  browser event but provides more consistent behavior for different web browsers.
* In React you don't need to select elements before adding event listeners instead you add event handlers
  directly to your JSX using props.
* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

import './App.css'
import FileNamer from '../FileNamer/FileNamer'

function App() {
  return (
    <>
      <FileNamer />
    </>
  )
}

export default App
