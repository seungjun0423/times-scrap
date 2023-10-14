import styled from "styled-components";
import HeadLine from "./ui/HeadLine";
function SearchBar() {

  return (
    <SearchBox>
			<UiBox>
				<HeadLine />
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