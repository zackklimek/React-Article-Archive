import React, { useRef } from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
/*
	Eventually support:
	* Pulling the title of the webpage from the url once the user
	  clicks/tabs out of the Control box
*/
const ArticleForm = (props) => {
	let titleRef = useRef("");
	let urlRef = useRef("");
	let noteRef = useRef("");
	let tagsRef = useRef("");

	const onArchiveClick = (event) => {
		let url;
		const isoString = new Date().toISOString();
		if(titleRef.current.value.length > 0 && urlRef.current.value.length > 0){
			if(urlRef.current.value.substring(0,8) === "https://"){
				url = urlRef.current.value;
			}
			else{
				url = "https://" + urlRef.current.value
			}
			props.addEntry(
				titleRef.current.value,
				url,
				noteRef.current.value,
				tagsRef.current.value.split(" "),
				isoString
			);
			titleRef.current.value = "";
			urlRef.current.value = "";
			noteRef.current.value = "";
			tagsRef.current.value = "";
			props.onClose();
		}
		
	};

	return (
		<Container display="flex">
			<p className="my-2">Add a webpage to your archive.</p>
			<Form>
				<Container>
					<Row>
						<Col>
							<Form.Group
								className="mb-3 pe-5"
								controlId="formUrl"
							>
								<Form.Label>Url</Form.Label>
								<Form.Control
									type="url"
									placeholder="www.article-archive.com"
									ref={urlRef}
								/>
							</Form.Group>
							<Form.Group
								className="mb-2 pe-5"
								controlId="formTitle"
							>
								<Form.Label>Title</Form.Label>
								<Form.Control
									type="title"
									placeholder="Article-Archive"
									ref={titleRef}
								/>
							</Form.Group>
							<Form.Group
								className="mb-2 pe-5"
								controlId="formTags"
							>
								<Form.Label>Tags</Form.Label>
								<Form.Control type="tags" ref={tagsRef} />
							</Form.Group>
						</Col>
						<Col>
							<Form.Group
								className="mb-2 pe-5"
								controlId="formNote"
							>
								<Form.Label>Note</Form.Label>
								<Form.Control
									type="note"
									ref={noteRef}
									className="pt-4 pb-5 mb-3"
								/>
								<Form.Text className="text-muted pt-5">
									Jot a quick note to describe your entry.
								</Form.Text>
							</Form.Group>
						</Col>
					</Row>
				</Container>

				<div className="text-center py-3">
					<Button className="mx-3" onClick={onArchiveClick} variant="primary">
						Archive
					</Button>
				</div>
			</Form>
		</Container>
	);
};
export default ArticleForm;