// import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "@/component/SearchBar";
import Article from "@/component/Article";
import Modal from "@/component/ui/Modal";
import { getArticle, getTodayHeadLine } from "@/api/api"; 

function HomeScreen() {
	// const [modalState, setModalState] = useState<boolean>(false);
	// const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ['article'],
  //   queryFn: ()=>getArticle("2023-10-09","biden","china"),
  // });

	const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todayHeadline'],
    queryFn: getTodayHeadLine,
  });
	

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