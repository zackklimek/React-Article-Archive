import React, { useState } from "react";
import ArchivePage from "./pages/ArchivePage";
import "./App.css";

function App() {
	const linkedinUrl = "https://www.linkedin.com/in/zackklimek"
	const githubURL = "https://www.github.com/zackklimek"

	const SAMPLE_ARTICLES = [
		{
			title: "Grid System",
			url: "https://www.react-bootstrap.github.io/layout/grid/",
			note:
				"Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.",
			datetime: "2022-10-22T04:12:07.272Z",
			tags: ["JS"],
		},
		{
			title: "Google",
			url: "https://google.com",
			note: "Google search engine",
			datetime: "2022-11-30T04:16:35.291Z",
			tags: [],
		},
		{
			title: "React-Article-Archive",
			url: "https://github.com/zackklimek/React-Article-Archive",
			note: "Public GitHub repository for this project",
			datetime: "2022-12-02T20:59:11.559Z",
			tags: ["CS"]
		},
		{
			title: "React Bootstrap Documentation",
			url: "https://react-bootstrap.github.io/",
			note: "React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.",
			datetime: "2022-11-01T04:18:03.342Z",
			tags: ["CS", "JS"],
		},
		{
			title: "React - Getting Started",
			url: "https://reactjs.org/docs/getting-started.html",
			note: "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
			datetime: "2022-11-03T04:18:03.342Z",
			tags: ["CS", "JS"],
		},
		{
			title: "LinkedIn",
			url: "https://www.linkedin.com",
			note:
				"LinkedIn homepage.",
			datetime: "2022-10-02T04:18:20.603Z",
			tags: ["Career"],
		}, 
	];

	const [entries, setEntries] = useState(SAMPLE_ARTICLES);
	const [searchTags, setSearchTags] = useState([]);

	const addEntryHandler = (title, url, note, tags, datetime) => {
		const articleData = {
			title: title,
			url: url,
			note: note,
			tags: tags,
			datetime: datetime,
		};
		setEntries([...entries, articleData]);
	};

	const removeEntryHandler = (date) => {
		const newArticles = entries.filter((a) => a.datetime !== date);
		setEntries(newArticles);
	}

	const updateEntryHandler = (entry) => {
		const newArticles = entries.filter((a) => a.datetime !== entry.datetime);
		newArticles.push(entry);
		setEntries(newArticles)
	}

	return (
		<div>
			<div id="header">
				<a id="header-text" href="/">
					<h2>Article-Archive</h2>
				</a>
			</div>
			<div className="mx-4">
				<ArchivePage
					addEntry={addEntryHandler}
					removeEntry={removeEntryHandler}
					updateEntry={updateEntryHandler}
					entries={entries}
					searchTags={searchTags}
					setSearchTags={setSearchTags}
				/>
			</div>
			<div id="footer">
				<p><b>Zack Klimek</b> | F22 | <a className="linkText" href={linkedinUrl}>linkedin</a> | <a className="linkText" href={githubURL}>github</a></p>
			</div>
		</div>
	);
}

export default App;
