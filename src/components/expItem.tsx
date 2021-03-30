import React, { useCallback } from 'react';
// import { Select } from 'antd';
// const { Option } = Select;

// 按需加载 只加载了Select 不全部加载 antd 的组件 
import Select from 'antd/es/select';
const { Option } = Select;

const Main: React.FC = () => { 
  return (
    <div className="condition">
      <div className="borderCtn">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>

      <div className="itemRelation">
        <span className="subItem and active">并</span>
        <span className="subItem or">或</span>
      </div>

      <div className="inputCtn">
        <Select defaultValue="lucy" style={{ width: 120, height: '30px' }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    </div>
  );
};

export default Main;
