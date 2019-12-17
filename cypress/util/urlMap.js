const urlPath = [
    {
        pageName: "Tela Inicial",
        path: "",
        pageTitle: "Funancial - Economy for Kids"
    },{
        pageName: "Login",
        path: "login",
        pageTitle: "Funancial - Login"
    },{
        pageName: "Cadastro",
        path: "cadastro",
        pageTitle: "Funancial - Cadastro"
    },{
        pageName: "Cadastro bem sucedido",
        path: "cadastro-sucesso",
        pageTitle: "Funancial - Cadastro bem sucedido"
    },{
        pageName: "Jogo",
        path: "jogo",
        pageTitle: "Funancial - Economy for Kids"
    }
]

export const getPath = pageNameParam => urlPath.filter(obj => obj.pageName === pageNameParam)[0].path;
export const getPageTitle = pageNameParam => urlPath.filter(obj => obj.pageName === pageNameParam)[0].pageTitle;