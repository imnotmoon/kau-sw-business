import React, { useState, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { Container, Title, Button, TitleInput, FileUploader } from "./NewNoticeStyle";
import PreviewModal from "./PreviewModal";
import NoticeFilter from "./NoticeFilter";
import APIs from "../../utils/networking";

const NewNotice = () => {
	const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText("")));
	const [previewModal, setPreviewModal] = useState(false);
	const [title, setTitle] = useState('');
	const [filters, setFilters] = useState({ category: 'notice', pin: true })

	const editorRef = useRef<Editor | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const onEditorStateChange = (editorState: EditorState) => {
		setEditorState(editorState);
	};

	const onClickPreview = () => {
		setPreviewModal(true);
	}

	const onClickBackground = () => {
		if(!editorRef.current) return;
		editorRef.current.focusEditor();
	}

	const onChangeTitleInput = (e: React.FormEvent) => {
		setTitle((e.target as HTMLInputElement).value);
	}

	const onClickSubmit = async () => {
		if(!window.confirm('공지사항을 등록하시겠습니까?')) return;
		if(!fileInputRef.current) return;
		const formData = new FormData();
		formData.append('title', title);
		formData.append('content', draftToHtml(convertToRaw(editorState.getCurrentContent())));
		formData.append('writer', '...');
		formData.append('category', filters.category);
		formData.append('pinFlag', `${filters.pin}`);
		if(fileInputRef.current.files && fileInputRef.current.files.length > 0) {
			Array.from(fileInputRef.current.files).forEach(file => {
				formData.append('files', file);
			})
		}

		// Not Tested Yet
		const result = await APIs.postNotice(formData);
		console.log(result);
	}

	const options = {
		editorState: editorState,
		ref: editorRef,
		onEditorStateChange: onEditorStateChange,
	}

	return (
		<>
		<Container>
			<Title>새 공지사항 작성</Title>
			<TitleInput>
				<span>제목</span>
				<input type="text" value={title} onChange={onChangeTitleInput}/>
			</TitleInput>
			<NoticeFilter  filters={filters} set={setFilters}/>
			<div onClick={onClickBackground}>
				<Editor {...options} />
			</div>
			<FileUploader>
				<input type="file" multiple ref={fileInputRef}/>
				<button>파일 업로드</button>
			</FileUploader>
			<div>
				<Button onClick={onClickPreview}>미리보기</Button>
				<Button onClick={onClickSubmit}>완료</Button>
			</div>
		</Container>
		{ previewModal && <PreviewModal state={editorState} close={setPreviewModal} title={title}/>}
		</>
	);
};



export default NewNotice;
