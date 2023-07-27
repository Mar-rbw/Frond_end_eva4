import React from 'react';

export const Footer = () => {
    return (
        <div>
            {/* Introducción a las redes sociales */}
            <h2>Redes sociales</h2>
            <p>Acompañanos en nuestras redes sociales:</p><br/>
            {/* Apartado de instagram */}
            <div>
                <a href="https://www.instagram.com/gimnasiosenergy/">
                <img src="../img/twitter_logo.png" alt='Instagram'/><br/>
                <p>Siguenos en Instragram</p>
                </a>
            </div>
            {/* Apartado de Youtube */}
            <div>
                <a href="https://www.youtube.com/energygimnasios">
                <img src="../img/Youtube_logo.png" alt='Youtube_logo'/><br/>
                <p>Siguenos en Youtube</p>
                </a>
            </div>
            {/* Apartado de Twitter */}
            <div>
                <a href="https://twitter.com/GimnasiosEnergy">
                <img src="../img/twitter_logo.png" alt='Twitter_logo'/><br/>
                <p>Siguenos en Twitter</p>
                </a>
            </div>
        </div>
    )
}

