import styled from "styled-components";
import SearchBar from "@/component/SearchBar";
import Article from "@/component/ui/Article";
import { scrapStore } from "@/model/store";
import { Tarticle } from "@/types/type";

function ScrapScreen(){
	const scrapList = scrapStore(state=>state.scrapList);

	return (
		<>
			<SearchBar/>
			<ArticleList>
				{ scrapList.map( (el: Tarticle, index: number) => {
					return <Article key={index} article={el}/>
				})}
			</ArticleList>
		</>
	)
}
export default ScrapScreen;

const ArticleList = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 20px;
	padding-right: 20px;
	padding-left: 20px;
	gap: 8px;
`;