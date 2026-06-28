# Podcast manager

### Descrição
Um app estilo netflix aonde eu possa centralizar diferentes episódios de podcasts separados por categorias

### Domínio
Podcasts feito em vídeos

### Features
 - Listar os podcasts em seções de categorias
   - [saúde, fitness, mentalidade, humor, cantores, lutadores, esportes, música]
  - Filtrar episódios por nome de podcast


## Como

#### Feature:
 - Listar os podcasts em seções de categorias

### Como vou implementar:
Return em uma api rest (json) o
nome do podcast, nome do episódio, imagem de capa e link

```js
[
    {
    podcastName: "Podpah",
    episodeName: "CARLOS PRATES - Podpah #1035",
    videoid: KDkEh4u6v80,
    cover: "https://i.ytimg.com/vi/KDkEh4u6v80/maxresdefault.jpg"
    link: "https://www.youtube.com/watch?v=KDkEh4u6v80",
    category: ["Esportes", "Luta"];
    };
    {
    podcastName: "Podpah",
    episodeName: "ALEE - Podpah #973",
    videoid: tvY0lSdj-jg,
    cover: "https://i.ytimg.com/vi/tvY0lSdj-jg/maxresdefault.jpg"
    link: "https://www.youtube.com/watch?v=tvY0lSdj-jg",
    category: ["Música", "Cantores"];
    },
]
```