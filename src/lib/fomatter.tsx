import moment from "moment-timezone";

/** 서비스에서 보여지는 날짜 포맷터 (YYYY.MM.DD) */
const serviceFormat = ( input: string ) => {
	return moment(input).tz("Asia/Seoul").format("YYYY.MM.DD");
};

// /** api를 이용하기 위한 포맷터 (YYYY-MM-DD)*/
const apiFormat = ( input: string | Date) => {
	return moment(input).tz("Asia/Seoul").format("YYYY-MM-DD");
};

const subtractDate = ( input: string | Date ) => {
	return moment(input).subtract(1, 'd').tz("Asia/Seoul").format("YYYY-MM-DD");
};

const getMonthDate = () => {
	const today = apiFormat(new Date());

	const weekDate = [];
	for(let i=0; i<30; i++){
		const date = moment(today).add(-i,"days").format("YYYY-MM-DD");
		weekDate.push(date);
	}
	return weekDate;
}

export { serviceFormat, apiFormat, subtractDate, getMonthDate };


