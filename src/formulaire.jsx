import "./formulaire.css"
import arow from "./arrowhead.png"
import form from "./form.png"
import { useState,useRef,useEffect } from "react"
import impor from "./import.png"
import send from "./send.png"
import success from "./success.png"
import close from "./close.png"
function Formulaire(){
    const [suivant,setsuivant]=useState(0);
    const [suc,setsuc]=useState(0);
    const [marque,setmarque]=useState("Toyota");
    const [totale,settotale]=useState(0.0);
    const btnsuivant=()=>{
      
     setsuivant(1);
    window.scrollTo({
      top: 0,
    });
};
     
    
    const btnprecedent=()=>{
        setsuivant(0);
        window.scrollTo({
      top: 0,
    });
    }

const [formData, setFormData] = useState({
  datenaissance: '',
  datedobtention: '',
  venale: '',
  neuf: '',
  marque: '',
  modele:"",
  matricule:"",
  puissance:"",
  carburant:"",
  formule:"",
  cin:"",
  bdg:"",
  collision:"",
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value
  });

  if (name === "marque") {
    setmarque(value);
  }
  
};
useEffect(() => {
  const valeurVenale = 120000;
  const prixBase = 2000;

  if (formData.formule === "Tiers simple") {
    settotale(prixBase + valeurVenale * 0.25);
  } 
  else if (formData.formule === "Tous risques") {
    settotale(prixBase + valeurVenale * 2);
  } 
  else {
    settotale(0);
  }

}, [formData.formule]);
const handleSubmit=async(e)=>{
    e.preventDefault();
    setsuc(1)
    setTimeout(()=>{
        setsuc(0)
    },6000)
}
const hidedialog=()=>{
    setsuc(0)
}
// ====================================
const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [fileURL,setfileURL]=useState(null);
  // 🔹 When button clicked, open the hidden file input
  const handleButtonClick = () => {
    fileInputRef.current.click();
    
  };

  // // 🔹 When user selects a file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      // const tempURL = URL.createObjectURL(file);
      setfileURL(file)
      console.log(file)
      console.log(fileURL)
    }
    // const file = fileInputRef.current.files[0];
    if (!file) return alert("Select a PDF");
    // setfileURL(file)
  };
    return(<>
    {suc===1 &&<>
    <div id="black"></div>
    <div id="success"><div><img onClick={hidedialog} src={close}/></div><img src={success}/><h2>Merci pour votre confiance</h2><p>Votre demande a été envoyée avec succès.<br/>
Nous vous répondrons dans les plus brefs délais.</p></div></>}
    <h1>Simulation & Demande d’attestation auto</h1>
        

    
    <form onSubmit={handleSubmit}>
        
        <div style={{display:suivant===0?"flex":"none"}}>
        <div>
            <img src={form}/>
            <h2>Simulation</h2>
        </div>
        <div className="reda">
        <label className='option'>Date de naissance :</label>
        <input className="typeemprunt" type="date" name="datenaissance" onChange={handleChange} required/>
        </div>
        <div className="reda">
        <label className='option'>Date d’obtention de permis :</label>
        <input className="typeemprunt" type="date" name="datedobtention" onChange={handleChange} required/>
        </div>
        <div className="wave-group">
        <input  type="number" className="input" name="venale" onChange={handleChange} required />
        <span className="bar"></span>
        <label className="label">
            <span className="label-char" style={{ "--index": 0 }}>Valeur vénale</span>
        </label>
        </div>
        <div className="wave-group">
        <input type="number" className="input" name="neuf" onChange={handleChange} required />
        <span className="bar"></span>
        <label className="label">
            <span className="label-char" style={{ "--index": 0 }}>Valeur à neuf</span>
        </label>
        </div>
        {/* islah */}
        <div className="reda">
        <label className='option'>Marque :</label>
        <select className='filiereetu' name="marque" onChange={handleChange} required >
            <option>Toyota</option>
            <option>Renault</option>
            <option>Peugeot</option>
            <option>Hyundai</option>

        </select>
        </div>
        <div className="reda">
        <label className='option'>Modèle :</label>
        <select className='filiereetu' name="modele" onChange={handleChange} required >
            {marque==="Toyota" &&<>
            <option>Yaris</option>
            <option>Corolla</option>
            <option>RAV4</option>
            <option>Hilux</option></>}
            {marque==="Renault" &&<>
            <option>Clio</option>
            <option>Megane</option>
            <option>Duster</option>
            <option>Kangoo</option></>}
            {marque==="Peugeot" &&<>
            <option>208</option>
            <option>308</option>
            <option>3008</option>
            <option>Partner</option></>}
            {marque==="Hyundai" &&<>
            <option>i10</option>
            <option>i20</option>
            <option>Tucson</option>
            <option>Santa Fe</option></>}

        </select>
        </div>

        <div className="wave-group">
        <input  type="text" className="input" name="matricule" onChange={handleChange} required />
        <span className="bar"></span>
        <label className="label">
            <span className="label-char" style={{ "--index": 0 }}>Matricule</span>
        </label>
        </div>
        <div className="reda">
        <label className='option'>Date de mise en circulation :</label>
        <input className="typeemprunt" type="date" name="puissance" onChange={handleChange} required/>
        </div>
        <div className="wave-group">
        <input required name="cne" type="number" className="input" />
        <span className="bar"></span>
        <label className="label">
            <span className="label-char" style={{ "--index": 0 }}>Puissance fiscale</span>
        </label>
        </div>
        <div className="reda">
        <label className='option'>Carburant :</label>
        <select className='filiereetu' name="carburant" onChange={handleChange} required >
            <option>Essence</option>
            <option>Diesel</option>
            <option>Hybride</option>
            <option>Électrique</option>

        </select>
        </div>
        <div className="reda">
        <label className='option'>Formule :</label>
        <select className='filiereetu'  name="formule" onChange={handleChange} required >
            <option>---</option>
            <option>Tiers simple</option>
            <option>Tous risques</option>
        </select>
        </div>
        <div id="divat">
        <h3>Totale:<br/> {totale} Dhs</h3>
        <button type="button" onClick={btnsuivant} id="atphone" ><img src={arow} />Suivant</button>
        
        </div>
        
    </div>
    {/* ================================ */}
    <div style={{display:suivant===1?"flex":"none"}}>
        <div>
            <img src={form}/>
            <h2>Demande d’attestation</h2>
        </div>
        
        
        <div className="wave-group">
        <input  type="text" className="input" name="cin" onChange={handleChange} required />
        <span className="bar"></span>
        <label className="label">
            <span className="label-char" style={{ "--index": 0 }}>N° CIN</span>
        </label>
        </div>
        
        
        
        <div className="reda">
        <label className='option'>Capital BDG :</label>
        <select className='filiereetu' name="bdg" onChange={handleChange} required >
            <option>5 000 DHs</option>
            <option>10 000 DHs</option>
            <option>Illimité</option>
        </select>
        </div>
        <div className="reda">
        <label className='option'>Capital Collision :</label>
        <select className='filiereetu' name="collision" onChange={handleChange} required >
            <option>50 000 DHs</option>
            <option>100 000 DHs</option>
            <option>300 000 DHs</option>
        </select>
        </div>
        <h4>Veuillez joindre les documents suivants</h4>
         <div className="reda">
        <label className='option'>Carte grise :</label>
        <button type="button" onClick={handleButtonClick}  id="atphone"><img src={impor}/>ajouter</button>
        <input onChange={handleFileChange} ref={fileInputRef} accept="application/pdf" style={{ display: "none" }}  type="file" name="dateEmprunt" />
        </div>
        <div className="reda">
        <label className='option'>Permis de conduire :</label>
        <button type="button" onClick={handleButtonClick} id="atphone"><img src={impor}/>ajouter</button>
        <input onChange={handleFileChange} accept="application/pdf" style={{ display: "none" }}  type="file" name="dateEmprunt" />
        </div>
        <div className="reda">
        <label className='option'>CIN :</label>
        <button type="button" onClick={handleButtonClick} id="atphone"><img src={impor}/>ajouter</button>
        <input onChange={handleFileChange} ref={fileInputRef} accept="application/pdf" style={{ display: "none" }}  type="file" name="dateEmprunt" />
        </div>
        <div id="divat">
        <button type="button" onClick={btnprecedent} id="atphone" ><img style={{transform:"rotate(180deg)"}} src={arow} />précédent</button>
        <button type="submit" id="atphone" ><img src={send} />Envoyer</button>
        
        </div>
        </div>
    </form>
    </>);
}
export default Formulaire;