import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import { COLORS } from "../../utils/styled";
import APIs from "../../utils/networking";

const BannerUploader = () => {
	const fileRef = useRef<HTMLInputElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const [image, setImage] = useState<File | null>();
	const [bigTitle, setBigTitle] = useState("");
	const [content, setContent] = useState("");
	const [order, setOrder] = useState<number>(0);
	const [flag, setFlag] = useState<boolean>(true);

	const { push } = useHistory();

	const onClickUpload = () => {
		if (!fileRef.current) return;
		fileRef.current.click();
	};

	const onChangeFileInput = (e: React.FormEvent) => {
		if (!(e.target as HTMLInputElement).files || (e.target as HTMLInputElement).files!.length === 0) return;
		setImage((e.target as HTMLInputElement).files![0]);
	};

	const onChangeBitTitle = (e: React.FormEvent) => {
		setBigTitle((e.target as HTMLInputElement).value);
	};

	const onChangecontent = (e: React.FormEvent) => {
		setContent((e.target as HTMLInputElement).value);
	};

	const onChangeOrder = (e: React.FormEvent) => {
		if (!Number.isInteger(+(e.target as HTMLInputElement).value)) return;
		setOrder(+(e.target as HTMLInputElement).value);
	};

	const onClickFlag = (e: React.MouseEvent) => {
		if ((e.target as HTMLElement).innerText.trim() === "노출") setFlag(true);
		else setFlag(false);
	};

	const onClickDeleteButton = () => {
		const conf = window.confirm("정말 삭제하시겠습니까?");
		conf && setImage(null);
	};

	const onClickUploadButon = async () => {
		if (!image) {
			alert("이미지를 등록해주세요.");
			return;
		}
		const conf = window.confirm("배너를 등록하시겠습니까?");
		if (!conf) return;
		const formData = new FormData();
		formData.append("title", bigTitle);
		formData.append("content", content);
		formData.append("viewOrder", `${order}`);
		formData.append("useFlag", flag ? "true" : "false");
		formData.append("image", image);

		const result = await APIs.postBanner(formData);
		if (result.success) {
			alert("성공적으로 배너를 등록했습니다.");
			push("/banners");
		} else {
			alert("배너 등록에 실패했습니다.");
		}
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
				<InputContainer>
					<ImageContainer>
						<img src="" alt="preview" ref={imageRef} />
						<h1>{bigTitle}</h1>
						<h3>{content}</h3>
					</ImageContainer>
					<div>
						<span>제목</span>
						<input type="text" onChange={onChangeBitTitle} value={bigTitle} />
					</div>
					<div>
						<span>소제목</span>
						<input type="text" onChange={onChangecontent} value={content} />
					</div>
					<div>
						<span>우선순위</span>
						<input type="text" onChange={onChangeOrder} value={order} />
					</div>
					<div>
						<span>노출여부</span>
						<FlagSelector>
							<span className={flag ? "active" : ""} onClick={onClickFlag}>
								노출
							</span>
							<span className={flag ? "" : "active"} onClick={onClickFlag}>
								노출 안함
							</span>
						</FlagSelector>
					</div>
				</InputContainer>
			)}
			<input type="file" ref={fileRef} onChange={onChangeFileInput} />
			<UploadButton onClick={onClickUpload}>{image ? "다른 이미지로 교체" : "배너 추가"}</UploadButton>
			{image && (
				<section>
					<Button confirm={false} onClick={onClickDeleteButton}>
						삭제
					</Button>
					<Button confirm={true} onClick={onClickUploadButon}>
						등록
					</Button>
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

	& > section {
		width: 100%;
		margin-top: 20px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 20px;
	}
`;

const ImageContainer = styled.div`
	width: 100%;
	position: relative;

	& img {
		width: 100%;
		max-height: 300px;
	}

	& > h1,
	h3 {
		position: absolute;
		left: 50px;
		color: white;
	}

	& > h1 {
		font-weight: 700;
		font-size: 24px;
		top: 50px;
	}

	& > h3 {
		font-weight: 700;
		font-size: 18.72px;
		top: 90px;
	}
`;

const InputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 20px;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		& > span {
			display: block;
			width: 100px;
			color: white;
			font-size: 18px;
		}

		& > input {
			background-color: ${COLORS.FOG};
			border: 1px solid white;
			color: white;
			height: 40px;
			width: calc(100% - 160px);
			font-size: 18px;
			padding: 0px 15px;

			&:focus {
				outline: none;
			}
		}
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

const FlagSelector = styled.div`
	width: calc(100% - 130px);
	height: 100%;
	display: flex;
	align-items: center;
	gap: 50px;

	& > span {
		color: white;
		font-size: 18px;
		padding: 2px;
	}

	& > .active {
		border-bottom: 1px solid white;
	}
`;

export default BannerUploader;
