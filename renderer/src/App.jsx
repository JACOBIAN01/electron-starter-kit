import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')

  return (
    <div className="p-6 max-w-sm mx-auto space-y-3">
      <input
        className="w-full border rounded px-3 py-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
      />
      <div className="flex gap-2">
        <button className="flex-1 bg-green-500 text-white rounded py-2" onClick={() => console.log('save', value)}>Save</button>
        <button className="flex-1 bg-blue-500 text-white rounded py-2" onClick={() => console.log('update', value)}>Update</button>
        <button className="flex-1 bg-red-500 text-white rounded py-2" onClick={() => console.log('delete', value)}>Delete</button>
      </div>
    </div>
  )
}

export default App
