import { useState } from 'react';
import emojiList from "../emojiList.json";

function useFilter() {
    const [filteredEmoji, setFilteredEmoji] = useState(emojiList.slice(0, 20));

    const filterEmoji = (searchText, maxResults) => {
        const data = emojiList.filter(emoji => {
                if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
                    return true;
                }
                if (emoji.keywords.includes(searchText)) {
                    return true;
                }
                return false;
            })
            .slice(0, maxResults);

        setFilteredEmoji(data);
    }

    return [filteredEmoji, filterEmoji];
}

export default useFilter;
