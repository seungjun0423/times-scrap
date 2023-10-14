import styled from "styled-components";
import Filter from "./ui/Filter";
import search from "@/assets/svg/search.svg";
import calendar from "@/assets/svg/calendar.svg";


function SearchBar() {

  return (
    <SearchBox>
			<UiBox>
				<Filter key={"HeadLine"} svg={search} text={'전체 헤드라인'}/>
				<Filter key={"Date"} svg={calendar} text={'전체 날짜'}/>
				<Filter key={"Nation"} svg={''} text={'전체 국가'}/>
			</UiBox>
    </SearchBox>
  )
}

export default SearchBar;

const SearchBox = styled.div`
	width: 100%;
	height: 60px;
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