import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {


  // STATES //
    //State de categoria
    const [categoria, setCategoria] = useState('');
    //State de noticias
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
      //Funcion para obtener los datos de la API
      const obtenerNoticias = async () => {
        //endpoint
        const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=b9ea14ecf191412c8dc2068a59579549`;
        //obtenemos las noticias
        const respuesta = await fetch(url);
        //Las pasamos a Json
        const noticias = await respuesta.json();
        //Las cargamos al state
        setNoticias(noticias.articles);
      }
      
      //Ejecutamos la funcion
      obtenerNoticias();
      
    }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />

      <div className="container white">
        <Formulario 
          setCategoria={setCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
