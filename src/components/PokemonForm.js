import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [formData, setFormData] = useState({
    name:"",
    hp: "",
    frontUrl: "",
    backUrl: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // console.log(formData)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          const newPokemon = {
            name: formData.name,
            hp: formData.hp,
            sprites: {
              front: formData.frontUrl,
              back: formData.backUrl
            }
          };
          // console.log(newPokemon)
          fetch(`http://localhost:3001/pokemon`, {
            method: "POST",
            headers: {
              "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(newPokemon)
          })
          .then(r => r.json())
          .then(newPokemon => onAddPokemon(newPokemon))
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp} 
            onChange={handleChange} 
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            // value={formData.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            // value={formData.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
