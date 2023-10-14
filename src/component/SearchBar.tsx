import styled from "styled-components";
import SearchInput from "./ui/SearchInput";
function SearchBar() {

  return (
    <SearchBox>
			<UiBox>
				<SearchInput />
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
`;