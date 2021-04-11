import { useState } from 'react';
import emojiList from "../emojiList.json";

function useFilter() {
    const [filteredEmoji, setFilteredEmoji] = useState([]);

    const filterEmoji = (searchText, maxResults) => {
        emojiList.filter(emoji => {
                if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
                    return true;
                }
                if (emoji.keywords.includes(searchText)) {
                    return true;
                }
                return false;
            })
            .slice(0, maxResults);

        setFilteredEmoji(filterEmoji);
    }

    return [filteredEmoji, filterEmoji];
}

export default useFilter;
