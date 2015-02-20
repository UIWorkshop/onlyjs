module.exports = function(api) {
    var color = {
        green: '#59cfbb',
        white: '#f5f5f5',
        black: '#333333'
    };
    var size = {
        container: '1280px',
        header: '80px',
        nav: '120px',
        link: {
            width: '160px',
            height: '100px'
        }
    };
    var font = {
        title: '2em',
        nav: '1.3em',
        slogan: '3em',
        link: '1.1em'
    };

    var reset = {};
    var allElement = [
        'html', 'body', 'div', 'span', 'applet', 'object', 'iframe',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'pre',
        'a', 'abbr', 'acronym', 'address', 'big', 'cite', 'code',
        'del', 'dfn', 'em', 'img', 'ins', 'kbd', 'q', 's', 'samp',
        'small', 'strike', 'strong', 'sub', 'sup', 'tt', 'var',
        'b', 'u', 'i', 'center',
        'dl', 'dt', 'dd', 'ol', 'ul', 'li',
        'fieldset', 'form', 'label', 'legend',
        'table', 'caption', 'tbody', 'tfoot', 'thead', 'tr', 'th', 'td',
        'article', 'aside', 'canvas', 'details', 'embed',
        'figure', 'figcaption', 'footer', 'header', 'hgroup',
        'menu', 'nav', 'output', 'ruby', 'section', 'summary',
        'time', 'mark', 'audio', 'video'
    ];
    var blockElement = [
        'article', 'aside', 'details', 'figcaption', 'figure',
        'footer', 'header', 'hgroup', 'menu', 'nav', 'section'
    ];
    reset[allElement.join(',')] = {
    	margin: 0,
    	padding: 0,
    	border: 0,
    	fontSize: '100%',
    	font: 'inherit',
    	verticalAlign: 'baseline'
    };
    reset[blockElement.join(',')] = {
    	display: 'block'
    };
    reset.body = {
    	lineHeight: 1,
    };
    reset['ol, ul'] = {
    	listStyle: 'none'
    };
    reset['blockquote, q'] = {
    	quotes: 'none',
        '&:before, &:after': {
            content: 'none'
        }
    };
    reset.table = {
    	borderCollapse: 'collapse',
    	borderSpacing: 0
    };

    api.add(reset);

};
