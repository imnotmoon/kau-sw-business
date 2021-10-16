import React from "react";
import styled from "styled-components";

// components
import ContentFrame from "../../components/ContentFrame";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import ImageContent from "../../components/ImageContent";

// images
import img1 from "../../public/img/basic_education/5-7.png";
import withHead from "../../components/hoc/withHead";

const AdditiveMajor = () => {
	return (
		<ContentFrame title="융합전공" state={3}>
			<Content>
				<Title text="AI 융합연계 전공 제도 운용"></Title>
				<Subtitle text="SW융합과정 운영 계획"></Subtitle>
				<ImageContent alt="" src={img1} paddingLeft={40}></ImageContent>
				<br />
				<br />
				<Subtitle text="스마트드론공학과"></Subtitle>
				<li>신설 배경 및 교육목표</li>
				<Li>최근 급성장하고 있는 Air Mobility 산업을 선도할 창의적‧도전적 인재 양성</Li>
				<Li>
					보잉, 에어버스, 현대차, 도요타, IT업체들이 AI‧SW 기술을 갖춘 고급 인재를 필요로 하면서, 모빌리티
					분야와 AI‧SW 역량을 갖춘 융합 인재 양성
				</Li>
				<Li>
					스마트드론공학과는 AI 기반 데이터분석기술, 스마트드론 개발 역량, 전자통신 및 항공학 분야 지식을
					겸비한 인재를 육성할 수 있는 전문교과목을 관련 학과들과 공동 운영
				</Li>
				<Li>
					(졸업후진로) 항공/자동차/IT/로봇 등 유관 기업, 국내외 대학원, 벤처 창업, 국책연구소 등 다양한 분야로
					진출{" "}
				</Li>
				<br />
				<Subtitle text="AI융합물류전공"></Subtitle>
				<li>신설 배경 및 교육목표</li>
				<Li>
					AI, 데이터 분석, IoT, 자율주행 등 4차산업 신기술을 적극적으로 도입한 물류의 ‘디지털화’와
					‘스마트화’가 급속도로 진행 중
				</Li>
				<Li>
					물류패러다임 혁신과 신산업 발전을 주도할 SW친화적 융합형 창의인재가 필요하나, 물류 분야 도매인
					지식을 바탕으로 SW분석을 실행할 전문가는 매우 부족
				</Li>
				<Li>
					특히, 최근 코로나19로 인한 언택트 환경에서 물류 분야는, 과거의 기업 단위에서 사람 단위로, 제품 그룹
					단위에서 개별 제품 단위로의 방대하고 세분화된 데이터가 생성되어 이에 대한 분석이 절실히 요구
				</Li>
				<Li>
					아마존, 알리바바, DHL 등 글로벌 기업은 AI, IoT, 머신러닝, 웨어러블, 로봇, 자율주행차, 드론 등 첨단
					기술에 적극적으로 투자하고, 물류에 접목하여 효율성 및 경쟁력 강화를 위한 노력을 경주 중
				</Li>
				<br />
				<Subtitle text="AI융합경영전공"></Subtitle>
				<li>신설 배경</li>
				<Li>
					4차산업 기술의 발전으로 기존 산업 분야의 벽이 허물어지고 새로운 융합형 산업이 대두될 것으로 전망
				</Li>
				<Li>
					미래융합산업을 주도할 통섭형 인재 육성이 시급하지만, 산업적 도매인 지식과 SW기술을 함께 갖춘 인재는
					부족{" "}
				</Li>
				<li>교육 목표</li>
				<Li>4차산업 융합시대에 AI비즈니스를 주도할 융합형 미래 전문인재의 육성</Li>
				<Li>AI기술을 이해하는 전문경영인 육성</Li>
				<Li>경영마인드를 가진 AI 기술인력 육성</Li>
				<br />
				<Subtitle text="AI융합신소재전공"></Subtitle>
				<li>신설 배경</li>
				<Li>
					4차산업혁명시대에는 AI, 빅데이터활용, 스마트모빌리티, 에너지 기술이 경제성장을 주도할 것으로
					예상하면서, 첨단산업의 출발점인 인공지능 뉴로모픽 반도체, 지능형 센서 및 5G/B5G 통신부품소재, 차세대
					에너지변환 및 저장기술의 확보와 관련 신소재 전문인력양성이 필요
				</Li>
				<Li>
					우리나라의 주력 산업인 반도체, 자동차 및 철강 제조공정에 있어서 AI 기술의 적용이 빠른 속도로
					진행됨에 따라 생산공정상의 초기 데이터를 생성하는 현장 엔지니어들에게 AI 및 빅데이터 활용
					머신러닝/딥러닝기술을 이해하고 유효데이터를 생성할 수 있는 역량이 요구
				</Li>
				<Li>
					최근 빅데이터 기반 머신러닝 기술을 연계한 신소재 연구개발이 혁신적 연구방법론으로 급부상함에 따라,
					이러한 패러다임 변화에 대응할 수 있는 융합형 신소재 전문인력 양성의 필요성이 대두
				</Li>
				<Li>
					정부는 2020년 4월 ‘소재 연구데이터 플랫폼 구축사업’ 추진을 발표하며 혁신적 소재개발 기간 단축 및
					효율성 제고를 위한 빅데이터, 인공지능 기술연계의 필요성 강조
				</Li>
				<li>교육 목표</li>
				<Li>
					SW 기술과 신소재공학에 대한 통섭적 이해를 바탕으로 AI용 차세대 전자-반도체 소자개발을 이끌어 갈
					SW/HW 융합형 창의인재 양성{" "}
				</Li>
				<Li>
					빅데이터와 AI 기반의 신소재 개발 패러다임 변화를 선도하는 소재정보기술(Materials Informatics)
					전문인재 양성
				</Li>
			</Content>
		</ContentFrame>
	);
};

const Content = styled.div`
	display: flex;
	flex-direction: column;

	& > img {
		padding-left: 20px;
	}

	& > li {
		list-style-type: square;
		padding-left: 20px;
		color: #525252;
		font-size: 17px;
		padding-bottom: 10px;
	}
`;

const Li = styled.li`
	list-style-type: square;
	margin-left: 20px;
	color: #525252;
	font-size: 17px;
	padding-bottom: 10px;
`;

export default withHead(AdditiveMajor);
