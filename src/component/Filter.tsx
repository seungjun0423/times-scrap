import styled from "styled-components";
import { TsearchBarList } from "@/types/HomeScreenType";
import { modalStore } from "@/model/store";

function Filter( props: Omit<TsearchBarList, "key">) {
	const { svg, text, input } = props;
	const setModalState = modalStore( state => state.setModalState);

  return (
    <FilterBox onClick={setModalState} $input={input}>
			{svg ? <Icon src={svg}/>: <></>}
			<Text $input={input}>
				{text}
			</Text>
    </FilterBox>
  )
}

export default Filter;

const FilterBox = styled.div<{$input: boolean}>`
	width: fit-content;
	max-width: 120px;
	height: 34px;
	display: flex;
	align-items: center;
	padding-top: 6px;
	padding-right: 12px;
	padding-bottom: 4px;
	padding-left: 12px;
	border: 1px solid ${ props => props.$input ? "#82B0F4" : "#C4C4C4"};
	border-radius: 30px;
	gap: 4px;
	cursor: pointer;

`;

const Icon = styled.img`
	width: 16px;
	height: 16px;
`;

const Text = styled.span<{$input: boolean}>`
	width: 100%;
	min-width: 50px;
	height: fit-content;
	color: ${ props => props.$input ? "#3478F6":"#6D6D6D"};
	font-size: 14px;
	font-weight: 400;
	letter-spacing: -0.04em;
	white-space: nowrap;
	overflow: hidden; 
  text-overflow: ellipsis; 
	text-align: center;
`;