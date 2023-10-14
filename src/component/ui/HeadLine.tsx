import styled from "styled-components";
import search from "@/assets/svg/search.svg";

function HeadLine() {

  return (
    <HeadLineBox>
			<Icon src={search}/>
			<Text>
				전체 헤드라인
			</Text>
    </HeadLineBox>
  )
}

export default HeadLine;

const HeadLineBox = styled.div`
	width: 117px;
	height: 34px;
	display: flex;
	align-items: center;
	padding-left: 12px;
	border: 1px solid #C4C4C4;
	border-radius: 30px;
	gap: 4px;
`;

const Icon = styled.img`
	width: 16px;
	height: 16px;
`;

const Text = styled.div`
	width: 73px;
	height: 24px;
	display: flex;
	align-items: center;
	color: #6D6D6D;
	font-size: 14px;
	font-weight: 400;
	letter-spacing: -0.04em;
	font-family: Apple SD Gothic Neo;
`;