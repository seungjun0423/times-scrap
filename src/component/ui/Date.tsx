import styled from "styled-components";
import calendar from "@/assets/svg/calendar.svg";
function Date() {

  return (
    <DateBox>
			<Icon src={calendar}/>
			<Text>
				전체 날짜
			</Text>
    </DateBox>
  )
}

export default Date;


const DateBox = styled.div`
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

const Icon = styled.img`
	width: 16px;
	height: 16px;
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