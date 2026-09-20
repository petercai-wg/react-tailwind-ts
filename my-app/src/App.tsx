import { useState } from 'react'

type MyButtonProps = {
  count: number;
  onClick: () => void;
};

function MyButton({ count, onClick }: Readonly<MyButtonProps>) {
  return (
    <div className="p-6 bg-slate-100">

      <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white" onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
  );
}



function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <main>
      <h1 className="text-2xl font-bold text-blue-600">Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick} />
    </main>
  );
}

export default App
