// import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import SearchBar from "@/component/SearchBar";
import Article from "@/component/Article";
import Modal from "@/component/ui/Modal";

function HomeScreen() {
	// const [modalState, setModalState] = useState<boolean>(false);
	useEffect(() => {
		const testFn = async () => {
			const test = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=korea&api-key=lzhGmqq7OKnA2Og1BjxCcStOW6qd3Iru");
			console.log(test);
		}
		testFn();
	}, [])

  return (
		<HomeScreenBox>
			<HomeScreens>
				<SearchBar/>
				<ArticleList>
					<Article/>
				</ArticleList>
			</HomeScreens>
			<Modal modalState={false}/>
		</HomeScreenBox>
  )
}

export default HomeScreen

const HomeScreenBox = styled.section`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const HomeScreens = styled.main`
	width: 100%;
	max-width: 375px;
	height: 100%;
	max-height: 768px;
	background-color: #F0F1F4;
	border-radius: 30px;
`;

const ArticleList = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 20px;
	padding-right: 20px;
	padding-left: 20px;
	gap: 8px;
`;