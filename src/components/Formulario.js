import React, {useState} from 'react';
const Formulario = ({ quantity,saveQuantity,term,saveTerm}) => {
    // Defenir un state
    // Todo lo que es interactivo debe tener un state

    // Definir state
    const [error, saveError] = useState(false);

    const readQuantity = (e) => {
        console.log(e.target.value)
        saveQuantity(parseInt(e.target.value));
    }
    const readTerm = e => {
        saveTerm(parseInt(e.target.value))
    }

    const calculateLoan = e => {
        e.preventDefault();
        // Validated camps
     
        if( quantity <= 0 || term === '') {
            saveError(true)
        }else{
            console.log("todo bien")
        }
        // Doing quotation
    }
  return (
    <div className='container'>
      <form onSubmit={calculateLoan}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input className="u-full-width" type="number" placeholder="Ejemplo: 3000"
                onChange={ readQuantity }
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select className="u-full-width"
                onChange={readTerm}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Calcular" className="button-primary u-full-width"/>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formulario;