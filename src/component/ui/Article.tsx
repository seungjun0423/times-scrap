import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import star from "@/assets/svg/subtract.svg";
import star_fill from "@/assets/svg/star-fill.svg"
import { Tarticle } from "@/types/type";
import { scrapStore, filtering } from "@/model/store";

function Article( { article } : { article: Tarticle}) {
	const { headline, newspaper, reporter, pubDate, url, id } = article;
	const [isScrap, setIsScrap] = useState<string>(star);
	const scrapList = scrapStore(state=>state.scrapList);
	const addScrap = scrapStore(state=>state.addScrap);
	const removeScrap = scrapStore(state=>state.removeScrap);
	const filtered = filtering(state=>state.filtered);
	const setFiltered = filtering(state=>state.setFiltered);

	useLayoutEffect(() => {
		// console.log(article);
		const scrapCheck = scrapList.filter(el=>el.id ===id).length !==0 ? true: false;

		if( scrapCheck ){
			setIsScrap(star_fill);
		} else if( !scrapCheck ){
			setIsScrap(star);
		}
	}, [scrapList]);

	const goArticle = () => {
		window.location.href = url;
	}

	const scrapHandler = () => {
		const scrapCheck = scrapList.filter(el=>el.id ===id).length !==0 ? true: false;
		if( scrapCheck ){
			if(window.confirm("스크랩을 해제하시겠습니까?")){
				removeScrap([...scrapList.filter((el:Tarticle)=>el.id!==id)]);
				if(filtered !== null){
					setFiltered([...filtered.filter((el:Tarticle)=>el.id!==id)]);
				}
			} else {
				return;
			}
		} else if( !scrapCheck ){
			addScrap(article);
		}
	};

  return (
    <ArticleBox>
			<TitleBox>
				<Title onClick={goArticle}>
					{headline}
				</Title>
				<IconBox>
					<Icon onClick={ scrapHandler } src={isScrap}/>
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
`;

const Icon = styled.img`
	width: 16px;
	height: 16px;
	cursor: pointer;
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