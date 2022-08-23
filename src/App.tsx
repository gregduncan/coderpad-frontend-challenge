function App() {
  async function getUserById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    const div = document.createElement('div');
    div.innerText = JSON.stringify(user);
    document.querySelector('.content').appendChild(div);
  }

  return (
    <div className="container">
      <select onChange={(e) => getUserById(e.target.value)}>
        <option value={1}>User 1</option>
        <option value={2}>User 2</option>
        <option value={3}>User 3</option>
      </select>
      <div className="content"></div>
    </div>
  );
}

export default App;
