import {contacts} from "../contacts";

function Card(props){
  return (
       <div className="card">
        <div className="top">

          <h2 className="name">{props.name}</h2>
          <img className="circle-img"
            src={props.img}
            alt={props.name}
          />
        
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>

  );
}

function App(){
  return(
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map((contact) => (
        <Card 
          key={contact.name}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        /> 
      ))}

    </div>
  )
}


export default App;