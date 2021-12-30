import axios from "axios";
import { ICalendarForm } from "../hooks/useCalendarInput";
import {
	BannerPostResponse,
	BannerSummaryResponse,
	getSchedulesParam,
	getSchedulesResponse,
	LoginResponse,
	NoticeDetailResponse,
	NoticeSummaryResponse,
	Schedule,
} from "../interfaces";

const BASE_URL = "https://aisw.kau.ac.kr";
const HEADER = {
	headers: { "Content-Type": "application/json" },
	withCredentials: true,
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
		return axios
			.post(`${BASE_URL}/api/notice`, data, {
				headers: {
					"Content-Type": "multipart-formdata",
				},
				withCredentials: true,
			})
			.then((res) => res.data);
	},

	getNoticeDetail: (id: number) => {
		return axios.get<NoticeDetailResponse>(`${BASE_URL}/api/notice/${id}`).then((res) => res.data.data);
	},

	deleteNotice: (idx: number) => {
		return axios.delete(`${BASE_URL}/api/notice/${idx}`).then((res) => res.data);
	},

	editNotice: (data: FormData) => {
		return axios
			.put(`${BASE_URL}/api/notice`, data, {
				headers: {
					"Content-Type": "multipart-formdata",
				},
				withCredentials: true,
			})
			.then((res) => res.data);
	},

	getBannerSummary: () => {
		return axios.get<BannerSummaryResponse>(`${BASE_URL}/api/banner/summary`).then((res) => res.data.data);
	},

	postBanner: (data: FormData) => {
		return axios
			.post<BannerPostResponse>(`${BASE_URL}/api/banner`, data, {
				headers: {
					"Content-Type": "multipart-formdata",
				},
				withCredentials: true,
			})
			.then((res) => res.data);
	},

	editBanner: () => {},

	deleteBanner: (idx: number) => {
		return axios.delete(`${BASE_URL}/api/banner/${idx}`).then((res) => res.data);
	},

	//* Schedules
	getSchedules: ({ startDate, endDate, order, category}: getSchedulesParam) => {
		let url = `${BASE_URL}/api/schedule?`
		if(startDate && startDate.length > 0) url += `&from=${startDate}`;
		if(endDate && endDate.length > 0) url += `&to=${endDate}`;
		if(category && category.length > 0) url += `&category=${category}`
		if(order && order.length > 0) url += `&order=${order}`

		return axios.get<getSchedulesResponse>(url).then((res) => res.data);
	},
	
	postSchedule: (data: ICalendarForm) => {
		return axios.post(`${BASE_URL}/api/schedule`, data, {
			headers: {
				"Content-Type": "application/json",
			}
		}).then((res) => res.data);
	},

	putSchedule: (data: Schedule) => {
		return axios.put(`${BASE_URL}/api/schedule`, data, {
			headers: {
				"Content-Type": "application/json",
			}
		}).then((res) => res.data);
	},


};

export default APIs;
