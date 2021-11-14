import axios from "axios";
import { BannerSummaryResponse, LoginResponse, NoticeDetailResponse, NoticeSummaryResponse } from "../interfaces";

const BASE_URL = "http://15.164.68.133";
const HEADER = {
	headers: { "Content-Type": "application/json" },
	withCredentials: true ,
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
			},
			withCredentials: true,
		}).then(res => res.data);
	},

	getNoticeDetail: (id: number) => {
		return axios.get<NoticeDetailResponse>(`${BASE_URL}/api/notice/${id}`).then(res => res.data.data);
	},

	deleteNotice: (idx: number) => {
		return axios.delete(`${BASE_URL}/api/notice/${idx}`).then((res) => res.data);
	},

	editNotice: (data: FormData) => {
		for(const key of Object.keys(data)) {
			console.log(key, data.get(key))
		}
		return axios.put(`${BASE_URL}/api/notice`, data, {
			headers: {
				'Content-Type': 'multipart-formdata',
			},
			withCredentials: true,
		})
	},

	getBannerSummary: () => {
		return axios.get<BannerSummaryResponse>(`${BASE_URL}/api/banner/summary`).then((res) => res.data.data);
	},

	editBanner: () => {
	},

	deleteBanner: (idx: number) => {
		return axios.delete(`${BASE_URL}/api/banner/${idx}`).then((res) => res.data);
	},
};

export default APIs;
