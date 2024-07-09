// 1. Importa las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content';
import { PostSchema } from '../schemas/post';
// 2. Define tu colección(es)

const postCollection = defineCollection({
    type: 'content',
    schema: PostSchema
})
// 3. Exporta un único objeto `collections` para registrar tu(s) colección(es)
//    Esta clave debe coincidir con el nombre de tu directorio de colección en "src/content"
export const collections = {
    'posts': postCollection,
};