import {useState} from 'react';

interface DogAPI {
    message: string;
    status: string;
}


function Dog() : JSX.Element {
    const [dog, setDog] = useState<DogAPI>();

    // const handleGetDog = async () => {
    //     const response = await fetch("https://dog.ceo/api/breed/hound/images/random");
    //     const jsonBody: DogAPI = await response.json();
    //     setDog(jsonBody)
    // }

    const handleGetDog = () => {
        fetch("https://dog.ceo/api/breed/labrador/images/random")
        .then(response => response.json())
        .then((jsonBody: DogAPI) => setDog(jsonBody))
    }

    return (
        <>
            <h1>Dog</h1>
            {(dog) && <img src={dog.message} alt='Dog'/>}
            <button type='button' onClick={handleGetDog}>Get Dog</button>
        </>
    )
}

export default Dog;