import styled from "styled-components";
import star from "@/assets/svg/subtract.svg";
// import star_fill from "@/assets/svg/star-fill.svg"
import { Tarticle } from "@/types/HomeScreenType";

function Article( { article } : { article: Tarticle}) {
	const { headline, newspaper, reporter, pubDate, url, id } = article;
	const goArticle = () => {
		window.location.href = url;
	}

	const scrapHandler = (e) => {
		console.log(e.target);
	};

  return (
    <ArticleBox>
			<TitleBox>
				<Title onClick={goArticle}>
					{headline}
				</Title>
				<IconBox>
					<Icon onClick={e=>{scrapHandler(e)}} src={star}/>
				</IconBox>
			</TitleBox>
			<SourceData>
				<Published>
					<Source>
						{newspaper}
					</Source>
					<Source>
						{reporter}
					</Source>
				</Published>
				<PubDate>
					{pubDate}
				</PubDate>
			</SourceData>
    </ArticleBox>
  )
}

export default Article;

const ArticleBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 10px;
	padding-right: 20px;
	padding-bottom: 10px;
	padding-left: 20px;
	background-color: #FEFEFE;
	border-radius: 8px;
	gap: 8px;
`;

const TitleBox = styled.div`
	width: 100%;
	height:56px;
	display: flex;
	justify-content: space-between;
`;

const Title = styled.span`
	width: fit-content;
	height: fit-content;
	color: #000000;
	font-size: 18px;
	font-weight: 600;
	line-height: 28px;
	letter-spacing: -0.05em;
	padding-right: 6px;
	cursor: pointer;
	display: -webkit-box;
	-webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
	white-space: normal; 
  overflow: hidden; 
  text-overflow: ellipsis; 
`;

const IconBox = styled.div`
	width: 24px;
	height: 24px;
	padding: 4px;
	gap: 10px;
	cursor: pointer;
`;

const Icon = styled.img`
	width: 16px;
	height: 16px;
`;

const SourceData = styled.div`
	width: 100%;
	height: 20px;
	display: flex;
	justify-content: space-between;
`;

const Published = styled.div`
	display: flex;
	gap: 8px;
`;

const Source = styled.span`
	color: #000000;
	font-size: 13px;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: -0.05em;
`;

const PubDate = styled.span`
	color: #6D6D6D;
	font-size: 13px;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: -0.05em;
`;