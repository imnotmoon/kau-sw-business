import axios from "axios";
import { ICalendarForm } from "../hooks/useCalendarInput";
import {
	Account,
	AccountResponse,
	BannerPostResponse,
	BannerResponse,
	getSchedulesParam,
	getSchedulesResponse,
	LoginResponse,
	NoticeDetailResponse,
	NoticeResponse,
	Schedule,
} from "../interfaces";

const BASE_URL = "";
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

	getAllNotice: (category?: string, count?: number) => {
		let url = `${BASE_URL}/api/notice`;
		if (category) url += `?category=${category}`;
		if (count && count > 0) url += `&count=${count}`;
		const result = axios.get<NoticeResponse>(url).then((result) => result.data);
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

	//* Banners
	getBannerSummary: () => {
		return axios.get<BannerResponse>(`${BASE_URL}/api/banner`).then((res) => res.data.data);
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

	editBanner: (data: FormData) => {
		return axios.put(`${BASE_URL}/api/banner`, data, {
			headers: {
				"Content-Type" : "multipart-formdata",
			},
			withCredentials: true,
		})
	},

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

	deleteSchedule : (id: number) => {
		return axios.delete(`${BASE_URL}/api/schedule/${id}`).then((res) => res.data);
	},

	//* Accounts
	getAllAccounts : () => {
		return axios.get<AccountResponse>(`${BASE_URL}/api/admin`).then((res) => res.data);	
	},

	getAdminDetail : (id: number) => {
		return axios.get(`${BASE_URL}/api/admin/${id}`).then((res) => res.data);
	},

	postNewAccount : (account: Account) => {
		return axios.post(`${BASE_URL}/api/admin`, account, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((res) => res.data);
	},

	putAccount : (account: Account) => {
		return axios.put(`${BASE_URL}/api/admin`, account, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((res) => res.data);
	},

	deleteAccount : (id: number) => {
		return axios.delete(`${BASE_URL}/api/admin/${id}`).then((res) => res.data);
	}
};

export default APIs;
