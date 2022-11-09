import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useImmer } from "use-immer";
const NamedContext = createContext({});

export default function TApp() {
  console.log(
    "%c TAppContainer start render",
    "background: #153462; color: #F6F6C9"
  );
  const [serverData, setServerData] = useImmer([
    // {
    //   name: "name",
    //   age: 0,
    // },
  ]);
  const [loading, setLoading] = useImmer(false);
  console.log(
    `%c serverData state init ${serverData}`,
    "background: #222; color: #bada55"
  );
  useEffect(() => {
    console.log(
      "%c fetch started in useEffect TApp",
      "background: #222; color: #FF97C1"
    );
    const fetch = () => {
      const fetchedData = [
        {
          name: "mmd",
          age: 22,
        },
        {
          name: "ali",
          age: 21,
        },
      ];
      try {
        setLoading(true);
        setServerData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetch();
    console.log(
      "%c fetch ended in useEffect TApp",
      "background: #222; color: #FF97C1"
    );
  }, []);

  console.log("%c start outputing TApp", "background: #153462; color: #F6F6C9");
  const outPut = (
    <>
      <NamedContext.Provider
        value={{ serverData, setServerData, loading, setLoading }}
      >
        <div
          style={{
            width: "1000px",
            border: "1px solid black",
            marginBottom: "2rem",
          }}
        >
          <h1
            style={{
              marginBottom: "2rem",
            }}
          >
            TAppContainer
          </h1>
          <Child2 />
        </div>
      </NamedContext.Provider>
    </>
  );

  console.log("%c render end TApp", "background: #153462; color: #F6F6C9");
  return outPut;
}

const Child1 = () => {
  return (
    <>
      <div
        style={{
          width: "500px",
          border: "1px solid black",
          marginBottom: "2rem",
        }}
      >
        <h1
          style={{
            marginBottom: "2rem",
          }}
        >
          child1AppContainer
          <Child2 />
        </h1>
      </div>
    </>
  );
};
const Child2 = () => {
  console.log(
    "%c child2AppContainer start render",
    "background: #153462; color: #F6F6C9"
  );
  const { serverData, loading, setLoading } = useContext(NamedContext);
  console.log(
    `%c child2 useContext(NamedContext) ${serverData} init`,
    "background: #222; color: #bada55"
  );
  const [user, setUser] = useImmer({
    name: "",
    age: 0,
  });
  console.log(
    `%c child2 name state init ${user}`,
    "background: #222; color: #bada55"
  );
  useEffect(() => {
    console.log("%c child2 effect start", "background: #222; color: #FF97C1");
    const Filter = async () => {
      console.log(
        `%c read serverData in useEffect Child2`,
        "background: #222; color: #bada55"
      );
      console.log(serverData);
      try {
        setLoading(true);

        const findName = serverData.find((f) => {
          return f.name === "mmd";
        });
        console.log(findName);
        setUser((draft) => {
          return findName;
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    Filter();
    console.log("%c child2 effect end", "background: #222; color: #FF97C1");
  }, [serverData.length > 0]);
  console.log(
    "%c start outputing Child2",
    "background: #153462; color: #F6F6C9"
  );
  const out = (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div
          style={{
            width: "300px",
            border: "1px solid black",
            marginBottom: "2rem",
          }}
        >
          <h1>child2AppContainer</h1>
          <h2
            style={{
              color: "red",
            }}
          >
            {user.name}
          </h2>
        </div>
      )}
    </>
  );
  console.log("%c outputing Child2 end", "background: #153462; color: #F6F6C9");
  return out;
};
