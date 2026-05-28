const users = [
    { id: 1, name: "Aisha", role: "admin" },
    { id: 2, name: "Emeka", role: "user" },
    { id: 3, name: "Fatima", role: "user" }
];

function getUser(id){
    if(typeof id !== "number"){
        throw new Error("must be a number, bakana?");
    }

    const user = users.find(user => user.id === id);

    if(!user){
        throw new Error("who are you? nanda kore?");
    }
    
    return user;
}

function processUser(id){
    try{
        const user = getUser(id);
        console.log(`Processing user: ${user.name} with role: ${user.role}`);
    }
    catch(err){
        console.log(`Error: ${err.message}`);
    }
}

processUser(1);      // should work
processUser(5);      // user not found
processUser("abc");  // invalid id