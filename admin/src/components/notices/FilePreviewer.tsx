import React from "react";
import styled from "@emotion/styled";

interface Files {
	files: File[];
	removeFile: (idx: number) => void;
}

const FilePreviewer = ({ files, removeFile }: Files) => {
	console.log(files);

	const onClickRemoveButton = (e: React.MouseEvent) => {
		const idx = (e.target as HTMLDivElement).closest("div")?.dataset.id;
		if (!idx) return;
		removeFile(+idx);
	};

	return (
		<Container>
			{files.map((file, idx) => {
				return (
					<div key={idx} data-id={idx}>
						<span>{file.name}</span>
						{~~(file.size / 1024 / 1024) >= 50 && <span>파일이 너무 큽니다.</span>}
						<button onClick={onClickRemoveButton}>삭제</button>
					</div>
				);
			})}
		</Container>
	);
};

const Container = styled.section`
	width: 90%;
	background-color: rgba(255, 255, 255, 0.1);
	border: 1px solid white;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid white;
	margin: 10px 0;

	& > div {
		width: 90%;
		height: 45px;
		border-top: 1px solid white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
	}

	& > div:first-of-type {
		border: none;
	}

	& button {
		border: none;
		background: none;
		color: red;
		font-size: 17px;
		height: 30px;
		width: 80px;
		cursor: pointer;
	}
`;

export default FilePreviewer;
