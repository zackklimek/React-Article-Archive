import React, { useRef, useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import EntryCard from "./EntryCard";
import EditEntryModal from "./EditEntryModal";

const EntryList = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [currentEntry, setCurrentEntry] = useState({});

	const entryClickedHandler = (entry) => {
		setShowModal(true);
		setCurrentEntry(entry);
	}

	const closeModal = () => {
		setShowModal(false);
	}

	const tagsInputRef = useRef("");

	const searchChangeHandler = (event) => {
		if (tagsInputRef.current.value.length > 0) {
			props.setSearchTags(tagsInputRef.current.value.split(" "));
		}
	};

	return (
		<div className="pt-2">
			<EditEntryModal showModal={showModal} entry={currentEntry} closeModal={closeModal} updateArticle={props.updateEntry}/>
			<Container>
				<Form className="pb-2">
					<Form.Group controlId="formFilter">
						<Form.Control
							type="tags"
							placeholder="Enter tags, separated by spaces, or keywords to filter."
							ref={tagsInputRef}
							onChange={searchChangeHandler}
						/>
					</Form.Group>
				</Form>
				<Row>
					{props.entries.sort((a,b) => {
						return new Date(b.datetime) - new Date(a.datetime);
					}).map((i) => (
							<EntryCard removeArticleHandler={props.removeEntry} 
							key={i.datetime} entry={i}
							searchTags={props.searchTags}
							onEntryClick={entryClickedHandler}></EntryCard>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default EntryList;