import "./App.css";
import Card from "./components/Card";

function App() {
  const users = [
    {
      user: "Ranjit Dey",
      des: "Ranjit is a computer science student",
      btn: "Visit Bio",
    },
    {
      user: "Aritra Ghosh",
      des: "Aritra is a computer science student",
      btn: "Visit Portfolio",
    },
    {
      user: "Panoti Biswas",
      des: "Panoti is a panoti science student",
      btn: "",
    },
  ];
  return (
    <>
      <h1 className="text-blue-500 bg-slate-200 p-5 rounded-3xl text-center">
        Tailwind Props
      </h1>

      {/* <Card userName={users[0].user} description={users[0].des} btnText={users[0].btn} />
      <Card userName={users[1].user} description={users[1].des} btnText={users[1].btn} />
      <Card userName={users[2].user} description={users[2].des}  /> */}

      {users.map((u, i) => (
        <Card key={i} userName={u.user} description={u.des} btnText={u.btn} />
      ))}
    </>
  );
}

export default App;
