import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "@tanstack/react-query";
import SearchBar from "@/component/SearchBar";
import Article from "@/component/Article";
import Modal from "@/component/Modal";
import { getData } from "@/api/api"; 
import { Tarticle, TarticleData } from "@/types/HomeScreenType";
import { serviceFormat } from "@/hooks/fomatter";
import Nav from "@/component/Nav";
import Loading from "@/component/ui/Loading";
import Fetching from "@/component/ui/Fetching";

function HomeScreen() {
	const fetchFn = ({ pageParam = 1}: { pageParam: number}) => getData(pageParam);
	const loadingRef = useRef<HTMLDivElement>(null);

	const {
    data,
		isLoading,
		isFetchingNextPage,
		isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
			queryKey:['todayHeadline'], 
			queryFn: ({pageParam})=>fetchFn({pageParam}), 
      getNextPageParam: ( _lastPage, allPages ) => Number(allPages.length)+1,
			staleTime: 1000 *60 * 5,
      cacheTime: 1000 * 60 * 5
		});

	useEffect(() => {
		if (loadingRef.current && hasNextPage) {
			const observer = new IntersectionObserver(
				entries => entries[0].isIntersecting && fetchNextPage(),
				{ threshold: 1 }
			);
			observer.observe(loadingRef.current);

			return () => observer.disconnect();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hasNextPage]);

  return (
		<HomeScreenBox>
			<HomeScreens id="homeScreen">
				<SearchBar/>
				{isLoading ? <Loading/>:<></>}
				<ArticleList>
					{ data?.pages?.map( page => 
							page.map((el: TarticleData, index: number) => {
								const article: Tarticle = {
									headline: el.headline.main,
									newspaper: el.source,
									reporter: el.byline.original,
									pubDate: serviceFormat(el.pub_date),
									url: el.web_url,
									id: el._id
								};
								return <Article key={index} article={article}/>;
					}))}
					{isFetchingNextPage ? <Fetching/>:<></>}
					{isError ? "에러 발생":<></>}
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
	/* max-height: 768px; */
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