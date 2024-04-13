import { useState } from 'react'
import CopyToClipboard from "react-copy-to-clipboard"


function LinkResult() {
    const [shortenLink, setShortenLink] = useState('')
  return (
    <div className='result'>
        <p>{shortenLink}</p>
        <CopyToClipboard>
            
        </CopyToClipboard>

        <button>Copia el link</button>
    </div>
  )
}

export default LinkResult