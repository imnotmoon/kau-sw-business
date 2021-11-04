import React, { useState, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState } from "draft-js";

import { Container, Title, Button } from "./NewNoticeStyle";

const NewNotice = () => {
	const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText("")));
	const editorRef = useRef<Editor | null>(null);
	console.log(editorState)

	const onEditorStateChange = (editorState: EditorState) => {
		setEditorState(editorState);
	};

	const options = {
		editorState: editorState,
		ref: editorRef,
		onEditorStateChange: onEditorStateChange,

	}

	return (
		<Container>
			<Title>새 공지사항 작성</Title>
			<div>
				<Editor {...options} />
			</div>
			<div>
				<Button>완료</Button>
			</div>
		</Container>
	);
};



export default NewNotice;
