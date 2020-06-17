import React, { useState, useEffect } from 'react'

const UseAPI = () => {
    const url = 'https://api.nationalize.io?name=michael'
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            fetch(url)
                .then((response) => response.json())
                .then((result) => {
                setData(result);
                console.log(result);           
                })                
            }
        fetchData()
    }, [])

    if(!data) return null

    return (
        <div>
            {data.name}
        </div>
    )
}
export default UseAPI