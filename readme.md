## Regras de Negócio
1- [] Cada URL original deve gerar um código curto único.
2- [] O link encurtado deve redirecionar para a URL original.
3- [] URLs inválidas não podem ser encurtadas (O sistema precisa validar se a URL informada é válida, formato e protocolo http/https).
4- [] O link expira depois de algum tempo.
5- [] Registro de acessos (Cada clique no link curto deve registrar data/hora do acesso).

## Requisitos do Sistema
#### Criar link encurtado
Recebe URL original.

Gera código curto.

Salva no banco.

Retorna link encurtado final.

#### Redirecionar a partir do código
Recebe /:codigo.

Busca a URL original.

Atualiza estatísticas.

Redireciona.

#### Validar URL informada
Não permite salvar URLs mal-formadas.

#### Registrar estatísticas de acesso
Data/hora.

Contador total.

#### Consultar métricas detalhadas
Acessos por data.

Número total de cliques.

#### Deletar link encurtado
Remove o link ou marca como inativo.

#### Expiração opcional
Se existir data de expiração, bloquear o link após o prazo.

## Requisitos Não Funcionais
#### Alta disponibilidade
Redirecionamento deve ser rápido (ideal < 50ms).

#### Código curto amigável
Deve ter entre 5 e 10 caracteres.

Pode ser numérico, alfanumérico ou base62.

## RNF03 — Persistência
Banco deve garantir consulta rápida.

## Segurança
Proteger API de criação com autenticação (JWT).

## Escalabilidade
Redirecionamento deve suportar alto volume de requisições simultâneas.