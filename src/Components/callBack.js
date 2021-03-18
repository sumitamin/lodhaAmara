import React from 'react'
import Contact from './Contact';
import Modal from 'react-modal';
import RequestCall from './requestCall';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
Modal.setAppElement('#root')
const Callback = ({trigger, updateTrigger}) => {
    return (
        <Modal
            isOpen={trigger}
            // onAfterOpen={afterOpenModal}
            onRequestClose={updateTrigger}
            // style={customStyles}
            contentLabel="Example Modal"
        >
            <RequestCall classN='modal-form' />
        </Modal>
    )
}

export default Callback;