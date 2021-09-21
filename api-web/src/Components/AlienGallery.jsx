import React from "react";
import { useGlobalContext } from "../utils/context";

const AlienGallery = () => {
  const { loading, aliens } = useGlobalContext();
  console.log(loading);
  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="libGal">
      {aliens.map((alien) => {
        const { general, _id: id, series, abilities } = alien;
        const { name, species, homeWorld } = general;
        console.log(alien);

        return (
          <div className="gallery" key={id}>
            <ul className="names">
              <li id="alienName">{name}</li>
              <li id="alienSpecies">{species}</li>
              <li id="alienWorld">{homeWorld}</li>
            </ul>
            <ul>
              <li>{abilities}</li>
            </ul>
            {console.log({ id })}
            <p className="series">{series}</p>
          </div>
        );
      })}
    </section>
  );
};

export default AlienGallery;
