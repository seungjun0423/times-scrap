import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Filter from "./ui/Filter";
import search from "@/assets/svg/search.svg";
import calendar from "@/assets/svg/calendar.svg";
import search_blue from "@/assets/svg/search-blue.svg";
import calendaer_blue from "@/assets/svg/calendar-blue.svg";
import { TsearchBarList } from "@/types/HomeScreenType";
import { filterStore } from "@/model/store";

function SearchBar() {
	const filterState = filterStore(state=>state.filterState);
	const [list, setList] = useState<TsearchBarList[]>([ 
		{ key: "Headline", svg: search, text: "전체 헤드라인", input: false }, 
		{ key: "Date", svg: calendar, text: "전체 날짜", input: false }, 
		{ key: "Nation", svg: "", text: "전체 국가", input: false }, 
	])

	useLayoutEffect(() => {
		const headlineState = filterState.headline ? filterState.headline:"전체 헤드라인";
		const dateState = filterState.date ? filterState.date:"전체 날짜";

		const nationState = 
		// 국가를 선택하지 않은 경우
			filterState.nation.length === 0 ? "전체 국가" :
			// 기본 상태인 경우 
				typeof(filterState.nation) === "string" ? filterState.nation : 
				// 1개 국가 이상을 선택한 경우
					filterState.nation.length > 1 ? filterState.nation[0].nation+` 외 ${filterState.nation.length-1}개`: 
					// 1개 국가만 선택한 경우
						filterState.nation[0].nation;

		const searchIcon = headlineState === '전체 헤드라인' ? search : search_blue;
		const calendarIcon = dateState === '전체 날짜' ? calendar : calendaer_blue;  		
						
		setList([
			{ key: "Headline", svg: searchIcon, text: headlineState }, 
			{ key: "Date", svg: calendarIcon, text: dateState }, 
			{ key: "Nation", svg: "", text: nationState }, 
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
	height: auto;
	position: sticky;
	top: 0;
	background-color: #FFFFFF;
	border-bottom: 1px solid #C4C4C4;
	padding-left: 20px;
	padding-top: 13px;
	padding-bottom: 13px;
`;

const UiBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	gap: 7px;
`;