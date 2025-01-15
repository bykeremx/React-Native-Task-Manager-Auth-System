import { AuthProvider } from "./components/Context/AuthProvider";
import {TaskProvider} from "./components/Context/TaskProvider";
import MyNavigation from "./components/Navigation/indexNavigation";

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <MyNavigation></MyNavigation>
      </TaskProvider>
    </AuthProvider>
  );
}
