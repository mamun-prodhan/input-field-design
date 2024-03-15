import "./App.css";
import SelectButton from "./components/selectButton/SelectButton";

function App() {
  return (
    <div className="px-20 bg-blue-100 space-y-10 flex flex-col items-center justify-center">
      {/* <div>
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
      </div> */}

      {/* custom radio */}
      <div className="max-w-6xl mx-auto px-12">
        <div className="flex flex-wrap gap-3">
          <label htmlFor="" className="cursor-pointer">
            <input type="radio" className="peer sr-only" name="pricing" />
            <div className="w-72 max-w-xl p-5 bg-white text-gray-600 rounded-md hover:shadow ring-2 ring-transparent peer-checked:text-sky-600 peer-checked:ring-sky-500 peer-checked:ring-offset-2">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase text-gray-500">
                    essential
                  </p>
                  <div>
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="24"
                      width="24"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <p>
                    <span className="text-lg font-bold">12 GB</span> of storage
                  </p>
                  <p className="text-sm font-bold">$12 / mon</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
      <SelectButton></SelectButton>
    </div>
  );
}

export default App;

// https://play.tailwindcss.com/f6zsuCPdwj
