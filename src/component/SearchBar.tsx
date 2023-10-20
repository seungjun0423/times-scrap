import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Filter from "./ui/Filter";
import search from "@/assets/svg/search.svg";
import calendar from "@/assets/svg/calendar.svg";
import search_blue from "@/assets/svg/search-blue.svg";
import calendaer_blue from "@/assets/svg/calendar-blue.svg";
import { TfilterState, TsearchBarList } from "@/types/type";
import { pageStore, filterStore} from "@/model/store";

function SearchBar() {
	/** 현재 페이지 상태값 */
	const page = pageStore( state => state.page);
	/** homeScreen의 searchbar 상태값(page 값이 바뀌면 list에 주입)*/
	const filterHome = filterStore( state => state.filterHome );
	/** scrapScreen의 searchbar 상태값(page 값이 바뀌면 list에 주입) */
	const filterScrap = filterStore( state => state.filterScrap );

	// 지역 스코프 상태 => SearchBar에 실제 보여지는 상태값
	const [list, setList] = useState<TsearchBarList[]>([ 
		{ key: "Headline", svg: search, text: "전체 헤드라인", input: false }, 
		{ key: "Date", svg: calendar, text: "전체 날짜", input: false }, 
		{ key: "Nation", svg: "", text: "전체 국가", input: false }, 
	]);

	// homescreen: modal에서 입력된 데이터(filterStore)에 따라 지역 상태 list 관리
	useLayoutEffect(() => {
		const state: TfilterState = {
			headline: '',
			date: '',
			nation: '',
		};

		if( page === 'home' ){
			state.headline = filterHome.headline;
			state.date = filterHome.date;
			state.nation = filterHome.nation;
		} else if( page === 'scrap'){
			state.headline = filterScrap.headline;
			state.date = filterScrap.date;
			state.nation = filterScrap.nation;
		}
		const headlineState = state.headline ? state.headline:"전체 헤드라인";
		const dateState = state.date ? state.date:"전체 날짜";
		
		const nationState = 
		// 국가를 선택하지 않은 경우
		state.nation.length === 0 ? "전체 국가" :
		// 기본 상태인 경우 
		typeof(state.nation) === "string" ? state.nation : 
		// 1개 이상을 선택한 경우
		state.nation.length > 1 ? state.nation[0].nation+` 외 ${state.nation.length-1}개`: 
		// 1개만 선택한 경우
		state.nation[0].nation;
		
		const searchIcon = headlineState === '전체 헤드라인' ? search : search_blue;
		const calendarIcon = dateState === '전체 날짜' ? calendar : calendaer_blue;  		
		
		const headlinInput = headlineState === '전체 헤드라인' ? false : true;
		const dateInput = dateState === '전체 날짜' ? false : true;  		
		const nationInput = nationState === '전체 국가' ? false : true;
		
		setList([
			{ key: "Headline", svg: searchIcon, text: headlineState, input: headlinInput }, 
			{ key: "Date", svg: calendarIcon, text: dateState, input: dateInput }, 
			{ key: "Nation", svg: "", text: nationState, input: nationInput }, 
		]);
	}, [page,filterHome, filterScrap]);

  return (
    <SearchBox>
			<UiBox>
				{list.map(el=>{
					return <Filter key={el.key} svg={el.svg} text={el.text} input={el.input} />
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