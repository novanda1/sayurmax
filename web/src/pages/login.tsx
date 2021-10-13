import { RootStateContextValue } from "@/stores/StoreProvider";
import Login from "src/ui/pages/auth/Login";

export const LoginPage: React.FC = () => {
    return <Login {...RootStateContextValue} />;
};

export default LoginPage;
