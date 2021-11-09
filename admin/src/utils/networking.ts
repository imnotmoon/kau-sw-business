import axios from "axios";
import { LoginResponse, NoticeSummaryResponse } from "../interfaces";

const BASE_URL = "http://15.164.68.133";
const HEADER = {
	headers: { "Content-Type": "application/json" },
};

const APIs = {
	login: (userId: string, password: string) => {
		const body = { userId, password };
		const result = axios.post<LoginResponse>(`${BASE_URL}/api/login`, body, HEADER).then((result) => result.data);
		return result;
	},

	getNoticeSummary: (category?: string, count?: number) => {
		let url = `${BASE_URL}/api/notice/summary`;
		if (category) url += `?category=${category}`;
		if (count && count > 0) url += `&count=${count}`;
		const result = axios.get<NoticeSummaryResponse>(url).then((result) => result.data);
		return result;
	},

	postNotice: (data: FormData) => {
		return axios.post(`${BASE_URL}/api/notice`, data, {
			headers: {
				'Content-Type' : 'multipart-formdata'
			}
		}).then(result => result.data);
	},

	deleteNotice: (idx: number) => {
		return axios.delete(`${BASE_URL}/api/notice/${idx}`).then((res) => res.data);
	}
};

export default APIs;
