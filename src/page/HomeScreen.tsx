import styled from "styled-components";

function HomeScreen() {

  return (
		<HomeScreenLayout>
			<HomeScreens/>
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
	max-height: 812px;
	background-color: #F0F1F4;
`;