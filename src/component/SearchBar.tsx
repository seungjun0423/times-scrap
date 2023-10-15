import styled from "styled-components";
import Filter from "./ui/Filter";
import search from "@/assets/svg/search.svg";
import calendar from "@/assets/svg/calendar.svg";
import { TsearchBarList } from "@/types/HomeScreenType";

function SearchBar() {
	const list: TsearchBarList[]  = [ 
			{ key: "HeadLine", svg: search, text: "전체 헤드라인" }, 
			{ key: "Date", svg: calendar, text: "전체 날짜" }, 
			{ key: "Nation", svg: "", text: "전체 국가" }, 
	];

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
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 20px;
	gap: 7px;
`;