import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
    slug: 'posts', // Customize slug if needed
    fields: [
      {
        type: 'text',
        name: 'title',
        required: true, // Optional: Make title required
      },
      {
        type: 'richText',
        name: 'content',
      },
    ],
  };

export default Posts