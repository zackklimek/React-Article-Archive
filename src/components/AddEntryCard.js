import React, { useState } from "react";
import NoteForm from "./NoteForm";
import ArticleForm from "./ArticleForm";
import classes from "./AddEntryCard.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const AddEntryCard = (props) => {
	// 1 == Url form, 2 == Note form
	const [selected, setSelected] = useState(0);
	const onUrlHandler = (event) => {
		if (selected === 1) {
			setSelected(0);
		} else {
			setSelected(1);
		}
	};
	const onNoteHandler = (event) => {
		if (selected === 2) {
			setSelected(0);
		} else {
			setSelected(2);
		}
	};
	const onCloseHandler = (event) => {
		setSelected(0);
	}
	
	return (
		<Container className="mb-3 d-flex-block">
			<Card className="py-3">
				{selected === 0 && (
					<p className="mx-5">
						What would you like to add to your archive?
					</p>
				)}
				<Row className="justify-content-center mt-1 mb-3">
					<Col xs="5">
						<Card
							onClick={onUrlHandler}
							className={classes.entryTypeCard}
						>
							Url
						</Card>
					</Col>
					<Col xs="5">
						<Card
							onClick={onNoteHandler}
							className={classes.entryTypeCard}
						>
							Note
						</Card>
					</Col>
				</Row>
				{selected === 1 && (
					<ArticleForm addEntry={props.addEntry}
					onClose={onCloseHandler} />
				)}
				{selected === 2 && <NoteForm addNoteHandler={props.addArticleHandler}
				onClose={onCloseHandler}/>}
			</Card>
		</Container>
	);
};

export default AddEntryCard;