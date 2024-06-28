import React from "react";
import { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TypeAheadForm = () => {
    const bikeBrand = ['Canolo', 'Shimamo', 'Shram', 'Twitter']
    const bikeModel = ['Tar', 'Madonda', 'Ail']
    const [state, setState] = useState({selected: null})
    return (
        <div>
            <h1>Submit Bikes</h1>
            <Form>
                <Form.Group className="mb-3"><Form.Label>Add Bike</Form.Label></Form.Group>
                <Typeahead id='typeahead-brand'
                    onChange={(selected) => {
                        setState({selected})
                    }}
                    options={bikeBrand}
                    renderInput={({ inputRef, referenceElementRef, ...inputProps }) => (
                        <Form.Control
                          {...inputProps}
                          ref={(input) => {
                            // Be sure to correctly handle these refs. In many cases, both can simply receive
                            // the underlying input node, but `referenceElementRef can receive a wrapper node if
                            // your custom input is more complex (See TypeaheadInputMulti for an example).
                            inputRef(input);
                            referenceElementRef(input);
                          }}
                          type="text"
                          />
                        )}
                    selected = {state.selected} 
                />
                <Button variant="primary" type="submit">Click to add brand</Button>

                <Typeahead id='typeahead-model'
                    onChange={(selected) => {
                        setState({selected})
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
                    selected = {state.selected} 
                />

                <Button variant="primary" type="submit">Click to add model</Button>

            </Form>
        </div>
    )
}

export default TypeAheadForm