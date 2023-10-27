import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [tooted, setTooted] = useState([]);
  const [pakiautomaadid, setPakiautomaadid] = useState([]);
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const isActiveRef = useRef();


  useEffect(() => {
    fetch("https://localhost:7254/tooted")
      .then(res => res.json())
      .then(json => setTooted(json));
  }, []);

  function kustuta(index) {
    fetch("https://localhost:7254/tooted/kustuta/" + index, {"method": "DELETE"})
      .then(res => res.json())
      .then(json => setTooted(json));
  }

  function lisa() {
    fetch(`https://localhost:7254/tooted/lisa/${Number(idRef.current.value)}/${nameRef.current.value}/${(priceRef.current.value)}/${(isActiveRef.current.checked)}`, {"method": "POST"})
      .then(res => res.json())
      .then(json => setTooted(json));
  }

  function dollariteks() {
    const kurss = 1.1;
    fetch("https://localhost:7254/tooted/hind-dollaritesse/" + kurss, {"method": "PATCH"})
      .then(res => res.json())
      .then(json => setTooted(json));
  }

  function maksa() {
    fetch("https://localhost:7254/tooted/Payment/")
      .then(res => res.json())
      .then(json => setTooted(json));
  }
  function maksa(sum) {
    fetch(`https://localhost:7254/payment/${sum}`)
    .then(res => res.json())
    .then(paymentLink => {
    window.location.href = paymentLink;
    })
    .catch(error => {
    console.error("Viga maksmisel:", error);
    });
    } 

  return (
    <div className="App">
      <label>ID</label> <br />
      <input ref={idRef} type="number" /> <br />
      <label>Nimi</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Aktiivne</label> <br />
      <input ref={isActiveRef} type="checkbox" /> <br />
      <button onClick={() => lisa()}>Lisa</button>
      {tooted.map((toode, index) => 
        <table id="customers">
          <td>{toode.id}</td>
          <td>{toode.name}</td>
          <td>{toode.price}</td>
          <button onClick={() => kustuta(index)}>x</button>
          
      <td><button onClick={() => dollariteks()}>Muuda dollariteks</button></td>
      <button onClick={() => maksa(toode.price)}>maksa</button> 
      </table>)}
  
    </div>
    
  );
}

export default App;