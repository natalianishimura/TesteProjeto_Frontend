Feature: Historia

Scenario: Exibição com sucesso
Given: Acessei "Tela Inicial"
When Clico no botão com texto "Jogar"
Then Sou redirecionado para "Jogo"

Scenario: Exibição sem sucesso
Given: Acessei "Tela Inicial"
When Clico no botão com texto "Jogar"
Then Mensagem de "erro" deve estar visível
