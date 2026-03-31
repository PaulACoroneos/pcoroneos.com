/** @type {import('shiki').ThemeRegistration} */
const tealSlateTheme = {
  name: "teal-slate",
  type: "dark",
  colors: {
    "editor.background": "#152020",
    "editor.foreground": "#e8e4e0",
    "editorLineNumber.foreground": "#4a6363",
    "editorCursor.foreground": "#c45d3e",
    "editor.selectionBackground": "#2a4040",
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: { foreground: "#6b8a8a", fontStyle: "italic" },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator.new",
        "keyword.other",
        "storage",
        "storage.type",
        "storage.modifier",
      ],
      settings: { foreground: "#d4734f" },
    },
    {
      scope: ["entity.name.function", "meta.function-call", "support.function"],
      settings: { foreground: "#7ecece" },
    },
    {
      scope: [
        "entity.name.class",
        "entity.name.type",
        "entity.other.inherited-class",
        "support.class",
        "support.type",
      ],
      settings: { foreground: "#a8d4d4" },
    },
    {
      scope: ["string", "string.template", "punctuation.definition.string"],
      settings: { foreground: "#e8c99a" },
    },
    {
      scope: ["constant.numeric", "constant.language.boolean"],
      settings: { foreground: "#c49a6e" },
    },
    {
      scope: ["constant.language", "support.constant"],
      settings: { foreground: "#c49a6e" },
    },
    {
      scope: [
        "variable.parameter",
        "variable.other.readwrite",
        "meta.definition.variable",
      ],
      settings: { foreground: "#e8d4b8" },
    },
    {
      scope: [
        "variable.other.property",
        "support.variable.property",
        "entity.other.attribute-name",
      ],
      settings: { foreground: "#b8d8d8" },
    },
    {
      scope: ["keyword.operator", "punctuation.accessor"],
      settings: { foreground: "#a09890" },
    },
    {
      scope: ["punctuation", "meta.brace"],
      settings: { foreground: "#a09890" },
    },
    {
      scope: ["entity.name.tag", "meta.tag"],
      settings: { foreground: "#d4734f" },
    },
    {
      scope: [
        "entity.name.type.ts",
        "meta.type.annotation",
        "support.type.primitive",
      ],
      settings: { foreground: "#a8d4d4" },
    },
    {
      scope: ["string.regexp"],
      settings: { foreground: "#e8c99a" },
    },
    {
      scope: ["invalid", "invalid.illegal"],
      settings: { foreground: "#e07070" },
    },
    {
      scope: ["meta.decorator", "punctuation.decorator"],
      settings: { foreground: "#c49a6e" },
    },
  ],
};

export default tealSlateTheme;
