import { useEffect, useState } from "react";
import axios from "axios";
import "../app.css";

export default function Dashboard() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://projeto-fullstack-5nsm.onrender.com/dados");
        setDados(res.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {dados.length === 0 ? (
        <p>Nenhum dado disponível.</p>
      ) : (
        <table>
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
            {dados.map((item, idx) => (
              <tr key={idx}>
                <td>{item.timestamp}</td>
                <td>{item.nome}</td>
                <td>{item.idade}</td>
                <td>{item.cidade}</td>
                <td>{item.genero}</td>
                <td>{item.sono}</td>
                <td>{item.atividade}</td>
                <td>{item.bebida}</td>
                <td>{item.app}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
