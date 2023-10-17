import { useState } from "react";
import styled from "styled-components";
import HomeScreen from "@/page/HomeScreen";
import ScrapScreen from "./page/ScrapScreen";
import Nav from "./component/Nav";
import Modal from "./component/Modal";
import { filterStore } from "@/model/store";

function App() {
	const [page, setPage] = useState<string>("home");
	const setFilterState = filterStore( state => state.setFilterState);

	const pageHandler = (text: string) => {
		if(text === "홈"){
			setPage("home");
		} else if( text === "스크랩"){
			setPage("scrap");
		}
		setFilterState({headline: '전체 헤드라인', date: '전체 날짜', nation: '전체 국가'});
	}

  return (
    <Apps>
			<Section id='section'>
				{
					page === "home" ?
					<HomeScreen/> :
					<ScrapScreen pageHandler={pageHandler}/>
				}
				<Nav pageHandler={pageHandler}/>
			</Section>
			<Modal page={page}/>
    </Apps>
  )
}

export default App;

const Apps = styled.main`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Section = styled.section`
	width: 100%;
	max-width: 560px;
	height: 100%;
	background-color: #F0F1F4;
	border-radius: 30px;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		display: none;
	};
`;
