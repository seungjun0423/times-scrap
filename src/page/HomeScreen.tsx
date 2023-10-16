import styled from "styled-components";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import SearchBar from "@/component/SearchBar";
import Article from "@/component/Article";
import Modal from "@/component/Modal";
import { getTodayHeadline } from "@/api/api"; 
import { TarticleData } from "@/types/HomeScreenType";
import { serviceFormat, apiFormat } from "@/hooks/fomatter";
import Nav from "@/component/Nav";

function HomeScreen() {
	// const { data } = useQuery({
  //   queryKey: ['article'],
  //   queryFn: ()=>getArticle("2023-10-09","biden","china"),
  // });
	const { data } = useQuery({
		queryKey: [`todayHeadline`, apiFormat(new Date())],
		queryFn: ()=> getTodayHeadline( apiFormat(new Date()) ),
		staleTime: 1000 * 60 * 5, 
		cacheTime: 1000 * 60 * 5,
	});

  return (
		<HomeScreenBox>
			<HomeScreens>
				<SearchBar/>
				<ArticleList>
					{ data?.map( (el: TarticleData , index: number) =>{
							const article = {
								headline: el.headline.main,
								newspaper: el.source,
								reporter: el.byline.original,
								pubDate: serviceFormat(el.pub_date),
							}
							return <Article key={index}article={article}/>
					})}
				</ArticleList>
				<Nav/>
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
	max-width: 560px;
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