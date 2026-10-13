import React from 'react';

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold underline text-blue-600">
          Tailwind CSS is Working!
        </h1>
        <p className="mt-4 text-center text-red-600">
          If you see a blue underlined heading with a shadow, your setup is correct.
        </p>
      </div>
    </div>
  );
}

export default App;
