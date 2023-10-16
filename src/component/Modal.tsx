import { useState } from "react";
import styled from "styled-components";
import { modalStore, filterStore } from "@/model/store";
import { TnationList } from "@/types/HomeScreenType";

function Modal() {
	const labels: string[] = [ "헤드라인", "날짜", "국가", "필터적용하기"];
	const modalState = modalStore( state => state.modalState);
	const setFilterState = filterStore( state => state.setFilterState);
	const setModalState = modalStore( state => state.setModalState);
	const [headline, setHeadline] = useState<string>('');
	const [date, setDate] = useState<string>('');
	const [nation, setNation] = useState<TnationList[]>([ 
		{nation: "대한민국", isSelected: false, en: "south korea"},
		{nation: "중국", isSelected: false, en: "china"}, 
		{nation: "일본", isSelected: false, en: "japan"}, 
		{nation: "미국", isSelected: false, en: "usa"}, 
		{nation: "북한", isSelected: false, en: "north korea"}, 
		{nation: "러시아", isSelected: false, en: "russia"}, 
		{nation: "프랑스", isSelected: false, en: "france"}, 
		{nation: "영국", isSelected: false, en: "england"}, 
		{nation:"북한", isSelected: false, en: "north korea"}
	]);

	const bClickHandler = () => {
		setHeadline('');
		setDate('');
		setNation([
			...nation.map( el => { 
				el.isSelected = false; 
				return el;
		})]);
		setModalState();
	}

	const nSelectHandler = ( index: number ) => {
		nation[index].isSelected = !nation[index].isSelected;
		setNation([...nation]);
	};
	
	const filterHandler = () => {
		const filterData = {
			headline: headline,
			date: date.replaceAll('-','.'),
			nation: [...nation.filter(el=> el.isSelected)]
		};
		setFilterState(filterData);
		setModalState();
	};

  return (
		<>
		{modalState ?
			<ModalBox onClick={bClickHandler}>
				<InputBox onClick={(e) => e.stopPropagation()}>

					<Sector key="headline">
						<Label>
							{labels[0]}
						</Label>
						<InputHeadline
							value={headline}
							onChange={e=>{setHeadline(e.target.value)}}
						/>
					</Sector>

					<Sector key="date">
						<Label>
							{labels[1]}
						</Label>
						<DatePicker 
							type="date" 
							data-placeholder="날짜를 선택해주세요"
							onChange={ e =>{ setDate(e.target.value) }}
							value={ date }
							$isSelected={ date ? true:false }
						/>
					</Sector>

					<Sector key="nation">
						<Label>
							{labels[2]}
						</Label>
						<NationListBox>
							{ nation.map((el:TnationList, index: number) => {
									return (
										<NationBtn 
											key={index}
											onClick={()=>{ nSelectHandler(index) }}
											$isSelected={el.isSelected}
										>
											{el.nation}
										</NationBtn>
									)
								})
							}
						</NationListBox>
					</Sector>
					<SubmitBtn onClick={filterHandler}>
						<Div>
							{labels[3]}
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
	max-width: 560px;
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

const InputHeadline = styled.input.attrs({type: "text", placeholder: "검색하실 헤드라인을 입력해주세요." })`
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

const DatePicker = styled.input<{$isSelected?: boolean}>`
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
		content: attr(${props => props.$isSelected? '':"data-placeholder"});
		position: fixed;
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
		background: url('src/assets/svg/calendar-modal.svg') no-repeat 100% 50%; 
		width: ${props => props.$isSelected? "16px":"100%"};
		height: 45px;
		z-index: 99;
		cursor: pointer;
	}
`;

const NationListBox = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const NationBtn = styled.button<{$isSelected: boolean;}>`
	font-size: 14px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.04em;
	border: 1px solid #F2F2F2;
	border-radius: 30px;
	color: ${ props => props.$isSelected ? "#F2F2F2":"#6D6D6D"};
	background-color: ${ props => props.$isSelected ? "#82B0F4":"#FFFFFF"};
	padding-top: 6px;
	padding-right: 12px;
	padding-bottom: 4px;
	padding-left: 12px;
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