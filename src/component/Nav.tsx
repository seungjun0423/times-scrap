import { useState, useEffect, } from "react";
import styled from "styled-components";
import NavBtn from "./ui/NavBtn";
import home_white from "@/assets/svg/home-white.svg";
import home_gray from "@/assets/svg/home-gray.svg";
import scrap_gray from "@/assets/svg/scrap-gray.svg";
import scrap_white from "@/assets/svg/scrap-white.svg"; 
import { TnavBtnData } from "@/types/type";
import { pageStore } from "@/model/store";

function Nav() {
	const page = pageStore( state => state.page);
	const [navBtnData, setNavBtnData] = useState<TnavBtnData[]>([
		{key: "home", svg: home_white, text: "홈"},
		{key: "scrap",svg: scrap_gray, text: "스크랩"}
	]);

	useEffect(() => {
		if( page === "home"){
			setNavBtnData([
				{key: "home", svg: home_white, text: "홈"},
				{key: "scrap",svg: scrap_gray, text: "스크랩"}
			]);
		} else if( page === "scrap"){
			setNavBtnData([
				{key: "home", svg: home_gray, text: "홈"},
				{key: "scrap",svg: scrap_white, text: "스크랩"}
			]);
		}
	}, [page])
	
  return (
		<NavBox>
			<IconBox>
				{ navBtnData.map( (el: TnavBtnData)=>{
					return 	<NavBtn key={el.key} svg={el.svg} text={el.text}/>
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