import React from "react";
import { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TypeAheadForm = ({ onCreate }) => {
    const bikeBrand = ['Canolo', 'Shimamo', 'Shram', 'Twitter']
    const bikeModel = ['Tar', 'Madonda', 'Ail']
    const [selected, setSelected] = useState({brand: '', model: ''})

    const handleSubmit = (e) =>{
        e.preventDefault()
        onCreate(selected)
        setSelected({brand: '', model: ''})
    }

    return (
        <div>
            <h4>Submit Bikes</h4>
            <Form onSubmit={ handleSubmit }>
                <Form.Group className="mb-3"><Form.Label>Add Bike</Form.Label></Form.Group>
                <Typeahead id='typeahead-brand'
                    onChange={(selection) => {
                        setSelected({ ...selected, ...{ brand: selection[0] }});
                      }}
                    options={ bikeBrand }
                    
                    selected = {[selected.brand]} 
                />
                <Typeahead id='typeahead-model'
                    onChange={(selection) => {
                        setSelected({ ...selected, ...{ model: selection[0] }});
                      }}
                    options={bikeModel}
                    renderInput={({ inputRef, referenceElementRef, ...inputProps }) => (
                        <Form.Control
                          {...inputProps}
                          ref={(input) => {
                            inputRef(input);
                            referenceElementRef(input);
                          }}
                          type="text"
                          />
                        )}
                    selected = {[selected.model]} 
                />

                <Button variant="primary" type="submit">Click to add</Button>

            </Form>
        </div>
    )
}

export default TypeAheadForm