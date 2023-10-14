import styled from "styled-components";

function Nation() {

  return (
    <NationBox>
			<Text>
				전체 국가
			</Text>
    </NationBox>
  )
}

export default Nation;


const NationBox = styled.div`
	width: auto;
	height: auto;
	display: flex;
	align-items: center;
	padding-top: 6px;
	padding-bottom: 4px;
	padding-left: 12px;
	padding-right: 12px;
	border: 1px solid #C4C4C4;
	border-radius: 30px;
	gap: 4px;
`;

const Text = styled.div`
	width: 50px;
	height: 24px;
	display: flex;
	align-items: center;
	color: #6D6D6D;
	font-size: 14px;
	font-weight: 400;
	letter-spacing: -0.04em;
	font-family: Apple SD Gothic Neo;
`;
