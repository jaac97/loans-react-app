import React, {useState} from "react";
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {
    // How much money we're going to loan
    const [quantity, saveQuantity] = useState(0);
    // How many time we want to loaned it
    const [term, saveTerm] = useState('');
    // Total Loan
    const [total, saveTotal] = useState(0);
    // Loading Spinner
    const [loading, saveLoading] = useState(false)
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
                total={total}
                saveTotal={saveTotal}
                loading={loading}
                saveLoading={saveLoading}
            />            
        </div>
    )
}
export default App