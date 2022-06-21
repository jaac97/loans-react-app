import React, {useState} from "react";
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {
    // How much money we're going to loan
    const [quantity, saveQuantity] = useState(0)

  
    // How many time we want to loaned it
    const [term, saveTerm] = useState('')

    return (
        <div className="App">
            <Header
                titulo = "Cotizado de prestamos"
             />
            <Formulario 
                quantity={quantity}
                saveQuantity={saveQuantity}
                term={term}
                saveTerm={saveTerm}
            />
            
        </div>
    )
}
export default App