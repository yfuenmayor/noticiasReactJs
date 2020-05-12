import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

    //Extraemos los datos de la noticia
    const {urlToImage, url, title, description, source} = noticia;  

    //Imagen a mostrar
    const imagen = (urlToImage) ?
    <div className="card-image">
        <img src={urlToImage} alt={title} />
        <span className="card-title">{source.name}</span>
    </div>
    : null;

    return (
        <div className="col s2 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn "
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
};

export default Noticia;