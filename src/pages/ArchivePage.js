import React from "react";
import AddEntryCard from "../components/AddEntryCard";
import EntryList from "../components/EntryList";

const ArchivePage = (props) => {
	return( 
		<div>
			<div>
				<h4 className="mb-3">New Entry</h4>
				<AddEntryCard
					addEntry={props.addEntry}
				/>
				<h4 className="mb-2">Archive</h4>
				<EntryList
					entries={props.entries}
					removeEntry={props.removeEntry}
					updateEntry={props.updateEntry}
					searchTags={props.searchTags}
					setSearchTags={props.setSearchTags}
				/>
			</div>
		</div>
	); 
};

export default ArchivePage;
