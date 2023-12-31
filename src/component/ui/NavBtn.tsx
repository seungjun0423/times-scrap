import styled from "styled-components";
import { TnavBtnData } from "@/types/type";
import { pageStore } from "@/model/store";
import pageHandler from "@/hooks/pageHandler";

function NavBtn( { svg, text, }: TnavBtnData ) {
	const page = pageStore( state => state.page);
	const setPage = pageStore( state => state.setPage)

	return (
		<Btn onClick={()=>{pageHandler({text, setPage})}}>
			<Icon src={svg}/>
			<Text $isSelected={ (page==="home" && text==="홈") || (page==="scrap" && text==="스크랩")}>
				{text}
			</Text>
		</Btn>
	)
}

export default NavBtn;

const Btn = styled.div`
	width: auto;
	height: 45px;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
`;

const Icon = styled.img`
	width: 24px;
	height: 24px;
	margin-bottom: 9px;
`;

const Text = styled.span<{$isSelected: boolean}>`
	width: fit-content;
	color:${ props => props.$isSelected ? "#FFFFFF": "#6D6D6D"};
	font-size: 10px;
	font-weight: 600;
	line-height: 12px;
	letter-spacing: 0em;
	text-align: center;

`