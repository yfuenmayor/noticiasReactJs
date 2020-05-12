import React, { useState } from 'react'; 


const useSelect = (categoriaInicial, Opciones) => {
    
    //State para iniciar el hook
    const [categoria, setCategoria] = useState(categoriaInicial);

    //Creamos la funcion que retornara el select completo
    const SelectCategoria = () => (
        <select
            className="browser-default"
            value={categoria}
            onChange={ e => setCategoria(e.target.value)}
        >
            {/* Recorremos el array de object */}
            {Opciones.map( opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                
            ))}
        </select>
    );
    
    //Retornamos el stado y el Select
    return [categoria, SelectCategoria ];
};


export default useSelect;