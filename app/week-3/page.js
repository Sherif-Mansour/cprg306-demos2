import Dog from "./dog";

export default function Page() {
    const dog1 = {
        name: "Cleo",
        breed: "French Bulldog",
        age: 2,
    };

    const dog2 = {
        name: "Milo",
        breed: "Retriever",
        age: 4,
    };

    const dog3 = {
        name: "Tater",
        breed: "Pug",
        age: 5,
    };

    return (
        <main className="m-4">
            <h1 className="text-4xl font-bold text-slate-700 mb-3">My Favorite Dogs</h1>
            <Dog name={dog1.name} breed={dog1.breed} age={dog1.age} />
            <Dog name={dog2.name} breed={dog2.breed} age={dog2.age} />
            <Dog name={dog3.name} breed={dog3.breed} age={dog3.age} />
        </main>
    )
}