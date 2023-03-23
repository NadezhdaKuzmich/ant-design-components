import defaultTabs from "./defaultTabs";
import { Divider, Button, Tabs, Tag, Tooltip } from "antd";
import { useRef, useState, useEffect } from "react";

const TabsComponent = () => {
  const [activeKey, setActiveKey] = useState(defaultTabs[0].key);
  const [items, setItems] = useState(defaultTabs);
  const newTabIndex = useRef(0);
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`https://dummyjson.com/posts`)
        .then((response) => response.json())
        .catch((error) => console.log(error));
      setPosts(response);
    };
    getPosts();
  }, []);

  const onChange = (key) => {
    setActiveKey(key);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const data = posts.posts[newTabIndex.current - 1];

    if (data) {
      setItems([
        ...items,
        {
          label: data.title,
          children: (
            <div
              style={{
                width: "1100px",
                fontSize: "16px",
                margin: "0 auto",
                textAlign: "justify",
              }}
            >
              <Divider orientation="left" style={{ fontSize: "24px" }}>
                {data.title.toUpperCase()}
              </Divider>
              <p>{data.body}</p>
              {data.tags.map((tag) => (
                <Tag color="geekblue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </div>
          ),
          key: newActiveKey,
        },
      ]);
      setActiveKey(newActiveKey);
    }
  };

  const remove = (tabKey) => {
    const keyIndex = items.findIndex((tab) => tab.key === tabKey);
    const newTabs = items.filter((tab) => tab.key !== tabKey);
    if (newTabs.length && tabKey === activeKey) {
      const { key } =
        newTabs[keyIndex === newTabs.length ? keyIndex - 1 : keyIndex];
      setActiveKey(key);
    }
    setItems(newTabs);
  };

  const onEdit = (tabKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(tabKey);
    }
  };

  return (
    <div style={{ padding: "20px 0" }}>
      <div
        style={{
          marginBottom: 15,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Tooltip
          placement="rightTop"
          title="Додає динамічні вкладинки"
          color="blue"
        >
          <Button type="primary" ghost onClick={add}>
            Додати вкладку
          </Button>
        </Tooltip>
      </div>
      <Tabs
        hideAdd
        size="large"
        tabBarGutter="4px"
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={items}
      />
    </div>
  );
};

export default TabsComponent;