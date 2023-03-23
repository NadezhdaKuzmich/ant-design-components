import { Table, Divider } from "antd";

const columns = [
  {
    title: "Властивість",
    dataIndex: "props",
    key: "props",
  },
  {
    title: "Пояснення",
    dataIndex: "explanation",
    key: "explanation",
  },
];

const dataSource = [
  {
    key: "1",
    props: "bordered",
    explanation: "Використовується, щоб вказати, чи показувати всі рамки таблиці чи ні.",
  },
  {
    key: "2",
    props: "columns",
    explanation: "Використовується для позначення всіх стовпців таблиці.",
  },
  {
    key: "3",
    props: "dataSource",
    explanation: "Використовується для позначення масиву записів даних, який буде відображено.",
  },
  {
    key: "4",
    props: "pagination",
    explanation: "Використовується для конфігурації сторінки.",
  },
  {
    key: "5",
    props: "scroll",
    explanation: "Used to indicate whether the table can be scrollable or not.",
  },
  {
    key: "6",
    props: "sortDirection",
    explanation: "Використовується для вказівки, чи можна прокручувати таблицю чи ні.",
  },
  {
    key: "7",
    props: "sticky",
    explanation: "Використовується для встановлення закріпленого заголовка та смуги прокручування.",
  },
  {
    key: "8",
    props: "title",
    explanation: "Використовується для позначення рендерера заголовка таблиці.",
  },
];

const TableComponent = () => {
  return (
    <div style={{ width: "100%"}}>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        title={() => <Divider orientation="left" style={{ fontSize: "18px", margin: "0" }}>Властивості таблиці:</Divider>}
        pagination={false}
      />
    </div>
  );
};

export default TableComponent;