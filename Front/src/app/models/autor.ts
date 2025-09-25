export interface Autor {
    id: number;
    nome: string;
    sobrenome?: string | null;
    data_nascimento?: string | null;
    nation?: string;
    biografia?: string | null;
}