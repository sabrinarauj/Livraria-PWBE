export interface Livro {
    id: number;
    titulo: string;
    subtitulo?: string | null;
    autor?: string | null;
    editora?: string | null;
    isbn: string;
    descricao: string;
    idioma?: string | null;
    paginas: number;
    ano: number;
    preco: number;
    estoque: number;
    desconto: number;
    disponivel: boolean;
    dimensoes: string,
    peso: number;
}