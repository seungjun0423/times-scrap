import styled from "styled-components";

function Error() {

  return (
    <Div>
			network error...
    </Div>
  )
}

export default Error;

const Div = styled.div`
	width: 100%;
	height: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 50px;
	padding-right: 50px;
	padding-bottom: 30%;
	font-size: 30px;
	font-weight: bold;
	color: #FFFFFF;
	background-color: gray; 
	white-space: normal
`;