export interface SubObj {
  id: number,
  // relationType: string,
  relationType: 'or' | 'and', // 相对于 直接设置成 string 类型， 联合类型 可以限定只能是 or and 这俩字符串
  leftValue: string,
  leftLabel: string,
  rightValue: string,
  rightLabel: string,
}