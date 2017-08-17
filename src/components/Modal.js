import React from 'react';
import { Modal as Modall} from 'antd';
import 'antd/dist/antd.css';

const Modal = ({isVisible, onNoOki, onOki}) => (
    <Modall
        visible={isVisible}
        title="Hola!"
        okText="Oki"
        cancelText="No Oki"
        onOk={onOki} // function that will be called when a user clicked Oki button 
        onCancel={onNoOki}
      >
        
        This is a Modal :)

      </Modall>
);

export default Modal;