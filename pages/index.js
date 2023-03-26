import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Modal from 'react-modal';
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import styles from '../styles/Home.module.css'
import search from './search';


const buttonStyle = {
  padding: "15px",
  borderRadius: "50%",
  background: "red",
  opacity: 0.7,
  fontSize: "20px"
};

const headerStyle = {
  color:'white',
  position:"absolute",
  zIndex:4,
  top:'30%',
  left:'30%'
}

const ageStyle = {
  color:'white',
  position:"absolute",
  zIndex:4,
  top:'40%',
  left:'40%'
}

const contentStyle = {
  color:'white',
  textAlign:"center",
  top:'50%',
  left:'30%',
  position:"absolute",
  zIndex:4
}
  
const bgImg = {
  position: "fixed",
  zIndex: 3,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 999999,
    color : 'black',
    
  },
};

let strName = ["dog", "cat","mouse"];

function Animal(props){
    if(!props.data) return <p>Loading</p>
    const {header,age,content,img} = props.data;
    return (
        <div>
          <h1 style={headerStyle}>Имя: {header}</h1> <br />
          <h2 style={ageStyle}>Возраст: {age}</h2>
          <h2 style={contentStyle}>Порода: {content}</h2>
          <img
            style={bgImg}
            src={img}
          />
        </div>
    );
}

export default function Home() {
  const [animals,setAnimals] = React.useState([]);
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [breed, setBreed] = React.useState('');
  const [enter, setEnterElement]= React.useState('');
  let [elementsArray, setNewArray] = React.useState([]);

  React.useEffect(()=>{
    fetch('/animals.json').then(data=>data.json()).then(data=>setAnimals(data));
    fetch('/animals.json').then(data=>data.json()).then(data=>setNewArray(data));
  },[]);
  React.useEffect(()=>{
    if(enter.length!==0){
      search(animals,enter,setNewArray);
    }else{
      
      setNewArray([...animals]);
    }
  },[enter]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
    name,
    age,
    breed,
    };
    fetch('/api/sendInfo', {
    method: 'post',
    body: JSON.stringify(data),
    });
    console.log(data);
    };
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    window.location.reload();
    setIsOpen(false);
  }

    return (
    
      <div>
         <div className={styles.container}>
        <Head>
          <title>Petto</title>
          <meta name="description" content="Социальная сеть для питомцев" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
  
        <main className={styles.main}>
          <h1>Petto</h1>
          <button onClick={openModal}>Добавить животного</button>
          <br></br>
          <p>Поиск по имени или возрасту или пароде:</p>
        
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          
          <button onClick={closeModal}>close</button>
          <form onSubmit={handleSubmit} >
          <label >
          <p> Имя животного:</p>
          <input type="text" id="name"
              onChange={e => setName(e.target.value)} />
          <p>Возраст:</p>
          <input type="text" id="age"
              onChange={e => setAge(e.target.value)}  />
          <p>Порода:</p>
          <input type="text" id="breed" 
              onChange={e => setBreed(e.target.value)} />
          <br></br>

          </label>
            <button type="submit"> Отправить </button>
          </form>
          
        </Modal>
  
        <input type = "text" value={enter} onChange = {(event)=>setEnterElement(event.target.value)}/>
        <br></br>
          <AwesomeSlider style={{ "--slider-height-percentage": "80%" , zIndex: 0 }}>
            {            
              elementsArray.map((data)=><div>
              <Animal data={data} />
            </div>)
            }
        </AwesomeSlider>
  
        </main>
  
        <footer className={styles.footer}>
          Petto, (c) 2023
        </footer>
        
         </div>
  
      </div>
      
    );  
}
