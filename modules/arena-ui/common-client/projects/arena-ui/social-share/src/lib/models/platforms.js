define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SHARE_PLATFORMS = {
        twitter: {
            name: 'twitter',
            styleClass: 'icon-twitter',
            isNewWindow: true,
            url: 'https://twitter.com/intent/tweet?url=',
            properties: {
                text: 'title',
                via: 'via',
                hashtags: 'hashtags'
            }
        },
        googlePlus: {
            name: 'google-plus',
            styleClass: 'icon-google-plus',
            isNewWindow: true,
            url: 'https://plus.google.com/share?url='
        },
        facebook: {
            name: 'facebook',
            styleClass: 'icon-facebook',
            isNewWindow: true,
            url: 'http://www.facebook.com/sharer/sharer.php?u='
        },
        reddit: {
            name: 'reddit',
            styleClass: 'icon-reddit',
            isNewWindow: true,
            url: 'http://www.reddit.com/submit?url=',
            properties: {
                title: 'title'
            }
        },
        pinterest: {
            name: 'pinterest',
            styleClass: ' icon-pinterest',
            isNewWindow: true,
            url: 'https://pinterest.com/pin/create/button/?url=',
            properties: {
                description: 'title',
                media: 'image'
            }
        },
        linkedin: {
            name: 'linkedin',
            styleClass: ' icon-linkedin',
            isNewWindow: true,
            url: 'http://www.linkedin.com/shareArticle?mini=true&url=',
            properties: {
                title: 'title'
            }
        },
        stumbleUpon: {
            name: 'stumbleUpon',
            styleClass: 'icon-stumbleupon',
            isNewWindow: true,
            url: 'http://www.stumbleupon.com/submit?url=',
            properties: {
                title: 'title'
            }
        },
        tumblr: {
            name: 'tumblr',
            styleClass: 'icon-tumblr',
            isNewWindow: true,
            url: 'http://www.tumblr.com/share/link?url=',
            properties: {
                title: 'title',
                caption: 'description'
            }
        },
        email: {
            name: 'email',
            styleClass: 'icon-envelope-alt',
            isNewWindow: false,
            url: 'mailto:?body=',
            properties: {
                subject: 'title'
            }
        }
    };
});
//# sourceMappingURL=platforms.js.map