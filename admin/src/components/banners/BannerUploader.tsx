import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { COLORS } from "../../utils/styled";

const BannerUploader = () => {
	const fileRef = useRef<HTMLInputElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const [image, setImage] = useState<File | null>();

	const onClickUpload = () => {
		if (!fileRef.current) return;
		fileRef.current.click();
	};

	const onChangeInput = (e: React.FormEvent) => {
		if (!(e.target as HTMLInputElement).files || (e.target as HTMLInputElement).files!.length === 0) return;
		setImage((e.target as HTMLInputElement).files![0]);
	};

	useEffect(() => {
		const fileReader = new FileReader();
		if (!image) return;
		fileReader.onload = (e) => {
			if (!imageRef.current || !e.target) return;
			imageRef.current.src = e.target.result as string;
		};
		fileReader.readAsDataURL(image);
	}, [image]);

	return (
		<Container>
			{image && (
				<>
					<img src="" alt="preview" ref={imageRef} />
					<div>
						<span>제목</span>
						<input type="text" />
					</div>
					<div>
						<span>소제목</span>
						<input type="text" />
					</div>
				</>
			)}
			<input type="file" ref={fileRef} onChange={onChangeInput} />
			<UploadButton onClick={onClickUpload}>{image ? "다른 이미지로 교체" : "배너 추가"}</UploadButton>
			{image && (
				<section>
					<Button confirm={false}>삭제</Button>
					<Button confirm={true}>등록</Button>
				</section>
			)}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	position: relative;
	overflow-y: scroll;

	& > input {
		width: 0px;
		height: 0px;
		position: absolute;
	}

	& img {
		max-width: 100%;
		max-height: 300px;
		margin-bottom: 20px;
	}

	& > section {
		width: 100%;
		margin-top: 20px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 20px;
	}
`;

const Button = styled.button<{ confirm: boolean }>`
	cursor: point;
	width: 100px;
	height: 40px;
	background-color: ${COLORS.FOG};
	border: 1px solid white;
	color: white;
	font-size: 18px;

	&:active {
		outline: none;
		background-color: ${(props) => (props.confirm ? COLORS.LIGHTBLUE : "rgba(255, 0, 0, 0.3)")};
	}
`;

const UploadButton = styled.button`
	height: 70px;
	background: ${COLORS.FOG};
	border: none;
	color: white;
	font-size: 20px;
	border: 1px solid white;
	cursor: pointer;

	&:active {
		outline: none;
		background: ${COLORS.LIGHTBLUE};
	}
`;

export default BannerUploader;
