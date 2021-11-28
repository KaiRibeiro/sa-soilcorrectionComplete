# Projeto Soil Correction

## Arquitetura 2-tier

Devido a elaboração da GUI do projeto ser feita com um framework Web(Angular), foi optado em utilizar uma arquitetura cliente/servidor 2-tier. Fazendo a conexão da GUI Angular com uma API utilizando o framework Spring Boot, pois toda a lógica inicial foi feita utilizando Java.
As controllers existentes na API esperam por certas requisições HTTP de cada funcionalidade existentes no client e retornam uma resposta JSON.


## Detalhamento e Instruções

Cada projeto está mais detalhado nas suas respectivas pastas.
Para instruções de como rodar cada projeto verificar README na pasta soil-correction(GUI) e soilcorrectionrest(API).
