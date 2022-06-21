import React, {useState} from 'react';
import Alerta from './Alerts';
import { calculateTotal } from './helpers';
import Msg from './Msg';
import Result from './Result';
import Spinner from './Spinner';

const Formulario = (props) => {
    const { quantity,saveQuantity,term,saveTerm, total, saveTotal, saveLoading, loading} = props;
    // Defenir un state
    // Todo lo que es interactivo debe tener un state

    // Definir state
    const [error, saveError] = useState(false);

    const readQuantity = (e) => {
        saveQuantity(parseInt(e.target.value));
    }
    const readTerm = e => {
        saveTerm(parseInt(e.target.value))
    }

    const calculateLoan = e => {
        e.preventDefault();
        // Validated camps
     
        if( quantity <= 0 || term === '' || isNaN(quantity) || isNaN(term)) {
            saveError(true);
            // <Alerta msg="Todos los campos son obligatorio" />
            return;
        }
        // Elimina el error previo en caso de corregirlo
        saveError(false)
        
        // Habiitar Spinner
        saveLoading(true)
        setTimeout(() => {
            // Doing quotation
            const total = calculateTotal(quantity,term)
            saveTotal(total)
            // Deshabilitar spinner
            saveLoading(false)

        }, 2000)
    }
    // let spinner;
    let component;
    if(loading) {
        component = <Spinner />
    }else if(total === 0) {
        component = <Msg />
    }else {
        component = <Result 
            total = {total}
            term = {term}
            quantity = {quantity}
        />
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
        {(error) ? <Alerta msg="Todos los campos son obligatorio" /> : ''}
      </form>
      <div className='mensajes'>
        {component}
      </div>

    </div>
  );
}

export default Formulario;