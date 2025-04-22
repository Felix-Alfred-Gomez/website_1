import React from 'react'
import GuitarImages from './GuitarImages'

const Collection = () => {
  return (
    <div>
        <GuitarImages
        source="./img/guitare_petite_bouche.jpg" 
        title="Guitare petite bouche" 
        caption="Ceci est une guitare manouche petite bouche parfaite pour les solos"
        />
        <GuitarImages
        source="./img/guitare_grande_bouche.jpg" 
        title="Guitare grande bouche" 
        caption="Ceci est une guitare manouche petite bouche parfaite pour l'accompagnement"
        />
    </div>
  )
}

export default Collection