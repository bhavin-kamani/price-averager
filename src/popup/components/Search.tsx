import React, {useEffect, useState} from "react";


const Search: React.FC = () => {
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        chrome.storage.local.get("search")
            .then((s: { [k: string]: Message }) => {
                if (s["search"] && s["search"].type === "productSearch" && s["search"].data) {
                    setSearch(s["search"].data)
                }
            })
    }, [search])

    return <div className="search">{search}</div>
}

export default Search