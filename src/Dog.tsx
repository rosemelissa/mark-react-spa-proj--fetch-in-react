import {useState} from 'react';

interface DogAPI {
    message: string;
    status: string;
}


function Dog() : JSX.Element {
    const [dogs, setDogs] = useState<DogAPI[]>([]);

    // const handleGetDogs = async () => {
    //     const response = await fetch("https://dog.ceo/api/breed/hound/images/random");
    //     const jsonBody: DogAPI = await response.json();
    //     setDogs([...dogs, jsonBody])
    // }

    const handleGetDogs = () => {
        fetch("https://dog.ceo/api/breed/labrador/images/random")
        .then(response => response.json())
        .then((jsonBody: DogAPI) => setDogs([...dogs, jsonBody]))
    }

    return (
        <>
            <h1>Dog</h1>
            {(dogs) && dogs.map(dog => <img src={dog.message} alt='Dog'/>)}
            <button type='button' onClick={handleGetDogs}>Get Dog</button>
        </>
    )
}

export default Dog;