import React from "react";
import { useGlobalContext } from "../utils/context";
import { images } from "../imgs";

const AlienGallery = () => {
  const { loading, aliens, query } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  //console.log(images);
  let pics = images.map((image) => (
    <img src={image.img} alt="img-alien" id={image.id} />
  ));

  return (
    <section className="libGal">
      {aliens
      .filter((alien)=> alien.general.name.toLowerCase().includes(query.toLowerCase()))
      .map((alien, i) => {
        const { general, _id: id, series, abilities } = alien;
        const { name, species, homeWorld } = general;

        return (
          <div className="gallery" key={id}>
            {pics[i]}
            <ul className="names">
              <h2 id="alienName">{name}</h2>
              <li id="alienSpecies"><p>Species:</p> {species}</li>
              <li id="alienWorld"><p>Homeworld:</p> {homeWorld}</li>
              <li id="series"><p>Series:</p> {series}</li>
              <p>Abilities:</p>
              <div className="ableGrid">
                {abilities.map((ability) => {
                  //console.log(ability)
                  return <li id="ability"> • {ability} </li>;
                })}
              </div>
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default AlienGallery;
