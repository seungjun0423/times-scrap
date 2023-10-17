import styled from "styled-components";
import NavBtn from "./ui/NavBtn";
import home from "@/assets/svg/home-white.svg";
import scrap from "@/assets/svg/scrap-gray.svg";
import { TnavBtnData } from "@/types/type";

function Nav({ pageHandler }: { pageHandler: () => void}) {
	const navBtnData: TnavBtnData[] = [
		{key: "home", svg: home, text: "홈"},
		{key: "scrap",svg: scrap, text: "스크랩"}
	];
	
  return (
		<NavBox>
			<IconBox>
				{ navBtnData.map( (el: TnavBtnData)=>{
					return 	<NavBtn key={el.key} svg={el.svg} text={el.text} pageHandler={pageHandler}/>
				})
				}
			</IconBox>
		</NavBox>
  )
}

export default Nav;

const NavBox = styled.aside`
	width: 100%;
	max-width: 560px;
	height: 85px;
	position: fixed;
	bottom: 0;
	background-color: #000000;
	border-radius: 30px;
	padding-top: 20px;
	padding-right: 80px;
	padding-bottom: 20px;
	padding-left: 80px;
`;

const IconBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;