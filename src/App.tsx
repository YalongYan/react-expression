import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import Main from './components';
import { SubObj } from './types'
 
const expListData: Array<SubObj> = [
  {
    id: 1,
    relationType: 'and',
    leftValue: '1',
    leftLabel: '1',
    rightValue: '2',
    rightLabel: '2',
  },
  {
    id: 2,
    relationType: 'or',
    leftValue: '11',
    leftLabel: '11',
    rightValue: '22',
    rightLabel: '22',
  },
  {
    id: 3,
    relationType: 'and',
    leftValue: '111',
    leftLabel: '111',
    rightValue: '222',
    rightLabel: '222',
  }
]

ReactDOM.render(<Main expList={expListData} />, document.getElementById('app'));
