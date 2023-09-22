import { useState } from "react";


function Ui() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-20">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl  shadow-red-400">
        <button onClick={()=>setColor('red')}
          className="outline-none px-4 py-1 text-white shadow-lg shadow-zinc-600 rounded-full"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button onClick={()=>setColor('yellow')}
          className="outline-none px-4 py-1 text-white shadow-lg shadow-zinc-600 rounded-full"
          style={{ backgroundColor: "green" }}
        >
         Green
        </button>
        <button onClick={()=>setColor('brown')}
          className="outline-none px-4 py-1 text-white shadow-lg shadow-zinc-600 rounded-full"
          style={{ backgroundColor: "cyan" }}
        >
         Cyan
        </button>
        <button onClick={()=>setColor('cyan')}
          className="outline-none px-4 py-1 text-white shadow-lg shadow-zinc-600 rounded-full"
          style={{ backgroundColor: "pink" }}
        >
         Pink
        </button>
        <button onClick={()=>setColor('red')}
          className="outline-none px-4 py-1 text-white shadow-lg shadow-zinc-600 rounded-full"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button onClick={()=>setColor('red')}
          className="outline-none px-4 py-1 text-white shadow-lg shadow-zinc-600 rounded-full"
          style={{ backgroundColor: "Black" }}
        >
          Black
        </button>
        <button onClick={()=>setColor('red')}
          className="outline-none px-4 py-1 text-white shadow-lg shadow-zinc-600 rounded-full"
          style={{ backgroundColor: "skyblue" }}
        >
          meginto
        </button>
        <button onClick={()=>setColor('red')}
          className="outline-none px-4 py-1 text-white shadow-lg shadow-zinc-600 rounded-full"
          style={{ backgroundColor: "purple" }}
        >
          purple
        </button>

      </div>
      </div>
    </div>
  );
}

export default Ui;
