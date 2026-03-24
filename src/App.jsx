import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='Parent'>
      
      <div className="card">
        <div className="top">
          <img src = "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt = ""/>
          <button>Save <Bookmark/></button>
        </div>

        <div className="center"></div>

        <div className="bottom"></div>
      </div>

    </div>
  )
}

export default App