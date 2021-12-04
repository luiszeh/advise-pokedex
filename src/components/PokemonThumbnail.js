import React from "react";
import "../styles/PokemonThumbnail.css";

const PokemonThumbnail = ({ id, name, image }) => {
  return (
    <div>
      <div className="Thumb-container">
        <div className="Poke-img">
          <img src={image} alt={name} />
        </div>
        <div className="Poke-infos">
          <div className="Poke-title">
            <div className="Poke-name">
              <p>{name}</p>
            </div>
            <div>
              <p>#0{id}</p>
            </div>
          </div>
          <div className="Poke-feature">
            <p>
              Características do pokemon dolor sit amet, consectetur adipiscing
              elit. In ultricies nunc at odio tempor tincidunt. Sed sit amet
              dolor velit. Donec convallis tellus ut porta molestie. Suspendisse
              condimentum et dui in aliquam.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PokemonThumbnail;
