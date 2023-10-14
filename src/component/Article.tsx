import styled from "styled-components";
import substract from "@/assets/svg/subtract.svg";

function Article() {

  return (
    <ArticleBox>
			
			<TitleBox>
				<Title>
					국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”
				</Title>
				<IconBox>
					<Icon src={substract}/>
				</IconBox>
			</TitleBox>

			<SourceData>
			</SourceData>
    </ArticleBox>
  )
}

export default Article;

const ArticleBox = styled.div`
	width: auto;
	height: auto;
	padding-top: 10px;
	padding-right: 20px;
	padding-bottom: 10px;
	padding-left: 20px;
	background-color: #FEFEFE;
	border-radius: 8px;
	gap: 8px;
`;

const TitleBox = styled.div`
	width: 295px;
	height: 56px;
	display: flex;
	justify-content: space-between;
`;

const Title = styled.div`
	width: 260px;
	height: 56px;
	color: #000000;
	font-size: 18px;
	font-weight: 600;
	line-height: 28px;
	letter-spacing: -0.05em;
`;


const IconBox = styled.div`
	width: 24px;
	height: 24px;
	padding: 4px;
	gap: 10px;
`;

const Icon = styled.img`
	width: 16px;
	height: 16px;
`;

const SourceData = styled.div`
	width: 295px;
	height: 20px;
`;
