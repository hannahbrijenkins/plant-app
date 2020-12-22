import { Multiselect } from 'multiselect-react-dropdown';
import { useState } from 'react';
import './App.css';

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
    <form>
      {/* Plant Name */}
      <label>
        Plant Name:
        <input type="text" name="name" placeholder="Plant Name"/>
      </label>
      {/* Scientific Name */}
      <label>
        Scientific Name:
        <input type="text" name="name" placeholder="Scientific Name"/>
      </label>
      {/* photos */}
      <label>
        Plant Photos:
        <input type="file" name="name"/>
      </label>
      {/* Sun */}
      <label>
        Choose the amount of sun your plant needs.
        <Multiselect
        options={sunOptions}
        displayValue="Sun"
      />
      </label>
      {/* water */}
      <label>
        Choose the amount of water your plant needs.
        <Multiselect
        options={waterOptions}
        displayValue="Water"
        />
      </label>
      {/* fertilizer */}
      <label>
        Choose the amount of fertilizer your plant needs.
        <Multiselect
        options={fertOptions}
        displayValue="Fert"
        />
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
}

export default App;
