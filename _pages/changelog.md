---
layout: page
title: Histórico de versões
include_in_header: true
lang: pt
translation_key: changelog
---

# Histórico de versões

_Lançamentos públicos do app._

## Versão 1.1.0

### Alterado
- Reformulamos o fluxo de **criação de caravanas** com uma experiência de formulário mais limpa e estruturada.
- Melhoramos a **seleção de rota e datas** na criação da caravana para um fluxo de configuração mais refinado.
- Atualizamos a tela de **cadastro de passageiros** com seções mais claras e menos atrito no preenchimento.
- Tornamos a criação de passageiros mais flexível, com melhor organização dos campos e menos exigência de informações quando apropriado.

### Melhorado
- Adicionamos uma **deduplicação de passageiros mais inteligente**, ajudando a evitar registros duplicados.
- Melhoramos a forma como os dados dos passageiros são mesclados quando informações novas e existentes se sobrepõem, preservando os dados de melhor qualidade.
- Aumentamos a confiabilidade de **imagens e miniaturas**, especialmente em cenários de indisponibilidade do iCloud.
- Reforçamos o comportamento de inicialização e manutenção em segundo plano para melhorar a estabilidade geral do app.
- Refinamos o tratamento localizado dos **textos de permissões** e a infraestrutura relacionada.

### Notas
- Incluímos melhorias internas adicionais de confiabilidade, migração e integridade de dados para dar suporte a uma experiência mais estável.

## Versão 1.0.0

### Adicionado
- Suporte global de localização usando Apple Maps
- Criação de caravanas com locais baseados em mapa (origem e destino)
- Gestão de passageiros
- Fluxo de check-in de passageiros
- Ferramenta de sorteio de passageiros
- Suporte offline para gestão de caravanas e passageiros
- Assinatura Ctrlavana Pro (teste gratuito de 7 dias)

### Alterado
- Substituição do sistema baseado em CEP do Brasil por seleção de local via mapa
- Ajuste do fluxo de criação de caravanas para suportar locais globais
- Atualização da interface de gestão de passageiros

### Notas
- Versões anteriores existiam como um projeto pessoal focado no Brasil
- A versão 1.0.0 marca o primeiro release sob a conta da empresa
