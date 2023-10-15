import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "@/component/SearchBar";
import Article from "@/component/Article";
import Modal from "@/component/ui/Modal";
import { getTodayHeadLine } from "@/api/api"; 
import { TarticleData } from "@/types/HomeScreenType";
import { modalStore } from "@/model/store";
// import moment from "moment-timezone";

function HomeScreen() {
	const modalState = modalStore(state=>state.modalState);
	// const setModalState = modalStore(state=>state.setModalState);
	// console.log(modalState);
	// const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ['article'],
  //   queryFn: ()=>getArticle("2023-10-09","biden","china"),
  // });
	// const { data } = useQuery({
  //   queryKey: [`todayHeadline`],
  //   queryFn: getTodayHeadLine
  // });
	// console.log(data.headline.main);
	// console.log(data.source);
	// console.log(data.byline.original);
	// console.log(data);
	// console.log(new Date());

  return (
		<HomeScreenBox>
			<HomeScreens>
				<SearchBar/>
				<ArticleList>
					{/* {
						data?.map( (el: TarticleData , index: number) =>{
							const article = {
								headLine: el.headline.main,
								newspaper: el.source,
								reporter: el.byline.original,
								pubDate: el.pub_date,
							}
							return <Article key={index}article={article}/>
						})
					} */}
				</ArticleList>
			</HomeScreens>
			<Modal/>
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
	overflow-x: scroll;

	&::-webkit-scrollbar {
		display: none;
	};
`;

const ArticleList = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 20px;
	padding-right: 20px;
	padding-left: 20px;
	gap: 8px;
`;