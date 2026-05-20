const endpoint = new URL('https://jsonplaceholder.typicode.com/users');

const response = fetch(endpoint)
                                .then(res => res.json())
                                .then(data => {
                                    let filtered = data.filter(res => res.name.toLowerCase().includes("a"));
                                    let map = filtered.map(res => {return `Name: ${res.name} | Email: ${res.email}`}).join("\n");
                                    console.log(map);
                                });