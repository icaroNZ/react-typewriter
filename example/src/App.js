import React from 'react'

import Typewriter from '@icarolavrador/react-typewriter'
import 'react-typewriter/dist/index.css'

const App = () => {
  const textArrayExample = [
    'small',
    'medium, this is a medium size text example',
    'long text, this is a long text to server as an example how long text work!'
  ]
  return <Typewriter textArray={textArrayExample} />
}

export default App
