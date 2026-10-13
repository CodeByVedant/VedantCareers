import React from 'react';
// Importing the Button component from the default shadcn/ui path
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="flex flex-col items-center rounded-xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold underline text-blue-600">
          Tailwind CSS is Working!
        </h1>
        
        <p className="mt-4 text-center text-red-600">
          If you see a blue underlined heading with a shadow, your setup is correct.
        </p>

        {/* Adding the shadcn/ui button */}
        <div className="mt-6">
          <Button onClick={() => alert("Shadcn Button Clicked!")}>
            Click me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
