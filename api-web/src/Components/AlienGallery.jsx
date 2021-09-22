import React from "react";
import { useGlobalContext } from "../utils/context";
import { images } from "../imgs";

const AlienGallery = () => {
  const { loading, aliens } = useGlobalContext();
  //console.log(loading);
  if (loading) {
    return <div className="loading"></div>;
  }
  //console.log(images);
  let pics = images.map((image) => (
    <img src={image.img} alt="test" id={image.id} />
  ));
  let id = pics.getElementbyId
  //  let idImage = images.map((image) => {const {id} = image})

  console.log(pics);

  return (
    <section className="libGal">
      {aliens.map((alien, i) => {
        const { general, _id: id, series, abilities } = alien;
        const { name, species, homeWorld } = general;
        //console.log(alien);
        if(pics.id === {id}){
          console.log(true);
          return pics
        }else{
          console.log("false :(")
        };

        return (
          <div className="gallery" key={id}>
            {pics[i]}
            <ul className="names">
              <li id="alienName">{name}</li>
              <li id="alienSpecies">{species}</li>
              <li id="alienWorld">{homeWorld}</li>
            </ul>
            <ul>
              <li>{abilities}</li>
            </ul>
            <p className="series">{series}</p>
          </div>
        );
      })}
    </section>
  );
};

export default AlienGallery;
