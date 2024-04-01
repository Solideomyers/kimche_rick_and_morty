import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav></nav>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
