function Footer() {
    return (
        <footer className="page-footer teal darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()}
                    &nbsp;Mish4Nya
                    <a className="grey-text text-lighten-2 right" href="https://github.com/Mish4Nya">
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
