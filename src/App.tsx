import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='p-4 dark bg-background/95 text-foreground'>
      <nav>{/* <SearchBar /> */}</nav>
      <main className='flex justify-center'>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
