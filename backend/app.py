from flask import Flask, request, jsonify
from flask_cors import CORS
from pathlib import Path
from datetime import datetime
import csv
import pandas as pd

app = Flask(__name__)
CORS(app)  # permite requisições do React

CSV_FILE = Path("respostas.csv")

# Cabeçalhos do CSV
FIELDNAMES = [
    "timestamp",
    "nome",
    "idade",
    "cidade",
    "genero",
    "sono",
    "atividade",
    "bebida",
    "app",
]

# ---------- ROTAS ----------

@app.route("/enviar", methods=["POST"])
def enviar():
    """Recebe dados do React e salva no CSV"""
    data = request.json

    registro = {"timestamp": datetime.now().isoformat(timespec="seconds"), **data}

    arquivo_existe = CSV_FILE.exists()
    with CSV_FILE.open("a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        if not arquivo_existe:
            writer.writeheader()
        writer.writerow(registro)

    return jsonify({"status": "ok"}), 200

@app.route("/dados.json", methods=["GET"])
def dados():
    """Retorna todos os dados como JSON para o dashboard"""
    if not CSV_FILE.exists():
        return jsonify([])

    df = pd.read_csv(CSV_FILE)
    return df.to_json(orient="records", force_ascii=False)

# ---------- INICIALIZAÇÃO ----------

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
