import {col, css, row} from "../utils";

class Block {
    constructor( value, options = {}) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Метод toHTML Должен быть реализован!')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {

        const {tag = 'h1', styles =''} = this.options
        return row(col(`<${tag}>${this.value}<${tag}>`), css(styles));
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {

        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const html = this.value.map(col).join('')
        return row(html)
    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {

        return row(`<img src="${this.value}" alt="" style="width: 286px">`)
    }
}
