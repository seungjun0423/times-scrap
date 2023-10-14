import styled from "styled-components";

function Modal(props : { modalState: boolean }) {
	const { modalState } = props;
  return (
		<>
		<ModalBox>
			{modalState}
			<SelectBox>
			</SelectBox>
    </ModalBox>
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

const SelectBox = styled.div`
	width: 335px;
	height: 480px;
	border-radius: 16px;
	background-color: #FFFFFF;
`;
