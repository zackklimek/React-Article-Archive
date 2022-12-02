import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

const NoteForm = (props) => {
	let titleRef = useRef("");
	let noteRef = useRef("");
	let tagsRef = useRef("");

	const onArchiveClick = (event) => {
		const isoString = new Date().toISOString();
		props.addNoteHandler(
			titleRef.current.value,
			"",
			noteRef.current.value,
			tagsRef.current.value.split(" "),
			isoString
		);
		titleRef.current.value = "";
		noteRef.current.value = "";
		tagsRef.current.value = "";
		props.onClose();
	};

	return (
		<Container display="flex">
			<p className="my-2">Add a note to your archive.</p>
			<Form>
				<Form.Group className="mb-2 pe-5" controlId="formTitle">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="title"
						placeholder="Status update, Journal entry, etc."
						ref={titleRef}
					/>
				</Form.Group>
				<Form.Group className="mb-2 pe-5" controlId="formNote">
					<Form.Label>Note</Form.Label>
					<Form.Control
						type="note"
						ref={noteRef}
						className="pt-4 pb-5"
					/>
					<Form.Text className="text-muted pt-5">
						What's going on?
					</Form.Text>
				</Form.Group>
				<Form.Group className="mb-2 pe-5" controlId="formTags">
					<Form.Label>Tags</Form.Label>
					<Form.Control type="tags" ref={tagsRef} />
				</Form.Group>
				<div className="text-center py-3">
					<Button onClick={onArchiveClick} variant="primary">
						Archive
					</Button>
				</div>
			</Form>
		</Container>
	);
};
export default NoteForm;