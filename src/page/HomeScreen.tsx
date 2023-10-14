import styled from "styled-components";
import Filter from "@/component/Filter";
function HomeScreen() {

  return (
		<HomeScreenLayout>
			<HomeScreens>
				<Filter />
			</HomeScreens>
		</HomeScreenLayout>
  )
}

export default HomeScreen

const HomeScreenLayout = styled.section`
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