import styled from "styled-components";

function Modal(props : { modalState: boolean }) {
	const { modalState } = props;
	const nationList: string[] = [ "대한민국", "중국", "일본", "미국", "북한", "러시아", "프랑스", "영국", "북한"];

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
						<DatePicker type="date" data-placeholder="날짜를 선택해주세요"/>
					</Sector>

					<Sector>
						<Label>
							국가
						</Label>
						<NationListBox>
							{ nationList.map((el:string) => {
									return (
										<NationBtn>
											{el}
										</NationBtn>
								)})
							}
						</NationListBox>
					</Sector>
					<SubmitBtn>
						<Div>
							필터 적용하기
						</Div>
					</SubmitBtn>
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
	padding-left: 20px;
	padding-right: 20px;
`;

const InputBox = styled.div`
	width: 100%;
	height: 480px;
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	background-color: #FFFFFF;
	gap: 40px;
	padding: 20px;
`;

const Sector = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const Label = styled.label`
	width: fit-content;
	height: 24px;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: -0.05em;
`;

const InputHeadLine = styled.input.attrs({type: "text", placeholder: "검색하실 헤드라인을 입력해주세요." })`
	width: 100%;
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
		color: #C4C4C4;
	}
`;

const DatePicker = styled.input`
	width: 100%;
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
	outline: none;

	&[type='date']::before {
		content: attr(data-placeholder);
		width: 100%;
		font-size: 14px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: -0.04em;
		color: #C4C4C4;
	}

	&[type="date"]::-webkit-calendar-picker-indicator {
		color: rgba(0, 0, 0, 0);
		opacity: 1;
		display: block;
		background: url('src/assets/svg/calendar-modal.svg') no-repeat 98% 50%; 
		width: 30px;
		height: 25px;
		border-width: thin;
		cursor: pointer;
	}
`;

const NationListBox = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const NationBtn = styled.div`
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
	color: #6D6D6D;
	margin-right: 4px;
	margin-bottom: 4px;

	&:nth-child(6),:nth-child(7),:nth-child(8), :nth-child(9) {
		margin-bottom:0;
	}
`;

const SubmitBtn = styled.button`
	width: 100%;
	height: 60px;
	border-radius: 16px;
	border: none;
	background: #3478F6;
`;

const Div = styled.div`
	width: 100%;
	height: 24px;
	color: #FFFFFF;
	font-size: 16px;
	/* font-weight: 600; */
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.05em;
	text-align: center;
`;