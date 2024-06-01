import { useState } from 'react';
import Select from './Select';
import Input from './Input';
import Result from './Result';

export default function ExAll() {
  // 상태
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'white',
    content: 'text',
  });
  return (
    <div>
      <div>
        <Select setData={setData} />
      </div>
      <div>
        <Input setData={setData} />
      </div>
      <div>
        <Result data={data} />
      </div>
    </div>
  );
}
