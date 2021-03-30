import React from 'react';

import './index.scss'
import ExpItem from './expItem'

type SubObj = {
  id: number,
  relationType: string,
  leftValue: string,
  leftLabel: string,
  rightValue: string,
  rightLabel: string,
}

interface propsType {
  expList: SubObj[];
}

const Main: React.FC<propsType> = ({ expList }) => { 
  return (
    <div className="expressionContainer">
      {
        expList.map(item => {
          return <ExpItem key={item.id} />
        })
      }
      <div className="addGroup">
        <div className="groupBorder"></div>
        <div className="add">新增表达式</div>
      </div>
    </div>
    );
};

export default Main;
