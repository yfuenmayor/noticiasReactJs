import React from 'react';
import PropTypes from 'prop-types';
import style from './Formulario.module.css';
import useSelect from '../hooks/useSelect';



const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'business', label: 'Negocios'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnologia'}
    ]

    //Invocamos el Hook 
    const [categoria, SelectCategoria] = useSelect('general', OPCIONES);

    //Funcion del submit de noticias
    const buscarNoticias = e => {
        e.preventDefault()
        //pasamos la opcion al componente padre
        setCategoria(categoria)
    }
    
    return (
        <div className={`row ${style.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={style.heading}>Encuentra Noticias por Categorias</h2>

                    <SelectCategoria />
                    
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            value="Buscar"
                            //Se accede de otra manera al objeto que contiene la clase ya que para JS el guion medio no lo soporta ya que es un operador aritmetico 
                            className={`btn-large amber darken-2 ${style['btn-block']}`}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
};

export default Formulario;