import React from 'react';
 
export const InvalidMove = ({invalidMove}) => {
  if (invalidMove){
    return (<span className="label label-danger">Invalid Move</span>);
  }
  return null;
};