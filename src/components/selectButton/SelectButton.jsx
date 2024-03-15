import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
const SelectButton = () => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  console.log(countries);
  return (
    <div className="w-72 font-medium h-80">
      <div className="bg-red-200 w-full p-2 flex items-center justify-between rounded">
        Select Country
        <BiChevronDown></BiChevronDown>
      </div>
      <ul className="bg-white mt-2 ">
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
          Sample
        </li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
          Sample
        </li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
          Sample
        </li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
          Sample
        </li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
          Sample
        </li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
          Sample
        </li>
      </ul>
    </div>
  );
};

export default SelectButton;

// https://www.youtube.com/watch?v=KMxX8yFeK5k&t=751s
// https://github.com/Sridhar-C-25/Custom-Dropdown-menu/blob/main/src/components/Selector/Selector.jsx
