/*
 * @Author: Yonga
 * @Date: 2023-08-17 20:53:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-17 22:35:44
 * @FilePath: /transfer-demo/src/App.tsx
 */
import React, { useState } from 'react';
import './App.css'

interface Item {
  key: string;
  title: string;
}

const TransferComponent: React.FC = () => {
  const [sourceItems, setSourceItems] = useState<Item[]>([
    { key: '1', title: 'Item 1' },
    { key: '2', title: 'Item 2' },
    // ... more source items
  ]);

  const [targetItems, setTargetItems] = useState<Item[]>([]);

  const handleTransfer = (direction: 'left' | 'right', key: string) => {
    if (direction === 'right') {
      const selectedItem = sourceItems.find(item => item.key === key);
      if (selectedItem) {
        setTargetItems([...targetItems, selectedItem]);
        setSourceItems(sourceItems.filter(item => item.key !== key));
      }
    } else if (direction === 'left') {
      const selectedItem = targetItems.find(item => item.key === key);
      if (selectedItem) {
        setSourceItems([...sourceItems, selectedItem]);
        setTargetItems(targetItems.filter(item => item.key !== key));
      }
    }
  };

  return (
      <div className='container'>
        <div className='left'>
          <h2>Source</h2>
          <ul>
            {sourceItems.map(item => (
                <li key={item.key}>
                  {item.title}
                  <button onClick={() => handleTransfer('right', item.key)}>Add</button>
                </li>
            ))}
          </ul>
        </div>
        <div className='right'>
          <h2>Target</h2>
          <ul>
            {targetItems.map(item => (
                <li key={item.key}>
                  {item.title}
                  <button onClick={() => handleTransfer('left', item.key)}>Remove</button>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default TransferComponent;