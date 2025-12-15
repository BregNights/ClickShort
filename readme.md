## Regras de Negócio

1- [X] Cada URL original deve gerar um código curto único.

2- [X] O link encurtado deve redirecionar para a URL original.

3- [X] URLs inválidas não podem ser encurtadas (O sistema precisa validar se a URL informada é válida, formato e protocolo http/https).

4- [X] O link expira depois de algum tempo.

## Requisitos do Sistema

### Criar link encurtado

Recebe URL original.

Gera código curto.

Salva no banco.

Retorna link encurtado final.

### Redirecionar a partir do código

Recebe /:codigo.

Busca a URL original.

Atualiza estatísticas.

Redireciona.

### Validar URL informada

Não permite salvar URLs mal-formadas.

### Registrar estatísticas de acesso

Contador total.

### Consultar métricas detalhadas

Número total de cliques.

### Deletar link encurtado

Remove o link após um período de tempo.

## Requisitos Não Funcionais

### Alta disponibilidade

Redirecionamento deve ser rápido (ideal < 50ms).

### Código curto amigável

Deve ter entre 5 e 10 caracteres.

### RNF03 — Persistência

Banco deve garantir consulta rápida.

### Escalabilidade

Redirecionamento deve suportar alto volume de requisições simultâneas.
