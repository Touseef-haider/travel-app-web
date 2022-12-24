import React from "react";
import { Button, Modal } from "semantic-ui-react";

function ModalUI({
  onClose,
  onOpen,
  open,
  header,
  description,
  yesTitle,
  buttonTitle,
  onYes,
}) {
  return (
    <Modal
      onClose={onClose}
      onOpen={onOpen}
      centered
      open={open}
      trigger={<Button>{buttonTitle}</Button>}
    >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content image>
        <Modal.Description>{description}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={onClose}>
          No
        </Button>
        <Button
          content={yesTitle}
          labelPosition="right"
          icon="checkmark"
          onClick={onYes}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalUI;
