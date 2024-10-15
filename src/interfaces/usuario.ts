export interface Usuario {
    id: number | null
    nome: string | null,
    email: string | null,
    senha: string | null,
    cpf: string | null
    dataNascimento: string | null
    ativo: boolean | null
}