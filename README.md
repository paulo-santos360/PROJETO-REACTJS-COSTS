# PROJETO-REACT-COSTS
 React JS

# npx create-react-app Costs
 Criar o Projeto

# npm install jason-server
 Criar o Back-End

# react-icons
 Biblioteca de

# react-router-dom
 npm install react-router-dom@latest essa é a atual

# uuid

# Google Fonts

# npm install react-router-dom@latest


# "jason-server": "^3.0.0", // vai criar um arquivo no src db.json para funciona essa extensão
   Para Consumir a extensão

# npm start npm back-end 
  vai colocar esse arquivo na pasta package.json depois de   
  "scripts": 
  "start": "react-scripts start", 
  "backend": "json-server --watch db.json --port 5000", vai executar esse arquivo

  Solução que usei.
Vai ate o package.json
coloque esse codigo.
"overrides": {
    "graceful-fs": "^4.2.10"
  }

depois dei um npm install -g json-server
Depois um npm audit fix --force
No final um npm run backend