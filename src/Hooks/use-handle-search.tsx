import { useEffect, useState } from "react"

const UseHandleSearch = <T extends { [key: string]: any }>({ searchText, data, searchItem }: { searchText: string, data: T[], searchItem: string }) => {
    const [searched, setSearched] = useState<T[]>(data);
    useEffect(() => {
        const result = data?.filter((item) => (item[searchItem]?.replace(/\s/g, '')?.toLowerCase()?.includes(searchText?.replace(/\s/, '')?.toLowerCase())))
        setSearched(result);
    }, [searchText]);
    useEffect(() => {
        if (searchItem.length === 0) setSearched(data);
    }, [searchText]);
    return { searched };
}

export default UseHandleSearch