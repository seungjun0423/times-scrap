import styled from "styled-components";
import HomeScreen from "@/page/HomeScreen";
import ScrapScreen from "./page/ScrapScreen";
import Nav from "./component/Nav";
import Modal from "./component/Modal";
// import { pageStore, filterStore } from "@/model/store";
import { pageStore } from "@/model/store";

function App() {
	const page = pageStore( state => state.page);

  return (
    <Apps>
			<Section id='section'>
				{
					page === "home" ?
						<HomeScreen/> :
						<ScrapScreen/>
				}
				<Nav/>
			</Section>
			<Modal/>
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
