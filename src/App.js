import './App.css';

function App() {
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
        <select>
          <option value="full">Full</option>
          <option value="bright">Bright</option>
          <option value="partial">Partial</option>
          <option value="indirect">Indirect</option>
          <option value="shade">Shade</option>
        </select>
      </label>
      {/* water */}
      <label>
        Choose the amount of water your plant needs.
        <select>
          <option value="frequently">Frequently</option>
          <option value="infrequently">Infrequently</option>
          <option value="rarely">Rarely</option>
          <option value="moist">Keep Moist</option>
          <option value="dry">Allow to Fully Dry</option>
        </select>
      </label>
    </form>
  );
}

export default App;
