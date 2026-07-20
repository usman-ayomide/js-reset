import { useState } from 'react'

function App(){
    const [input, setInput] = useState({
        fName: "", lName: "", email: ""
    });

    function handleChange(e){
        const {name, value} = e.target;

        setInput((previous) => ({
            ...previous, [name] : value
        }));
    }

    function handleSubmit(e){
        e.preventDefault();
    }

 return (
    <div className='container'>
        <h1>Hello {input.fName} {input.lName}</h1>
        <p>{input.email}</p>

        <form onSubmit={handleSubmit}>
            <input name='fName' placeholder='First name' 
                value={input.fName} onChange={handleChange}
            />
            <input name='lName' placeholder='Last name' 
                value={input.lName} onChange={handleChange}             
            />
            <input name='email' placeholder='Email' 
                value={input.email} onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
 )   
}

export default App