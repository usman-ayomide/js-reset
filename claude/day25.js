const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers(){
    try{
        const res = await fetch(url);
        const data = await res.json();
        const filtered = data.filter(res => res.name.toLowerCase().includes("a"));
        const mapped = filtered.map(res => { return `Name: ${res.name} | Email: ${res.email}`}).join("\n");
        console.log(mapped);
       
    } catch(err){
        console.error(err);
    }
}

getUsers();