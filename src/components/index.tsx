import React from 'react';

import './index.scss'
import ExpItem from './expItem'

import { SubObj } from './../types'

interface propsType {
  expList: SubObj[];
}

const ReactExpressionYd: React.FC<propsType> = ({ expList }) => {
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

export default ReactExpressionYd;
