import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "../styles/EmojiResults.css";

function EmojiResult1({emojiData}){
    const [emojiClipBoard, setEmojiClipBoard] = useState([]);
    // const emojiClipBoard = new Clipboard()
    
    const emojiCoppy = () => {
        setEmojiClipBoard(new Clipboard(".copy-to-clipboard"))
    }
    
    useEffect(() => {
        emojiCoppy()
        
        return () => {
            setEmojiClipBoard(new Clipboard(""))
        }
    }, [])
    return (
        <div className="component-emoji-results">
            {emojiData.map(data => (
              <EmojiResultRow
                key={data.title}
                symbol={data.symbol}
                title={data.title}
              />
        ))}
        </div>
    )
}

EmojiResult1.propTypes = {
    emojiData : PropTypes.array
}

export default EmojiResults