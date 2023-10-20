import styled from "styled-components";

function Fetching() {

  return (
    <Background key="fetching">
			데이터 로드중...
    </Background>
  )
}

export default Fetching;

const Background = styled.div`
	width: 100%;
	max-width: 560px;
	border-radius: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 32px;
	color: gray;
	margin-top: 40px;
	margin-bottom: 100px;
`;

