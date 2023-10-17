import styled from "styled-components";
import { TnavBtnData } from "@/types/type";

function NavBtn( { pageHandler ,svg, text} : {pageHandler: (text: string)=> void} & TnavBtnData){
	return (
		<Btn onClick={()=>{pageHandler(text)}}>
			<Icon src={svg}/>
			<Text>
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

const Text = styled.span`
	width: fit-content;
	color:#FFFFFF;
	font-size: 10px;
	font-weight: 600;
	line-height: 12px;
	letter-spacing: 0em;
	text-align: center;

`