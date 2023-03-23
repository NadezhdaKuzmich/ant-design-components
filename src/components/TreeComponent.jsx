import { Tree } from "antd";
const { DirectoryTree } = Tree;

const treeData = [
  {
    title: "Папка 1",
    key: "0-0",
    children: [
      {
        title: "Файл 1",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "Файл 2",
        key: "0-0-1",
        isLeaf: true,
      },
    ],
  },
  {
    title: "Папка 2",
    key: "0-1",
    children: [
      {
        title: "Файл 1",
        key: "0-1-0",
        isLeaf: true,
      },
      {
        title: "Файл 2",
        key: "0-1-1",
        isLeaf: true,
      },
      {
        title: "Файл 3",
        key: "0-1-2",
        isLeaf: true,
      },
    ],
  },
];
const TreeComponent = () => {
  return (
    <DirectoryTree multiple defaultExpandAll treeData={treeData} />
  );
};

export default TreeComponent;