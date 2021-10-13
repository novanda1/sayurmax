import { RootStateContextValue } from "@/stores/StoreProvider";
import Register from "src/ui/pages/auth/Register";

const RegisterPage: React.FC = () => {
    return <Register {...RootStateContextValue} />;
};

export default RegisterPage;
