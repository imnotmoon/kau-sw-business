export interface LoginResponse {
	data: { id: number; name: string };
	token: string;
}

export interface NoticeSummary {
	id: number;
	title: string;
	createdAt: Date;
}

export interface Notice {
	createdAt: Date;
	id: number;
	pinFlag: number;
	title: string;
	viewCount: number;
	writer: string;
}

export interface NoticeDetail {
	id: number;
	title: "notice" | "news";
	category: string;
	files: File[];
	content: string;
	createdAt: Date;
	updatedAt: Date;
	writer: string;
	viewCount: number;
	pinFlag: boolean;
}

export interface NoticeDetailResponse {
	data: NoticeDetail;
}

export interface NoticeResponse {
	data: Array<Notice>;
}

export interface BannerResponse {
	data: Array<Banner>;
}

export interface Banner {
	id?: number;
	imageUrl: string;
	title: string;
	content: string;
	viewOrder?: number;
	useFlag?: boolean;
	createdAt?: Date;
}

export interface BannerPostResponse {
	bannerId: number;
	success: boolean;
}

export interface getSchedulesParam {
	startDate?: string;
	endDate?: string;
	category?: string;
	order?: string;
}

export interface getSchedulesResponse {
	data: Array<Schedule>;
}

export interface Schedule {
	id: number;
	category: string;
	startDate: string;
	endDate: string;
	link: string;
	title: string;
}

export interface Account {
	id?: number | string;
	userId: string;
	password: string;
	name: string;
}

export interface AccountResponse {
	data: Array<Account>
}
