import React, {useRef} from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditEntryModal = (props) => {
    let noteRef = useRef("")
    let titleRef = useRef("")
    let urlRef = useRef("")

    const saveClickHandler = () => {
        if(titleRef.current.value.length > 0 && urlRef.current.value.length > 0){
            props.updateArticle(
                {
                    title:titleRef.current.value,
                    url:urlRef.current.value,
                    note:noteRef.current.value,
                    datetime:props.entry.datetime,
                    tags:props.entry.tags
                }
            );
            props.closeModal();
        }
    }

    return(
        <Modal show={props.showModal}>
            <Modal.Header>
                <Modal.Title>{props.entry.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formUrl">
                        <Form.Label>Url</Form.Label>
                        <Form.Control
                            type="url"
                            ref={urlRef}
                            defaultValue={props.entry.url}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="Title"
                            ref={titleRef}
                            defaultValue={props.entry.title}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formNote">
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                            type="note"
                            ref={noteRef}
                            defaultValue={props.entry.note}
                        ></Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.closeModal} variant="secondary">Close</Button>
                <Button onClick={saveClickHandler} variant="primary">Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditEntryModal;