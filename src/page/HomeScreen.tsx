import styled from "styled-components";
import { useInfiniteQuery } from "@tanstack/react-query";
import SearchBar from "@/component/SearchBar";
import Article from "@/component/Article";
import Modal from "@/component/Modal";
import { getTodayHeadline } from "@/api/api"; 
import { TarticleData } from "@/types/HomeScreenType";
import { serviceFormat, apiFormat, infiniteParams } from "@/hooks/fomatter";
import Nav from "@/component/Nav";
import { useEffect, useRef } from "react";

function HomeScreen() {
	// console.log(new Date().getDate());
	// const { data } = useQuery({
  //   queryKey: ['article'],
  //   queryFn: ()=>getArticle("2023-10-09","biden","china"),
  // });
	// const { data } = useQuery({
	// 	queryKey: [`todayHeadline`, apiFormat(new Date())],
	// 	queryFn: ()=> getTodayHeadline( apiFormat(new Date()) ),
	// 	staleTime: 1000 * 60 * 5, 
	// 	cacheTime: 1000 * 60 * 5,
	// });
	const fetchFn = ({ pageParam = infiniteParams(apiFormat(new Date())) }) => getTodayHeadline(pageParam);
	const loadingRef = useRef<HTMLDivElement>(null);

	const {
    data,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
			queryKey:['todayHeadline'], 
			queryFn: (pageParam)=>fetchFn(pageParam), 
      getNextPageParam: (lastPage) => lastPage[0] ? infiniteParams( apiFormat(lastPage[0].pub_date) ):false, 
      staleTime: 1000 * 60 * 5, 
      cacheTime: 1000 * 60 * 5
		});

		const articlePages = data?.pages;

		useEffect(() => {
			if (loadingRef.current && hasNextPage) {
				const observer = new IntersectionObserver(
					entries => entries[0].isIntersecting && fetchNextPage(),
					{ threshold: 1 }
				);
				observer.observe(loadingRef.current);

				return () => observer.disconnect();
			}
		}, [hasNextPage]);

  return (
		<HomeScreenBox>
			<HomeScreens>
				<SearchBar/>
				<ArticleList>
					{ articlePages?.map( page => 
							page.map((el: TarticleData, index: number) => {
								const article = {
									headline: el.headline.main,
									newspaper: el.source,
									reporter: el.byline.original,
									pubDate: serviceFormat(el.pub_date),
									url: el.web_url,
								};
								return <Article key={index} article={article}/>;
					}))}
					<div ref={loadingRef} />
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