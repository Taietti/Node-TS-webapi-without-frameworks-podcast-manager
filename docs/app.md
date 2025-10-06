# NOME DO APLICATIVO: Podcast Manager

### DOMINIO: Podcast feitos em video

### Descrição: Um app estilo netflix, aonde possa centralizar diferentes episodios podcast separados por categoria

### Features:
- Listar podcast em sessoes de categoria
    - [Saúde, fitness, mentalidade, humor]
- filtrar episodios por nome de podcast

## Como:

#### Feature:
Listar episódio podcasts em sessões de categorias
### Como vou implementar:
 Vou retornar em uma api rest (json)o nome do podcast,imagem, nome do episódio, link, categoria
```js
[
{
    podcastname: "flow",
    episode: "Cbum - Flow #319",
    videoId: "pQSuQmUfS30"
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30"
    category: ["saúde", "esporte", "bodybuilder"]
},
{
    podcastname: "flow",
    episode: "Rubens Barrichelo - Flow #339",
    videoId: "4KDGTdiOV4I"
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I"
    category: ["esporte", "corrida"]
},
]
```

