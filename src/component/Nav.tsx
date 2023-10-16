import styled from "styled-components";

function Nav() {
  return (
		<NavBox>
		</NavBox>
  )
}

export default Nav;

const NavBox = styled.div`
	width: 100%;
	max-width: 560px;
	height: 85px;
	position: sticky;
	bottom:0;
	background-color: #000000;
	z-index: 99;
	border-radius: 30px;
`;