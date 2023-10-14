import styled from "styled-components";
import { SearchBarList } from "@/types/HomeScreenType";

function Filter( props: Omit<SearchBarList, "key">) {
	const { svg, text } = props;

  return (
    <FilterBox>
			{svg ? <Icon src={svg}/>: <></>}
			<Text>
				{text}
			</Text>
    </FilterBox>
  )
}

export default Filter;

const FilterBox = styled.div`
	width: auto;
	height: auto;
	display: flex;
	align-items: center;
	padding-top: 6px;
	padding-bottom: 4px;
	padding-left: 12px;
	padding-right: 12px;
	border: 1px solid #C4C4C4;
	border-radius: 30px;
	gap: 4px;
`;

const Icon = styled.img`
	width: 16px;
	height: 16px;
`;

const Text = styled.span`
	width: 100%;
	height: 100%;
	padding-top: 5px;
	padding-bottom: 5px;
	color: #6D6D6D;
	font-size: 14px;
	font-weight: 400;
	letter-spacing: -0.04em;
`;