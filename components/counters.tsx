// Example from https://beta.reactjs.org/learn

import { useState } from 'react'

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick} className="border-[1px] border-solid border-red-400 mt-3 py-[2px] px-[6px]">
        Clicked {count} times!
      </button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}
