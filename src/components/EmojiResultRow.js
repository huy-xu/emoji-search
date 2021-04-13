import React from 'react'
import PropTypes from 'prop-types'
import "../styles/EmojiResultRow.css"

function EmojiResultRow(emojiData) {
    const codePointHex = emojiData.symbol.codePointAt(0).toString(16)
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`

    return (
        <div  className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={emojiData.symbol}>
            <img alt={emojiData.title} src={src} />
            <span className="title">{emojiData.title}</span>
            <span className="info">Click to copy emoji</span>
        </div>
    )
}

EmojiResultRow.propTypes = {
    emojiData: PropTypes.shape({
        title: PropTypes.string,
        symbol: PropTypes.string
    })
}

export default EmojiResultRow
