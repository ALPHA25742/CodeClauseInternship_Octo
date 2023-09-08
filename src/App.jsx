import Dashboard from "./components/Dashboard";
import { ListsProvider } from "./contexts/ListsProvider";

export default function App() {
  return (
    <>
      <ListsProvider>
        <Dashboard />
      </ListsProvider>
    </>
  );
}
