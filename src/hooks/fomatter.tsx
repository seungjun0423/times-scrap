import moment from "moment-timezone";

/** 서비스에서 보여지는 날짜 포맷터(YYYY.MM.DD) */
const serviceFormat = ( input: string) => {
	return moment(input).tz("Asia/Seoul").format("YYYY.MM.DD");
};

/** api를 이용하기 위한 포맷터 (YYYY-MM-DD)*/
const apiFormat = ( input: string | Date) => {
	return moment(input).tz("Asia/Seoul").format("YYYY-MM-DD");
};

export { serviceFormat, apiFormat, };


