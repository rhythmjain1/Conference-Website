import "./App.css";
import Navbar from './components/Navbar';
import Body from './components/Body';
function App() {
  return (
    <div>
    <Navbar/>
    <Body/>
    {/* <main className="flex justify-center gap-4 flex-col min-h-screen">
    <h1 className="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    <p className="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    <img src="https://bit.ly/3wsmzTy" alt="meme" className="mx-auto" />
  </main> */}
  </div>
  );
}

export default App;
