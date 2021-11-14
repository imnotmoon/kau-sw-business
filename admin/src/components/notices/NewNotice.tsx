import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { Container, Title, Button, TitleInput, FileUploader } from "./NewNoticeStyle";
import PreviewModal from "./PreviewModal";
import NoticeFilter from "./NoticeFilter";
import APIs from "../../utils/networking";
import FilePreviewer from "./FilePreviewer";
import { NoticeDetail } from "../../interfaces";

const NewNotice = ({ content, editing = false } : {content?: NoticeDetail, editing?: boolean }) => {
	const history = useHistory();
	const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText("")));
	const [previewModal, setPreviewModal] = useState(false);
	const [files, setFiles] = useState<File[]>(content?.files ? content.files : []);
	const [deletedFiles, setDeletedFiles] = useState<Number[]>([]);  // 삭제된 file id
	const [title, setTitle] = useState(content?.title ? content.title : '');
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

	const onClickUploadButton = () => {
		if(!fileInputRef.current) return;
		fileInputRef.current.click();
	}

	const onChangeFiles = (e: React.FormEvent) => {
		if(!(e.target as HTMLInputElement).files) return;
		setFiles(Array.from((e.target as HTMLInputElement).files!));
	}

	const renderFileList = () => {
		if(files.length === 0) return false;
		return true;
	}

	const removeFile = (idx: number) => {
		const newFiles = [...files];
		newFiles.splice(idx, 1);
		setFiles(newFiles);
	}

	const buildNewNoticeFormData = () => {
		const formData = new FormData();
		formData.append('title', title);
		formData.append('content', draftToHtml(convertToRaw(editorState.getCurrentContent())));
		formData.append('writer', sessionStorage.getItem('username')!);
		formData.append('category', filters.category);
		formData.append('pinFlag', `${filters.pin}`);
		if(fileInputRef.current!.files && fileInputRef.current!.files.length > 0) {
			Array.from(fileInputRef.current!.files).forEach(file => {
				formData.append('files', file);
			})
		}
		return formData;
	}

	const buildEditNoticeFormData = () => {
		const formData = new FormData();
		formData.append('id', `${content!.id}`);
		formData.append('title', content!.title);
		formData.append('content', draftToHtml(convertToRaw(editorState.getCurrentContent())));
		formData.append('writer', sessionStorage.getItem('username')!);
		formData.append('category', filters.category);
		formData.append('pinFlag', `${filters.pin}`);

		if(fileInputRef.current!.files && fileInputRef.current!.files.length > 0) {
			Array.from(fileInputRef.current!.files).forEach(file => {
				formData.append('files', file);
			})
		}

		// TODO: 삭제된 파일 추가
		if(deletedFiles.length > 0) {
			deletedFiles.forEach((fileId) => {
				formData.append('deletedFiles', `${fileId}`);
			})
		}
		return formData;
	}

	const onClickSubmit = async () => {
		if(!window.confirm('공지사항을 등록하시겠습니까?')) return;
		if(!fileInputRef.current) return;
		const formData = editing ? buildEditNoticeFormData() : buildNewNoticeFormData();

		const result = editing ? await APIs.editNotice(formData) : await APIs.postNotice(formData);
		console.log(result)
		if(result.success) {
			alert(`공지사항을 정상적으로 ${editing ? '수정' : '등록'}했습니다.`);
			history.push('/');
		}
	}

	const options = {
		editorState: editorState,
		ref: editorRef,
		onEditorStateChange: onEditorStateChange,
	}

	return (
		<>
			<Container>
			<Title>{editing ? '공지사항 수정' : '새 공지사항 작성'}</Title>
				<div>
					<TitleInput>
						<span>제목</span>
						<input type="text" value={title} onChange={onChangeTitleInput}/>
					</TitleInput>
					<NoticeFilter  filters={filters} set={setFilters}/>
					<div onClick={onClickBackground}>
						<Editor {...options} />
					</div>
					<FileUploader>
						<input type="file" multiple ref={fileInputRef} onChange={onChangeFiles}/>
						<button onClick={onClickUploadButton}>파일 업로드</button>
					</FileUploader>
					{renderFileList() && <FilePreviewer files={files} removeFile={removeFile}/>}
					<div>
						<Button onClick={onClickPreview}>미리보기</Button>
						<Button onClick={onClickSubmit}>완료</Button>
					</div>
				</div>
			</Container>
			{ previewModal && <PreviewModal state={editorState} close={setPreviewModal} title={title}/>}
		</>
	);
};



export default NewNotice;
