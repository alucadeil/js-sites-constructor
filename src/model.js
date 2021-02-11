import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from './classes/blocks'


export const model = [
    new TitleBlock('Pure JavaScript site constructor', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock('Some text'),
    new ColumnsBlock([
        '11111111',
        '22222222',
        '33333333'
    ]),
    new ImageBlock('http://placehold.it/286x150')
]
