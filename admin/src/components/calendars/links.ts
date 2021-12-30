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
  },
  '산학협력': {
    '캘린더' : '/collab_industry/calendar',
    '소개' : '/collab_industry/introduce',
    '산학프로젝트': '/collab_industry/project',
    '인턴십' : '/collab_industry/internship',
    '글로벌' : '/collab_industry/global'
  },
  'SW기초·융합교육': {
    '캘린더' : '/basic_education/calendar',
    '소개' : '/basic_education/introduce',
    '입학전 교육': '/basic_education/before_entrance',
    '기초교양교육': '/basic_education/electives',
    '융합전공' : '/basic_education/additive_major'
  },
  'SW가치확산': {
    '캘린더' : '/influences/calendar',
    '소개' : '/influences/introduce',
    '초중고' : '/influences/juniors',
    'SW행사(교내)' : '/influences/events'
  }
}