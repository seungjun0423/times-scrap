import styled from "styled-components";
import SearchBar from "@/component/SearchBar";
function HomeScreen() {

  return (
		<HomeScreenBox>
			<HomeScreens>
				<SearchBar />
			</HomeScreens>
		</HomeScreenBox>
  )
}

export default HomeScreen

const HomeScreenBox = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const HomeScreens = styled.div`
	width: 100%;
	max-width: 375px;
	height: 100%;
	max-height: 768px;
	background-color: #F0F1F4;
	border-radius: 30px;
`;