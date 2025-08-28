import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/dados.json");
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  if (!data.length) return <p>Nenhum dado disponível.</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
            <th>Gênero</th>
            <th>Sono</th>
            <th>Atividade</th>
            <th>Bebida</th>
            <th>App</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.timestamp}</td>
              <td>{row.nome}</td>
              <td>{row.idade}</td>
              <td>{row.cidade}</td>
              <td>{row.genero}</td>
              <td>{row.sono}</td>
              <td>{row.atividade}</td>
              <td>{row.bebida}</td>
              <td>{row.app}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
