import styled from "styled-components";

function Loading() {

  return (
    <Background key="loding">
			Loading...
    </Background>
  )
}

export default Loading;

const Background = styled.div`
	width: 100%;
	max-width: 560px;
	height: 100%;
	border-radius: 0 0 30px 30px;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	font-size: 32px;
	padding-bottom: 35%;
`;
