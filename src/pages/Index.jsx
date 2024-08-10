import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
        <p className="text-xl text-gray-600 mb-4">Count: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </div>
  );
};

export default Index;
