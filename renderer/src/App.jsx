import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-80 space-y-3">
        <input
          className="w-full border rounded px-3 py-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text"
        />
        <div className="flex gap-2">
          <button className="flex-1 bg-emerald-600 text-white rounded py-2">
            Save
          </button>
          <button className="flex-1 bg-indigo-600 text-white rounded py-2">
            Update
          </button>
          <button className="flex-1 bg-rose-600 text-white rounded py-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
