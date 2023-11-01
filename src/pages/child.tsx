import React from 'react';

interface ChildProps {
  onIncrement: (name: string, number: number) => void;
}

function ChildComponent({ onIncrement }: ChildProps) {
  const name = "Exemplo";
  const number = 5;

  return (
    <div>
      <button onClick={() => onIncrement(name, number)}>Incrementar</button>
    </div>
  );
}

export default ChildComponent;