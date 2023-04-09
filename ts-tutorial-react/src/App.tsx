import {useEffect, useState} from "react";
import axios from "axios";
const {VITE_NOTION_KEY, VITE_NOTION_DATABASE_ID} = import.meta.env;

async function NotionAPI() {
  try {
    const {data} = await axios.post(
      "https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/databases/" +
        VITE_NOTION_DATABASE_ID +
        "/query",
      {
        page_size: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${VITE_NOTION_KEY}`,
          "Notion-Version": "2022-06-28",
        },
      }
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const {results} = await NotionAPI();
      setData(results);
    })();
  }, []);

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.properties["이름"].title[0].plain_text}</p>
            <p>{item.properties["태그"].multi_select[0].name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
