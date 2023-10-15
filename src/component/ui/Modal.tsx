import styled from "styled-components";
// import calendarModal from "@/assets/svg/calendar-modal.svg";
import "react-datepicker/dist/react-datepicker.css";



function Modal(props : { modalState: boolean }) {
	const { modalState } = props;

  return (
		<>
		{modalState ?
			<ModalBox>
				<InputBox>

					<Sector>
						<Label>
							헤드라인
						</Label>
						<InputHeadLine/>
					</Sector>

					<Sector>
						<Label>
							날짜
						</Label>
						<InputDateBox>
							<input className="date_picker" type="date" placeholder="날짜를 선택해주세요"/>
							{/* <CalendarIcon src={calendarModal} /> */}
						</InputDateBox>
					</Sector>

					<Sector>
						<Label>
							국가
						</Label>
						<NationListBox>
							<NationBtn>
								대한민국
							</NationBtn>
						</NationListBox>
					</Sector>
				</InputBox>
			</ModalBox>
		:<></>}
		</>
  )
}

export default Modal;

const ModalBox = styled.div`
	width: 100%;
	max-width: 375px;
	height: 100%;
	max-height: 768px;
	border-radius: 30px;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InputBox = styled.div`
	width: 335px;
	height: 480px;
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	background-color: #FFFFFF;
	gap: 40px;
	padding: 20px;
`;

const Sector = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const Label = styled.label`
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: -0.05em;
`;

const InputHeadLine = styled.input.attrs({type: "text", placeholder: "검색하실 헤드라인을 입력해주세요." })`
	width: 295px;
	height: 44px;
	padding-top: 10px;
	padding-right: 20px;
	padding-bottom: 10px;
	padding-left: 20px;
	border-radius: 8px;
	border: 1px solid #C4C4C4;
	outline: none;


	&::placeholder{
		font-size: 14px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: -0.04em;
	}
`;

const InputDateBox = styled.div`
	width: 295px;
	height: 44px;
	display:flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 10px;
	padding-right: 20px;
	padding-bottom: 10px;
	padding-left: 20px;
	border-radius: 8px;
	border: 1px solid #C4C4C4;
`;

// const CalendarIcon = styled.img`
// 	width: 16px;
// 	height: 16px;
// `;

const NationListBox = styled.div`
	display: flex;
	gap: 8px;
`;

const NationBtn = styled.div`
	/* width: 100%; */
	/* height: 100%; */
	font-size: 14px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.04em;
	border: 1px solid #F2F2F2;
	border-radius: 30px;
	color: #6D6D6D;
	padding-top: 6px;
	padding-right: 12px;
	padding-bottom: 4px;
	padding-left: 12px;
`;