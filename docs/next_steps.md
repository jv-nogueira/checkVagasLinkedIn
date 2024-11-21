# Próximas Etapas

Abaixo estão as próximas etapas para continuar o desenvolvimento do projeto.

1. **~~Mapear o último index da lista~~**  
   - ~~Garantir que o loop tenha um limite claro ao mapear o último índice da lista. Isso evita que o código continue rode até dar erro.~~

2. **~~Mapear o elemento que contém o salário~~** 
   - ~~Identificar e isolar o elemento da lista que contém o valor do salário para ser utilizado em operações futuras.~~

3. **~~Abrir o elemento com salário~~**  
   - ~~Utilizar `window.open()` para abrir o link ou ação correspondente ao elemento que contém o salário.~~

4. **~~Entender o funcionamento para clicar na próxima lista~~**  
   - ~~Analisar e implementar a lógica necessária para passar de um item da lista para o próximo de forma automatizada, após realizar a ação no item atual.~~

5. **~~Implementa pesquisa na descrição de cada vaga~~**
   - ~~Abrir a vaga que corresponder a palavra-chave.~~

6. **~~Analisa se há necessidade de mensurar as vagas abertas~~**
   - ~~Mensurar em qual página foi aberta, o salário, cargo, a fim de buscar melhorias.~~

7. **Implementa remoção das vagas pelo título**
   - Clicar em remover na vaga que for de estágio ou exclusiva

8. **~~Cria prompt de opções~~**
   - ~~Opção de parar assim que encontrar a vaga, colocar segundos entre cada vaga.~~

9. **Implementa operadores na palavra-chave**
   - Operadores AND e OR ao fazer a procura

10. **Verifica se já está salva no LinkedIn**
   - Se a vaga já está salva, então ignora

11. **Começa de onde está selecionado**
   - Evita que o index comece do zero

12. **~~Salva as vagas em CSV~~**
   - ~~Título, empresa e link~~

13. **~~Botão para stop~~**

14. **Verifica se a vaga está salva na planilha**
   - Caso afirmativo, então pula para a próxima vaga

15. **Salva outras informações em CSV**
   - Exemplo: o que foi escrito na pesquisa da vaga no LinkedIn, quais foram as palavras-chave pesquisadas, salário (caso houver), ~~número de resultados na pesquisa da vaga~~, data atual, ~~data de anúncio da vaga~~, localidade utilizada na pesquisa, classificação utilizada (relevantes ou recentes), ~~se a vaga é de candidatura simplificada~~, competências solicitas na descrição da vaga e modalidade (presencial, híbrido ou remoto)

16. **Pesquisa a palavra-chave no título da vaga**

18. **Inclui na planilha as vagas sem descrição e título**
   - Verifica na descrição se contêm "Sobre a vaga"

19. **Verifica mais de uma descrição**
   - Cria laço de repetição ou if else para verificar se a descrição contêm "Sobre a vaga"