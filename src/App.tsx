import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components';

const expListData = [
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
