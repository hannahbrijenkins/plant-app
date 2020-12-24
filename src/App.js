import { Multiselect } from 'multiselect-react-dropdown';
import { useState } from 'react';
import './App.css';
import { Button, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const sunData = [
    {Sun: 'Full', id:1},
    {Sun: 'Bright', id:2},
    {Sun: 'Partial', id:3},
    {Sun: 'Indirect', id:4},
    {Sun: 'Shade', id:4}
  ]

  const waterData = [
    {Water: 'Frequently', id:1},
    {Water: 'Infrequently', id:1},
    {Water: 'Rarely', id:1},
    {Water: 'Keep Moist', id:1},
    {Water: 'Allow to Fully Dry', id:1}
  ]

  const fertData = [
    {Fert: 'None', id:1},
    {Fert: 'Yearly', id:1},
    {Fert: 'Spring', id:1},
    {Fert: 'Summer', id:1},
    {Fert: 'Fall', id:1},
    {Fert: 'Monthly', id:1},

  ]
 
  const [sunOptions] = useState(sunData)
  const [waterOptions] = useState(waterData)
  const [fertOptions] = useState(fertData)

  return (
    <Container>
      <Form>
        {/* Plant Name */}
        <Form.Group>
          <Form.Label>Plant Name</Form.Label>        
          <Form.Control type="text" name="name" placeholder="Plant Name"/>
        </Form.Group>

        {/* Scientific Name */}
        <Form.Group>
          <Form.Label>Scientific Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Scientific Name"/>
        </Form.Group>

        {/* Photos */}
        <Form.Group>
          <Form.Label>Plant Photos</Form.Label>
          <Form.Control type="file" name="name"/>
        </Form.Group>

        {/* Sun */}
        <Form.Group>
          <Form.Label>Choose the amount of sun your plant needs</Form.Label>
          <Multiselect
            options={sunOptions}
            displayValue="Sun"
          />
        </Form.Group>

        {/* water */}
        <Form.Group>
          <Form.Label>Choose the amount of water your plant needs.</Form.Label>
            <Multiselect
              options={waterOptions}
              displayValue="Water"
            />
        </Form.Group>

        {/* fertilizer */}
        <Form.Group>
        <Form.Label>Choose the amount of fertilizer your plant needs.</Form.Label>
          <Multiselect
            options={fertOptions}
            displayValue="Fert"
          />
        </Form.Group>
        {/* Notes */}
      <Form.Group>
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>

      <Button type="submit" value="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
