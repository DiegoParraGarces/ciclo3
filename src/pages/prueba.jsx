import React from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import {Button} from 'react-bootstrap';


const Prueba = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = React.useState("Transitioning...");
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
      setTitle("Transitioning...");
    };
  
    const modalLoaded = () => {
      setTitle("Modal Ready");
    };
  
    return (
      <>
        <button onClick={showModal}>Display Modal</button>
        <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>The body</Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button>Save</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  export default Prueba


