import { Button } from '@components/button';
import { useState } from 'react';
export default function IndexPage() {
  const [state, setState] = useState(1);
  return (
    <div>
      <div>Spa</div>
      <p>{state}</p>
      <button onClick={() => setState(s => s + 1)}>Increase</button>
      <Button />
    </div>
  );
}
