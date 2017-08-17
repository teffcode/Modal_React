import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const ButtonOk = ({ showModal }) => (
    <Button
        type="primary"
        onClick={showModal}
        style={{
            marginTop:'50px',
            marginLeft: '600px',
          }}
    >
    
    Click me!

    </Button>
);

export default ButtonOk;