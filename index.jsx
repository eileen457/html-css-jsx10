const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [atendees, setAtendees] = useState("");
  const [dietary, setDietary] = useState("");
  const [bringing, setBringing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(email);

  const attendeesNum = Number(atendees);
  const isAtendeesValid = atendees !== "" && attendeesNum >= 1 && attendeesNum <= 20;

  const isDietaryProvided = dietary.trim() !== "";

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted({name,email,atendees,dietary,bringing});
  }

  return (
    <div className="f">
      <form className="enviar" onSubmit={handleSubmit}>
        <label>Name
        </label>
        <input placeholder="Your name" type="text" value={name} onChange={e => setName(e.target.value)} required/>

        <label>Email
        </label>
        <input placeholder="Your Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>

        <label>Number of atendees
        </label>
        <input placeholder="place number of atendeer" type="number" min="1" max="20" value={atendees} onChange={e => setAtendees(e.target.value)} required/>

        <label>Dietary Preferences:
        </label>
        <input type="text" placeholder="dietary preferences (optional)" value={dietary} onChange={e => setDietary(e.target.value)}/>

        <label >Bringing additional guests?
          <input className="check" type="checkbox" checked={bringing} onChange={e => setBringing(e.target.checked)}/>
        </label>

        <button className="submit-btn" type="submit">Submit RSVP</button>

    {submitted &&
    
      <div> 
        <p>RSVP Submitted!</p>
        <p>Name: {submitted.name}</p>
        <p>Email: {submitted.email}</p>
        <p>Email is {isEmailValid ? "valid" : "invalid"}</p>
        <p>Number of attendees: {submitted.atendees}</p>
        <p>Number of attendees is {isAtendeesValid ? "valid" : "invalid"}</p>
        <p>Dietary preferences: {submitted.dietary ? submitted.dietary : "None"}</p>
        <p>Dietary preferences {isDietaryProvided ? "provided" : "not provided"}</p>
        <p>Bringing additional guests: {submitted.bringing ? "Yes" : "No"}</p>
      </div>
         }
      </form>
    </div>
  );
}
