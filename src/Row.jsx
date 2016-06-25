import React from 'react';
 
import {Col} from './Col.jsx';

export const Row = ({row, rowIdx, onClick}) => {
  const n = 3;
  return (
    <tr>  
      {row.map( 
        (col,colIdx) => { 
          const key = n * rowIdx + colIdx; 
          return (<Col key={key} col={col} onClick={onClick.bind(this,key)} /> ) 
        }
      )}  
    </tr>
  );

};

//export default Row;