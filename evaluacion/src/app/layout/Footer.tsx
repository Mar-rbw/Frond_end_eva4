import React from 'react';
import twitter from "public/svg/cdnlogo.com_twitter-icon.svg";
import instagram from "public/svg/cdnlogo.com_instagram.svg";
import youtube from "public/svg/cdnlogo.com_youtube-icon.svg";


export const Footer = () => {
    return (
        <div>
            {/* Introducción a las redes sociales */}
            <h2>Redes sociales</h2>
            <p>Acompañanos en nuestras redes sociales:</p><br/>
            {/* Apartado de instagram */}
            <div>
                <a href="https://www.instagram.com/gimnasiosenergy/">
                <img src={instagram} alt='Instagram_logo'/><br/>
                <p>Siguenos en Instragram</p>
                </a>
            </div>
            {/* Apartado de Youtube */}
            <div>
                <a href="https://www.youtube.com/energygimnasios">
                <img src={youtube} alt='Youtube_logo'/><br/>
                <p>Siguenos en Youtube</p>
                </a>
            </div>
            {/* Apartado de Twitter */}
            <div>
                <a href="https://twitter.com/gimnasiosenergy?lang=es">
                <img src={twitter} alt='Twitter_logo'/><br/>
                <p>Siguenos en Twitter</p>
                </a>
            </div>
        </div>
    )
}

