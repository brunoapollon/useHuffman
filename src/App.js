import React, { useEffect, useState } from 'react';
import { MinHeap, heapSort } from './lib/heap';

export default function App() {
  const [fileAsText, setFileAsText] = useState('');
  const [file, setFile] = useState();
  const fileReader = new FileReader();

  useEffect(() => {
    const teste = new MinHeap();

    teste.push(10);
    teste.push(15);
    teste.push(30);
    teste.push(40);
    teste.push(50);
    teste.push(100);
    teste.push(40);

    // Printing the Heap
    console.log(teste.printHeap());

    // Peeking And Removing Top Element
    console.log(teste.peek());
    console.log(teste.pop());

    // Printing the Heap
    // After Deletion.
    console.log(teste.printHeap());

    // heapSort(teste, 4);
  }, []);

  fileReader.addEventListener(
    'load',
    () => {
      setFileAsText(fileReader.result);
    },
    false,
  );

  useEffect(() => {
    if (file) {
      fileReader.readAsText(file);
    }
  }, [file]);

  return (
    <>
      <h1>
        Start useHuffman!
      </h1>
      <input type="file" onChange={(event) => setFile(event.target.files[0])} />
    </>
  );
}
