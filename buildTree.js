// 入参格式参考：
const arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 }
];
// 出参格式可自行设计, 举例：
{
  id: 1,
  name: 'i1',
  children: [
    {
      id: 2,
      name: 'i2',
      children: []
    }
  ]
}

function buildTree(arr) {
  /**
   * 此处写代码逻辑
   */
  
}