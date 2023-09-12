import { useEffect, useState } from "react"

export const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);


    const handleFetch = async() =>{
        try {
            const respone = await fetch('https://rickandmortyapi.com/api/character');
            const data = await respone.json();    
            
            setCharacters(data.results);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{

       handleFetchCharacters()
    }, [])

    return <>
        {characters.map(({name,status,image,location, url}, index) => <Card key={index} name={name} status={status} image={image} location={location} url={url}/>)}
    </>
}