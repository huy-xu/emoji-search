import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import "./EmojiResultRow.css"

function EmojiResultRow (){
    const [emoji,setEmoji] = useState({title:'', symbol: ''})
    const [codePointHex, setCodePointHex] = useState([emoji.symbol.codePointAt(0).toString(16)])
    const [src, setSrc] = useState([`//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`])
    
    return (
        <div  className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={emoji.symbol}>
            <img alt={emoji.title} src={src} />
            <span className="title">{emoji.title}</span>
            <span className="info">Click to copy emoji</span>
        </div>
    )
}

EmojiResultRow.propTypes = {
    emoji : PropTypes.shape({
        title: PropTypes.string,
        symbol: PropTypes.string
    })
}

export default EmojiResultRow