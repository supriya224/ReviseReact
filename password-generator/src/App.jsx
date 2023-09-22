import { useCallback, useEffect, useState, useRef } from "react";
// import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef =useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXXYZabcdefghijklmnopqrstyvwxyz";
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#$&^*_+=[]{}~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass);

  },  [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboars=useCallback(()=>{
    passwordRef?.current?.select()
    passwordRef.current?.setSelectionRange(0,5);
window.navigator.clipboard.writeText(password)
  },[password])

  // console.log("copyPasswordToClipboars");
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);


  // const cop 
  return (
   
      <div className="w-full max-w-md mx-auto shadow-md shadow-black rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center pt-4">Password Generator</h1>

        <div className="flex shadow-lg rounded-lg overflow-hidden  mt-6">
          <input
            type="text"
            value={password}
            className="outline-none py-2 px-3 w-full rounded-lg "
            placeholder="password"
            readOnly
            ref={passwordRef}

          />
          <button onClick={copyPasswordToClipboars} onChange={{style}} className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        {/* length */}
        <div className="flex text-sm gap-x-2 mt-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex text-sm gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* character input */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              className="cursor-pointer"
              onChange={(e) => {
                setCharAllowed(e.target.value);
              }}
            />
          </div>

          <label htmlFor="characterInput">CharacterInput</label>

          {/* nothing */}
        </div>
      </div>
    
  );
}

export default App;
