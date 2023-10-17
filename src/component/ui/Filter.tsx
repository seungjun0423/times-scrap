import styled from "styled-components";
import { TsearchBarList } from "@/types/HomeScreenType";
import { modalStore, filterStore } from "@/model/store";

function Filter( props: Omit<TsearchBarList, "key">) {
	const { svg, text, input } = props;
	const setModalState = modalStore( state => state.setModalState);
	const filterState = filterStore( state => state.filterState);
  return (
    <FilterBox onClick={setModalState}>
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
	padding-right: 12px;
	padding-bottom: 4px;
	padding-left: 12px;
	border: 1px solid #C4C4C4;
	/* border: 1px solid #82B0F4; */
	border-radius: 30px;
	gap: 4px;
	cursor: pointer;
`;

const Icon = styled.img`
	width: 16px;
	height: 16px;
`;

const Text = styled.span`
	width: 100%;
	height: 24px;
	color: #6D6D6D;
	font-size: 14px;
	font-weight: 400;
	letter-spacing: -0.04em;
	display: flex;
	align-items: center;
`;