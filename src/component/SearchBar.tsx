import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Filter from "./ui/Filter";
import search from "@/assets/svg/search.svg";
import calendar from "@/assets/svg/calendar.svg";
import { TsearchBarList } from "@/types/HomeScreenType";
import { filterStore } from "@/model/store";

function SearchBar() {
	const filterState = filterStore(state=>state.filterState);
	const [list, setList] = useState<TsearchBarList[]>([ 
		{ key: "Headline", svg: search, text: "전체 헤드라인" }, 
		{ key: "Date", svg: calendar, text: "전체 날짜" }, 
		{ key: "Nation", svg: "", text: "전체 국가" }, 
	])

	useLayoutEffect(() => {
		const headlineData = filterState.headline ? filterState.headline:"전체 헤드라인";
		const dateData = filterState.date ? filterState.date:"전체 날짜";
		const nationData = typeof(filterState.nation) === "string" ? 
			filterState.nation : 
			filterState.nation.length > 1 ? 
				filterState.nation[0].nation+` 외 ${filterState.nation.length-1}개`: 
				filterState.nation[0].nation;
		setList([
			{ key: "Headline", svg: search, text: headlineData }, 
			{ key: "Date", svg: calendar, text: dateData }, 
			{ key: "Nation", svg: "", text: nationData }, 
		])
	}, [filterState])
	

  return (
    <SearchBox>
			<UiBox>
				{list.map(el=>{
					return <Filter key={el.key} svg={el.svg} text={el.text} />
				})}
			</UiBox>
    </SearchBox>
  )
}

export default SearchBar;

const SearchBox = styled.div`
	width: 100%;
	height: 60px;
	position: sticky;
	top: 0;
	background-color: #FFFFFF;
	border-bottom: 1px solid #C4C4C4;
`;

const UiBox = styled.div`
	width: fit-content;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 20px;
	gap: 7px;
`;