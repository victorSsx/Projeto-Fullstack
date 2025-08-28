import { useState } from "react";
import axios from "axios";
import "../app.css";

export default function Form() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    cidade: "",
    genero: "",
    sono: "",
    atividade: "",
    bebida: "",
    app: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/enviar", form);
      alert("Dados enviados com sucesso!");
      setForm({
        nome: "",
        idade: "",
        cidade: "",
        genero: "",
        sono: "",
        atividade: "",
        bebida: "",
        app: "",
      });
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar dados");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Questionário Big Data</h2>

      <input placeholder="Nome" name="nome" value={form.nome} onChange={handleChange} required />
      <input placeholder="Idade" type="number" name="idade" value={form.idade} onChange={handleChange} required />
      <input placeholder="Cidade/Estado" name="cidade" value={form.cidade} onChange={handleChange} required />

      <select name="genero" value={form.genero} onChange={handleChange} required>
        <option value="">Gênero</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Prefiro não informar">Prefiro não informar</option>
      </select>

      <select name="sono" value={form.sono} onChange={handleChange} required>
        <option value="">Horas de sono</option>
        <option value="Menos de 5h">Menos de 5h</option>
        <option value="5h a 7h">5h a 7h</option>
        <option value="7h a 9h">7h a 9h</option>
        <option value="Mais de 9h">Mais de 9h</option>
      </select>

      <select name="atividade" value={form.atividade} onChange={handleChange} required>
        <option value="">Atividade física</option>
        <option value="Nunca">Nunca</option>
        <option value="1 a 2 vezes">1 a 2 vezes</option>
        <option value="3 a 5 vezes">3 a 5 vezes</option>
        <option value="Todos os dias">Todos os dias</option>
      </select>

      <select name="bebida" value={form.bebida} onChange={handleChange} required>
        <option value="">Bebida mais consumida</option>
        <option value="Água">Água</option>
        <option value="Café">Café</option>
        <option value="Refrigerante">Refrigerante</option>
        <option value="Suco">Suco</option>
        <option value="Energético">Energético</option>
      </select>

      <select name="app" value={form.app} onChange={handleChange} required>
        <option value="">App mais usado</option>
        <option value="WhatsApp">WhatsApp</option>
        <option value="Instagram">Instagram</option>
        <option value="TikTok">TikTok</option>
        <option value="YouTube">YouTube</option>
        <option value="Outro">Outro</option>
      </select>

      <button type="submit">Enviar</button>
    </form>
  );
}
