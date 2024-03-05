"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        // console.log({ name, age });
        // TODO generate a unique id
        const newId = Math.floor(Math.random() * 1000000)
        const newDog = { id: newId, name, age };
        onAddDog(newDog);        
    }

    return (
        <div>
            <h2>Add Dog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(event) => setName(event.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input 
                        type="number" 
                        id="age" 
                        value={age} 
                        onChange={(event) => setAge(event.target.value)} 
                    />
                </div>
                <button type="submit">Add Dog</button>
            </form>
        </div>
    );
}
