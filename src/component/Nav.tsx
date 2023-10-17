import styled from "styled-components";
import home from "@/assets/svg/home-white.svg";
import scrap from "@/assets/svg/scrap-gray.svg";

function Nav() {

  return (
		<NavBox>
			<IconBox>
				<Btn key="home">
					<Icon src={home}/>
					<Text>
						홈
					</Text>
				</Btn>
				<Btn key="scrap">
					<Icon src={scrap}/>
					<Text>
						스크랩
					</Text>
				</Btn>
			</IconBox>
		</NavBox>
  )
}

export default Nav;

const NavBox = styled.aside`
	width: 100%;
	max-width: 560px;
	height: 85px;
	position: sticky;
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