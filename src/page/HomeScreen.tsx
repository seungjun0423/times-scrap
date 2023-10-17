import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "@tanstack/react-query";
import SearchBar from "@/component/SearchBar";
import Article from "@/component/ui/Article";
import { getData } from "@/api/api"; 
import { Tarticle, TarticleData } from "@/types/type";
import { serviceFormat } from "@/lib/fomatter";
import Loading from "@/component/Loading";
import Fetching from "@/component/Fetching";

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
		<>
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
		</>
  )
}

export default HomeScreen

const ArticleList = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 20px;
	padding-right: 20px;
	padding-left: 20px;
	gap: 8px;
`;