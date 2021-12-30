interface ILinks {
  [index: string] : {
    [index: string] : string
  }
}

export const LINKS : ILinks = {
  '사업단 소개' : {
    '인삿말' : '/introduce/greeting',
    '사업목표' : '/introduce/business_model',
    '조직구성' : '/introduce/organization',
    'contacts' : '/introduce/contact'
  },
  'SW 전공교육': {
    '캘린더' : '/major_education/calendar',
    '소개' : '/major_education/introduce',
    '오픈소스' : '/major_education/open_source',
    '마일리지' : '/major_education/mileage',
    '비교과' : '/major_education/non_discipline'
  }
}