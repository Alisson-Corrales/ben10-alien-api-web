import React from "react";
import { useGlobalContext } from "../utils/context";
import { images } from "../imgs";

const AlienGallery = () => {
  const { loading, aliens } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  //console.log(images);
  let pics = images.map((image) => (
    <img src={image.img} alt="test" id={image.id} />
  ));

  return (
    <section className="libGal">
      {aliens.map((alien, i) => {
        const { general, _id: id, series, abilities } = alien;
        const { name, species, homeWorld } = general;

        return (
          <div className="gallery" key={id}>
            {pics[i]}
            <ul className="names">
              <h2 id="alienName">{name}</h2>
              <li id="alienSpecies">Species: {species}</li>
              <li id="alienWorld">Homeworld: {homeWorld}</li>
              Abilities:
              {abilities.map((ability) => {
                //console.log(ability)
                return(
                <li id="ability"> {ability} </li>
                )
              })}
              <li className="series">{series}</li>
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default AlienGallery;
