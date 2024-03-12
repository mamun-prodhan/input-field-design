import "./App.css";

function App() {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col items-center justify-center">
      <div>
        <label className="block mb-2" htmlFor="text">
          Enter Your Name Here
        </label>
        <input
          className="block w-full px-3 py-2 rounded-lg border border-[#E1E6EF] shadow-sm placeholder-slate-400 focus:outline-none 
          focus:border-[#B9CCEB] focus:ring-4 focus:ring-[#E4EEFF]"
          type="text"
          name="text"
          id="text"
          placeholder="Your Name"
        />
        <input
          className="block w-full px-3 py-2 rounded-lg border border-[#E1E6EF] shadow-sm placeholder-slate-400 focus:outline-none 
          focus:border-[#FDA29B] focus:ring-4 focus:ring-[#FEE4E2]"
          type="text"
          name="text"
          id="text"
          placeholder="Your Name"
        />
      </div>
    </div>
  );
}

export default App;
