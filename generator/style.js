module.exports = function(api) {
    // variable
    var color = {
        green: '#59cfbb',
        white: '#f5f5f5',
        black: '#333333',
        gray: '#cccccc'
    };
    var size = {
        container: ['1280px'],
        header: '80px',
        nav: '120px',
        link: {
            width: '160px',
            height: '100px'
        },
        border: '1px',
        space: '120px',
        margin: '20px'
    };
    var font = {
        title: '2em',
        nav: '1.2em',
        slogan: '3em',
        link: '1.1em'
    };

    // mixin
    function bar (height, position) {
        var style = {
            display: 'block',
            position: 'absolute',
            zIndex: '100',
            height: height,
            width: '100%'
        };
        style[position] = 0;
        return style;
    }

    function timesPixel (pixel, times) {
        if (typeof pixel == 'string') {
            pixel = [pixel];
        }
        var sum = 0;
        pixel.forEach(function (val) {
            sum += parseFloat(val);
        });

        return sum*times + 'px';
    }

    function linkColor (color) {
        var LINK_SELECTOR = '&:link, &:active, &:visited';
        var style = {
            fontSize: font.nav,
            color: color,
            textDecoration: 'none'
        };
        style[LINK_SELECTOR] = {
            color: color
        };

        return style;
    }

    function opacity (hex, opacity) {
        var step = hex.length > 6 ? 2 : 1;
        var rgba = [];
        for (var i = 1; i <= 3; i++) {
            var char = hex.slice(i*step - 1, (i+1)*step - 1);
            rgba.push(parseInt(char, 16));
        }
        rgba.push(opacity);
        return 'rgba(' + rgba.join(',') + ')';
    }

    // reset
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

    var layout = {
        '.header': bar(size.header, 'top'),
        '.wrapper': {
            overflow: 'hidden',
            minHeight: '100%',
            section: {
                overflow: 'hidden'
            }
        },
        '.footer': bar(size.header, 'bottom'),

        '#logo': {
            width: size.header,
            height: size.header
        },
        '.navigator': {
            height: size.header,
            lineHeight: size.header,
            '.nav-left': {
                float: 'left'
            },
            '.nav-right': {
                float: 'right'
            },
            '.nav-section a': {
                display: 'inline-block',
                width: size.nav,
                height: '100%',
                textAlign: 'center'
            },
            span: {
                float: 'left',
                display: 'block',
                marginRight: size.margin
            }
        },
        '.hero': {
            minHeight: '80%',
            marginTop: size.header,
            backgroundColor: color.gray,
            h2: {
                textAlign: 'center',
                margin: size.space + ' 0'
            }
        },
        '.sidebar': {
            ul: {
                width: timesPixel([size.link.width, size.border], 6),
                height: size.link.height,
                margin: '0 auto',
                li: {
                    float: 'left',
                    borderRight: size.border + ' solid transparent',
                    a: {
                        display: 'inline-block',
                        width: size.link.width,
                        height: size.link.height,
                        lineHeight: size.link.height,
                        textAlign: 'center'
                    }
                }
            }
        },
        '.container': {
            overflow: 'hidden',
            width: size.container[0],
            margin: '0 auto'
        }
    };

    var sidebarLink = linkColor(color.black);
    sidebarLink.backgroundColor = opacity(color.white, 0.4);
    var logo = {
        overflow: 'hidden',
        backgroundColor: color.green,
        color: color.white,
        'i, b': {
            display: 'inline-block',
            position: 'relative'
        },
        i: {
            top: '-2px',
            left: '-19px',
            transform: 'rotate(-30deg)',
            fontSize: '2em',
            opacity: 0.3
        },
        b: {
            top: '-66px',
            left: '48px',
            fontSize: '2.4em',
            letterSpacing: '-34px'
        }
    };
    var skin = {
        '.navigator': {
            backgroundColor: color.black,
            color: color.green,
            '.nav-section a':  linkColor(color.green)
        },
        '#logo': logo,
        h1: {
            fontSize: font.title
        },
        '.hero h2': {
            fontSize: font.slogan,
            color: color.white
        },
        '.sidebar a': sidebarLink
    };

    api.add(reset);
    api.add(layout);
    api.add(skin);
};
