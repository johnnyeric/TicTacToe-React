import React from 'react';

export const Col = ({col, onClick}) => {
  return (
    <td onClick={onClick}>{col}</td>
  );
};