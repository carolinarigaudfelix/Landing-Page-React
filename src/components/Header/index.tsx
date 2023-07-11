import "./style.css"
export function Header(){
    return (
        <header>
            <div className="Logo">
                <span className="background-icon"><img className="Logo-Image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJNJREFUSEvdlNsOgDAIQ93/f7TGRRLEQiGRGOeb7nJKC46t+RnN92+fAvarOiYi3BcdbgdIPB4oJYCVf0LaAHJxttGg2EwGrwOschFR/T6FoQqqF3n7HwDP82oFYuk8pyuohsqyWRjgeZ6yxA4mysAC2LTbSb+9rwXwPNbti/IJLWT+6r+pnhsEhQIzANY94fr/AQdq9ikZ67RLUgAAAABJRU5ErkJggg==" title="Logo"/></span>
                <a href="#inicio">Abstract</a>
                <a href="#inicio">| Help Center</a>
            </div>
            <div className="Buttons">
                <button className="request">Submit a request</button>
                <button className="sign-in">Sign in</button>
            </div>
        </header>
    );
};

