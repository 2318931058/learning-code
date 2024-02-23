// 1. 新建type文件夹，在type文件夹下新建ts文件，书写ts代码
export interface PersonInfoTs {
  name:string,
  age:number,
  isTrue:boolean
}

export type PersonInfoList = PersonInfoTs[]