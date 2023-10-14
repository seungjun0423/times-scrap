import styled from "styled-components";
import search from "@/assets/svg/search.svg";

function SearchInput() {

  return (
    <SearchInputBox>
			<Icon src={search}/>
			<Input placeholder="전체 헤드라인">
			</Input>
    </SearchInputBox>
  )
}

export default SearchInput;

const SearchInputBox = styled.div`
	width: auto;
	height: auto;
	display: flex;
	align-items: center;
	padding-top: 6px;
	padding-right: 12px;
	padding-bottom: 4px;
	padding-left: 12px;
	border: 1px solid #C4C4C4;
	border-radius: 30px;
	gap: 4px;
`;

const Icon = styled.img`
	width: 16px;
	height: 16px;
`;

const Input = styled.input`
	width: 73px;
	height: 24px;
	border: none;
	outline:none;
`;