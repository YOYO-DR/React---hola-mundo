import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list=["Goku","Tanjiro","Eren"]
  return (
    <Card>
      <CardBody title="Titulo card" text="Cuerpo de tarjeta" />
      <List data={ list} />
    </Card>
  );
}

export default App;
