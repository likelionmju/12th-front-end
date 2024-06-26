import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goHome = () => {
        navigate("/");
    }

    return (
        <div>
            <header style={{background: 'lightgray', padding: 16, ontSize: 24}}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goHome}>첫 화면으로</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout