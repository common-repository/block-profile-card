/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp = wp,
    apiFetch = _wp.apiFetch;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    BlockControls = _wp$editor.BlockControls,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    ColorPalette = _wp$components.ColorPalette,
    Button = _wp$components.Button;


registerBlockType("mdlr/static-jsx-example", {
    title: __("Profile card"),
    icon: "index-card",
    category: "common",
    attributes: {
        profile: {
            type: "string",
            default: null
        },
        name: {
            type: "string",
            default: null
        },
        designation: {
            type: "string",
            default: null
        },
        short_des: {
            type: "string",
            default: null
        },
        facebook_url: {
            type: "string",
            default: null
        },
        dribble_url: {
            type: "string",
            default: null
        },
        twitter_url: {
            type: "string",
            default: null
        },
        linkedin_url: {
            type: "string",
            default: null
        },
        url: {
            type: "string",
            default: null
        },
        button_text: {
            type: "string",
            default: "Contact"
        },
        button_text_color: {
            type: "string",
            default: "#ffffff"
        },
        button_bg_color: {
            type: "string",
            default: "#000"
        }
    },
    edit: function edit(props) {
        var _props$attributes = props.attributes,
            twitter_url = _props$attributes.twitter_url,
            facebook_url = _props$attributes.facebook_url,
            dribble_url = _props$attributes.dribble_url,
            linkedin_url = _props$attributes.linkedin_url,
            profile = _props$attributes.profile,
            name = _props$attributes.name,
            designation = _props$attributes.designation,
            short_des = _props$attributes.short_des,
            url = _props$attributes.url,
            button_text = _props$attributes.button_text,
            button_text_color = _props$attributes.button_text_color,
            button_bg_color = _props$attributes.button_bg_color,
            setAttributes = props.setAttributes;

        var textColors = [{
            name: "Pale pink",
            slug: "pink",
            color: "rgb(247, 141, 167)"
        }, {
            name: "Vivid red",
            slug: "red",
            color: "rgb(207, 46, 46)"
        }, {
            name: "Luminous vivid orange",
            slug: "orange",
            color: "rgb(255, 105, 0)"
        }, {
            name: "Luminous vivid amber",
            slug: "amber",
            color: "rgb(252, 185, 0)"
        }, {
            name: "Light green cyan",
            slug: "cyan",
            color: "rgb(123, 220, 181)"
        }, {
            name: "Vivid green cyan",
            slug: "green-cyan",
            color: "rgb(0, 53, 132)"
        }, {
            name: "Vivid green cyan",
            slug: "green-cyan",
            color: "rgb(0, 26, 132)"
        }, {
            name: "Vivid green cyan",
            slug: "green-cyan",
            color: "rgb(0, 208, 50)"
        }];
        var pcb_onChangedribbbleURL = function pcb_onChangedribbbleURL(newContent) {
            setAttributes({ dribble_url: newContent });
        };
        var pcb_onChangetwitterURL = function pcb_onChangetwitterURL(newContent) {
            setAttributes({ twitter_url: newContent });
        };
        var pcb_onChangefacebookURL = function pcb_onChangefacebookURL(newContent) {
            setAttributes({ facebook_url: newContent });
        };
        var pcb_onChangelinkedinURL = function pcb_onChangelinkedinURL(newContent) {
            setAttributes({ linkedin_url: newContent });
        };
        var pcb_onSelectProfileImage = function pcb_onSelectProfileImage(media) {
            setAttributes({ profile: media.url, profileClass: "none" });
        };
        var pcb_onSelectname = function pcb_onSelectname(pro_name) {
            setAttributes({ name: pro_name });
        };
        var pcb_onSelectdesignation = function pcb_onSelectdesignation(pro_designation) {
            setAttributes({ designation: pro_designation });
        };
        var pcb_onSelectshort_des = function pcb_onSelectshort_des(pro_short_des) {
            setAttributes({ short_des: pro_short_des });
        };
        var pcb_onSelecturl = function pcb_onSelecturl(pro_url) {
            setAttributes({ url: pro_url });
        };
        var pcb_onSelectbutton_text = function pcb_onSelectbutton_text(pro_button_text) {
            setAttributes({ button_text: pro_button_text });
        };
        var pcb_onchangesbuttontextColor = function pcb_onchangesbuttontextColor(pro_button_text_color) {
            setAttributes({ button_text_color: pro_button_text_color });
        };
        var pcb_onchangesbackgroundColor = function pcb_onchangesbackgroundColor(pro_buttontextColor) {
            setAttributes({ button_bg_color: pro_buttontextColor });
        };

        function pcb_get_facebook_url(facebook_url) {
            if (facebook_url) {
                return wp.element.createElement(
                    "a",
                    { target: "blank", href: facebook_url },
                    wp.element.createElement("i", { className: "fa fa-facebook" })
                );
            }
        }
        function pcb_get_dribble_url(dribble_url) {
            if (dribble_url) {
                return wp.element.createElement(
                    "a",
                    { target: "blank", href: dribble_url },
                    wp.element.createElement("i", { className: "fa fa-dribbble" })
                );
            }
        }
        function pcb_get_twitter_url(twitter_url) {
            if (twitter_url) {
                return wp.element.createElement(
                    "a",
                    { target: "blank", href: twitter_url },
                    wp.element.createElement("i", { className: "fa fa-twitter" })
                );
            }
        }
        function pcb_get_linkedin_url(linkedin_url) {
            if (linkedin_url) {
                return wp.element.createElement(
                    "a",
                    { target: "blank", href: linkedin_url },
                    wp.element.createElement("i", { className: "fa fa-linkedin" })
                );
            }
        }
        var pcb_getImageButton = function pcb_getImageButton(openEvent) {
            if (profile) {
                return wp.element.createElement("img", {
                    src: profile,
                    onClick: openEvent,
                    className: "custom_image_class"
                });
            } else {
                return wp.element.createElement(
                    "div",
                    { className: "button-container" },
                    wp.element.createElement(
                        Button,
                        {
                            onClick: openEvent,
                            className: "button button-large"
                        },
                        "Pick an image"
                    )
                );
            }
        };
        return [wp.element.createElement(
            InspectorControls,
            { key: "demo-inspector" },
            wp.element.createElement(
                PanelBody,
                { title: "Social Links", initialOpen: "true" },
                wp.element.createElement(
                    "div",
                    { className: "backgroundImage" },
                    wp.element.createElement(
                        "label",
                        { "class": "components-base-control__label" },
                        "Facebook link"
                    ),
                    wp.element.createElement(TextControl, {
                        tagName: "h1",
                        className: "token",
                        value: facebook_url,
                        onChange: pcb_onChangefacebookURL
                    })
                ),
                wp.element.createElement(
                    "div",
                    { className: "backgroundImage" },
                    wp.element.createElement(
                        "label",
                        { className: "components-base-control__label" },
                        "Dribbble link"
                    ),
                    wp.element.createElement(TextControl, {
                        tagName: "h1",
                        className: "token",
                        value: dribble_url,
                        onChange: pcb_onChangedribbbleURL
                    })
                ),
                wp.element.createElement(
                    "div",
                    { className: "backgroundImage" },
                    wp.element.createElement(
                        "label",
                        { className: "components-base-control__label" },
                        "Twitter link"
                    ),
                    wp.element.createElement(TextControl, {
                        tagName: "h1",
                        className: "token",
                        value: twitter_url,
                        onChange: pcb_onChangetwitterURL
                    })
                ),
                wp.element.createElement(
                    "div",
                    { className: "backgroundImage" },
                    wp.element.createElement(
                        "label",
                        { className: "components-base-control__label" },
                        "Linkedin link"
                    ),
                    wp.element.createElement(TextControl, {
                        tagName: "h1",
                        className: "token",
                        value: linkedin_url,
                        onChange: pcb_onChangelinkedinURL
                    })
                )
            ),
            wp.element.createElement(
                PanelBody,
                { title: "Contact", initialOpen: "true" },
                wp.element.createElement(
                    "label",
                    { "class": "components-base-control__label" },
                    "Profile Link"
                ),
                wp.element.createElement(TextControl, {
                    tagName: "h1",
                    className: "token",
                    value: url,
                    onChange: pcb_onSelecturl
                }),
                wp.element.createElement(
                    "label",
                    { "class": "components-base-control__label" },
                    "Button text"
                ),
                wp.element.createElement(TextControl, {
                    tagName: "h1",
                    className: "token",
                    value: button_text,
                    onChange: pcb_onSelectbutton_text
                }),
                wp.element.createElement(
                    "label",
                    { "class": "components-base-control__label" },
                    "Button Text color"
                ),
                wp.element.createElement(ColorPalette, {
                    type: "string",
                    value: button_text_color,
                    colors: textColors,
                    label: "Button text color",
                    onChange: pcb_onchangesbuttontextColor
                }),
                wp.element.createElement(
                    "label",
                    { "class": "components-base-control__label" },
                    "Button background Color:"
                ),
                wp.element.createElement(ColorPalette, {
                    type: "string",
                    value: button_bg_color,
                    colors: textColors,
                    label: "Background Color",
                    onChange: pcb_onchangesbackgroundColor
                })
            )
        ), wp.element.createElement(
            "div",
            { className: "card" },
            wp.element.createElement(MediaUpload, {
                onSelect: pcb_onSelectProfileImage,
                type: "image",
                value: profile,
                render: function render(_ref) {
                    var open = _ref.open;
                    return pcb_getImageButton(open);
                }
            }),
            wp.element.createElement(RichText, {
                tagName: "h1",
                placeholder: __("Enter name...", "custom-block"),
                value: name,
                onChange: pcb_onSelectname,
                keepPlaceholderOnFocus: true
            }),
            wp.element.createElement(RichText, {
                tagName: "p",
                className: "title",
                placeholder: __("Enter designation...", "custom-block"),
                value: designation,
                onChange: pcb_onSelectdesignation,
                keepPlaceholderOnFocus: true
            }),
            wp.element.createElement(RichText, {
                tagName: "p",
                placeholder: __("Enter description...", "custom-block"),
                value: short_des,
                onChange: pcb_onSelectshort_des,
                keepPlaceholderOnFocus: true
            }),
            wp.element.createElement(
                "div",
                { style: { margin: "24px 0" } },
                pcb_get_facebook_url(facebook_url),
                pcb_get_dribble_url(dribble_url),
                pcb_get_twitter_url(twitter_url),
                pcb_get_linkedin_url(linkedin_url)
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "a",
                    {
                        href: url,
                        className: "button",
                        style: {
                            color: button_text_color,
                            backgroundColor: button_bg_color
                        }
                    },
                    button_text
                )
            )
        )];
    },
    save: function save(props) {
        var _props$attributes2 = props.attributes,
            twitter_url = _props$attributes2.twitter_url,
            facebook_url = _props$attributes2.facebook_url,
            dribble_url = _props$attributes2.dribble_url,
            linkedin_url = _props$attributes2.linkedin_url,
            profile = _props$attributes2.profile,
            name = _props$attributes2.name,
            designation = _props$attributes2.designation,
            short_des = _props$attributes2.short_des,
            url = _props$attributes2.url,
            button_text = _props$attributes2.button_text,
            button_text_color = _props$attributes2.button_text_color,
            button_bg_color = _props$attributes2.button_bg_color;

        function pcb_get_facebook_url(facebook_url) {
            if (facebook_url) {
                return wp.element.createElement(
                    "a",
                    { target: "blank", href: facebook_url },
                    wp.element.createElement("i", { className: "fa fa-facebook" })
                );
            }
        }
        function pcb_get_dribble_url(dribble_url) {
            if (dribble_url) {
                return wp.element.createElement(
                    "a",
                    { target: "blank", href: dribble_url },
                    wp.element.createElement("i", { className: "fa fa-dribbble" })
                );
            }
        }
        function pcb_get_twitter_url(twitter_url) {
            if (twitter_url) {
                return wp.element.createElement(
                    "a",
                    { target: "blank", href: twitter_url },
                    wp.element.createElement("i", { className: "fa fa-twitter" })
                );
            }
        }
        function pcb_get_linkedin_url(linkedin_url) {
            if (linkedin_url) {
                return wp.element.createElement(
                    "a",
                    { target: "blank", href: linkedin_url },
                    wp.element.createElement("i", { className: "fa fa-linkedin" })
                );
            }
        }
        return wp.element.createElement(
            "div",
            { className: "card" },
            wp.element.createElement("img", {
                className: "custom_image_class",
                src: profile,
                style: { height: "120", width: "250px" }
            }),
            wp.element.createElement(RichText.Content, { tagName: "h1", value: name }),
            wp.element.createElement(RichText.Content, {
                tagName: "p",
                className: "title",
                value: designation
            }),
            wp.element.createElement(RichText.Content, { tagName: "p", value: short_des }),
            wp.element.createElement(
                "div",
                { style: { margin: "24px 0" } },
                pcb_get_facebook_url(facebook_url),
                pcb_get_dribble_url(dribble_url),
                pcb_get_twitter_url(twitter_url),
                pcb_get_linkedin_url(linkedin_url)
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "a",
                    {
                        href: url,
                        className: "button",
                        style: {
                            color: button_text_color,
                            backgroundColor: button_bg_color
                        }
                    },
                    button_text
                )
            )
        );
    }
});

/***/ })
/******/ ]);