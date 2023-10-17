import styled from "styled-components";
import SearchBar from "@/component/SearchBar";
import Article from "@/component/ui/Article";
import { scrapStore } from "@/model/store";
import { Tarticle } from "@/types/type";
import Union from "@/assets/svg/Union.svg"

function ScrapScreen(){
	const scrapList = scrapStore(state=>state.scrapList);

	return (
		<>
			<SearchBar/>
			{ scrapList.length !== 0 ?
				<ArticleList>
					{ scrapList.map( (el: Tarticle, index: number) => {
						return <Article key={index} article={el}/>
					})}
				</ArticleList>:
				<NoScrapBox>
					<Wrapper>
						<IconBox>
							<Icon>
								<img src={Union}/>
							</Icon>
							<Text>
								저장된 스크랩이 없습니다.
							</Text>
						</IconBox>
						<Btn>
							스크랩 하러가기
						</Btn>
					</Wrapper>
				</NoScrapBox>
			}
		</>
	)
}
export default ScrapScreen;

const ArticleList = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 20px;
	padding-right: 20px;
	padding-left: 20px;
	gap: 8px;
`;

const NoScrapBox = styled.div`
	width: 100%;
	height: calc(100% - 85px);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const IconBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;

const Icon = styled.div`
	width: 36px;
	height: 36px;
	padding-left: 4.5px;
	padding-right: 4.5px;
`;

const Text = styled.span`
	width: 174px;
	height: 28px;
	font-size: 18px;
	font-weight: 600;
	line-height: 28px;
	letter-spacing: -0.05em;
	color: #6D6D6D;
`;

const Btn = styled.button`
	width: 295px;
	height: 60px;
	top: 92px;
	border-radius: 16px;
	border: none;
	background-color: #3478F6;
	color: #FFFFFF;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: -0.05em;
`;