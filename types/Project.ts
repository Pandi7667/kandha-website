// Project.ts

export interface LocalPortableTextBlock {
    _key: string;
    _type: 'block';
    children: {
        _key: string;
        _type: 'span';
        marks: string[];
        text: string;
    }[];
    markDefs?: any[];
    style: 'normal';
}

import { PortableTextBlock as SanityPortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: LocalPortableTextBlock[];
}
